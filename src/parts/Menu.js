import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Menu.css";

function Menu() {
  return (
    <>
      <div className="menu box shadow2">
        <Link to={"/home"}>
          <div
            className="menu__item"
          >
            <i className="fa-solid fa-house menu__icon"></i>
            <p className="menu__desc">Trang chủ</p>
          </div>
        </Link>
        <Link to={"/explore"}>
          <div
            className="menu__item"
          >
            <i className="fa-solid fa-hashtag menu__icon"></i>
            <p className="menu__desc">Chủ đề</p>
          </div>
        </Link>
        <Link to={"/notifications"}>
          <div
            className="menu__item"
          >
            <i className="fa-solid fa-bell menu__icon">
              <span className="noti-counter">
              </span>
            </i>
            <p className="menu__desc">Thông báo</p>
          </div>
        </Link>
        <Link to={"/bookmark"}>
          <div
            className="menu__item"
          >
            <i className="fa-solid fa-bookmark menu__icon"></i>
            <p className="menu__desc">Dấu trang</p>
          </div>
        </Link>
        <Link to={"/settings"}>
          <div
            className="menu__item"
          >
            <i className="fa-solid fa-gear menu__icon"></i>
            <p className="menu__desc">Cài đặt</p>
          </div>
        </Link>
        <button className="btn btn--blue poster__btn">Đăng bài</button>
      </div>
    </>
  );
}

export default Menu;
