import React from "react";
import Composer from "../components/Composer";
import Post from "../components/Post";
import Header from "../parts/Header";
import Menu from "../parts/Menu";
import Trending from "../parts/Trending";
import FAKE_POST_LIST from "../data/postList.js";
import FAKE_TRENDING_LIST from "../data/trendingList.js";
import FAKE_CURRENT_USER from "../data/currentUser.js";
import ProfileBanner from "../components/ProfileBanner";
import "../assets/css/setup.css";
import "../assets/css/flex.css";
import "../assets/css/Settings.css";

function Settings() {
  const currentUser = FAKE_CURRENT_USER;
  return (
    <>
      <Header currentUser={FAKE_CURRENT_USER}></Header>
      <div className="z0 wrapper">
        <div className="main">
          <ProfileBanner></ProfileBanner>
          <div className="container">
            <div className="settings">
              <h2 className="settings__heading">
                Cập nhật thông tin tài khoản
              </h2>
              <div className="settings__left column">
                <div className="row">
                  <div className="settings__first settings__item column">
                    <label className="settings__label">
                      Họ<span className="red">*</span>
                    </label>
                    <input
                      type="text"
                      className="settings__input"
                      placeholder="Trần Văn"
                    ></input>
                  </div>
                  <div className="settings__last settings__item column">
                    <label className="settings__label">
                      Tên<span className="red">*</span>
                    </label>
                    <input
                      type="text"
                      className="settings__input"
                      placeholder="Bảo Thắng"
                    ></input>
                  </div>
                </div>
                <div className="settings__desc settings__item column">
                  <label className="settings__label">
                    Thông tin giới thiệu
                  </label>
                  <textarea
                    type="text"
                    className="settings__input"
                    placeholder="Mô tả bản thân..."
                    cols="50" rows="5"
                  ></textarea>
                </div>
                <div className="row">
                  <div className="settings__first settings__item column">
                    <label className="settings__label">
                      Email address<span className="red">*</span>
                    </label>
                    <input
                      type="text"
                      className="settings__input"
                      placeholder={currentUser.email}
                    ></input>
                  </div>
                  <div className="settings__last settings__item column">
                    <label className="settings__label">
                      User name<span className="red">*</span>
                    </label>
                    <input
                      type="text"
                      className="settings__input"
                      placeholder={currentUser.userName}
                    ></input>
                  </div>
                </div>
                <div className="settings__password settings__item column">
                  <label className="settings__label">
                    Password<span className="red">*</span>
                  </label>
                  <input
                    type="password"
                    className="settings__input"
                    placeholder="*********"
                  ></input>
                </div>
                <p className="settings__item"><span className="red">*</span>Bắt buộc</p>
                <button className="settings__button btn btn--blue">Lưu thông tin tài khoản</button>
              </div>
              <div className="settings__right"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
