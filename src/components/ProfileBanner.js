import React from "react";
import FAKE_CURRENT_USER from "../data/currentUser";
import "../assets/css/ProfileBanner.css";
import "../assets/css/setup.css";

function ProfileBanner() {
  const currentUser = FAKE_CURRENT_USER;
  return (
    <>
      <div className="jumbotron row">
        <div className="p28 container">
          <div className="col-6 column">
            <img src={currentUser.avatar} className="jumbotron__avt"></img>
            <div className="row jumbotron__counter">
              <div className="counter counter--seed">
                <i className="fa-solid fa-seedling counter__icon"></i>
                {currentUser.seeds} mầm
              </div>
              <div className="counter counter--flag">
                <i className="fa-solid fa-seedling counter__icon"></i>
                {currentUser.flags} cờ
              </div>
            </div>
          </div>
          <div className="jumbotron__content">
            <p className="jumbotron__name">{currentUser.name}</p>
            <p className="jumbotron__desc">{currentUser.desc}</p>
            <p className="jumbotron__registered">Tham gia từ 7 tháng 2 năm 2022</p>
          </div>
          <div className="col-6 column junbotron__number">{currentUser.postList.length} bài viết</div>
        </div>
      </div>
    </>
  );
}

export default ProfileBanner;
