import React from "react";
import Header from "../parts/Header";
import Menu from "../parts/Menu";
import Trending from "../parts/Trending";
import FAKE_CURRENT_USER from "../data/currentUser.js";
import FAKE_TRENDING_LIST from "../data/trendingList.js";
import banner from "../assets/images/banner.png";
import "../assets/css/Explore.css";

function Explore() {
  return (
    <>
      <Header currentUser={FAKE_CURRENT_USER}></Header>
      <div className="z0 wrapper">
        <div className="container">
          <div className="box-content">
            <Menu choose={2}></Menu>
            <div className="column w58 z0 margin-center padding-shadow">
              <div className="box column explore">
                <img className="explore__banner" src={banner} alt=""></img>
                <div className="explore__content">
                  <h2 className="explore__heading">Chủ đề nổi bật</h2>
                  {FAKE_TRENDING_LIST.map((item, index) => (
                    <div className="explore__item" key={index}>
                        <p className="explore__tittle">Chủ đề nổi trội ở {item.position}</p>
                        <p className="explore__tag">#{item.tag.toUpperCase()}</p>
                        <i className="fa-solid fa-ellipsis explore__icon"></i>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Trending list={FAKE_TRENDING_LIST}></Trending>
          </div>
        </div>
      </div>
    </>
  );
}

export default Explore;
