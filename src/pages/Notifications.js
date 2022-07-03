import React, { useState } from 'react'
import Header from "../parts/Header";
import Menu from "../parts/Menu";
import Trending from "../parts/Trending";
import FAKE_CURRENT_USER from "../data/currentUser.js";
import FAKE_TRENDING_LIST from "../data/trendingList.js"
import Mention from '../components/Mention';
import Systems from '../components/Systems';
import "../assets/css/Notifications.css"

function Notifications() {
  const [option, setOption] = useState('Mention');
  return (
    <>
      <Header currentUser={FAKE_CURRENT_USER}></Header>
      <div className="z0 wrapper">
        <div className="container">
          <div className="box-content">
            <Menu choose={3}></Menu>
            <div className="column w58 z0 margin-center padding-shadow">
              <div className="notifications box">
                <h2 className="notifications__heading">Thông báo</h2>
                <div className="nav row">
                  <div className={option === 'Mention' ? "nav__item active" : "nav__item"} onClick={() => setOption('Mention')}>
                    <p className="nav__tittle">Đề cập</p>
                    <div className="nav__icon"></div>
                  </div>
                  <div className={option === 'Systems' ? "nav__item active" : "nav__item"} onClick={() => setOption('Systems')}>
                    <p className="nav__tittle">Hệ thống</p>
                    <div className="nav__icon"></div>
                  </div>
                </div>
                {
                  option === 'Mention' ? <Mention></Mention> : <Systems></Systems>
                }
              </div>
            </div>
            <Trending list={FAKE_TRENDING_LIST}></Trending>
          </div>
        </div>
      </div>
    </>
  )
}

export default Notifications;