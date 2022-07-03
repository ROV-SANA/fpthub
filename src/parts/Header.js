import React from "react";
import SearchBox from "../components/SearchBox";
import "../assets/css/Header.css";
import { Link, useNavigate } from "react-router-dom";
import settings from "../assets/images/settings.svg";
import darkmode from "../assets/images/darkmode.svg";
import contribute from "../assets/images/contribute.svg";
import logout from "../assets/images/logout.svg";

function Header(props) {
  const currentUser = props.currentUser;
  const shortName = () => {
    const words = currentUser.name.split(" ");
    return words[words.length - 2] + " " + words[words.length - 1];
  };

  const handleClick = () => {
    const dropdownOptions = document.querySelector(".dropdown__options");
    var isActive = dropdownOptions.classList.contains("active");
    !isActive
      ? dropdownOptions.classList.add("active")
      : dropdownOptions.classList.remove("active");
    console.log(isActive);
  };
  const navigate = useNavigate();
  return (
    <>
      <div className="wrapper shadow1" htmlFor="header">
        <div className="container">
          <div className="header">
            <div
              className="header__logo"
              onClick={() => navigate("/home")}
            ></div>
            <SearchBox></SearchBox>
            <div className="dropdown">
              <div className="row">
                <img
                  className="dropdown__avt"
                  src={currentUser.avatar}
                  alt={currentUser.name}
                ></img>
                <div className="dropdown__name">{shortName()}</div>
              </div>
              <i
                className="fa-solid fa-caret-down dropdown__icon"
                onClick={handleClick}
              ></i>
              <div className="dropdown__options box">
                <div className="dropdown__title row">
                  <img
                    className="dropdown__avt"
                    src={currentUser.avatar}
                    alt={currentUser.name}
                  ></img>
                  <div className="column">
                    <div className="dropdown__name">{shortName()}</div>
                    <Link to={"/profile"}>Xem hồ sơ</Link>
                  </div>
                </div>
                <div className="column">
                  <Link to="/settings">
                    <div className="dropdown__item row">
                      <img className="" src={settings} alt=""></img>
                      Cài đặt
                    </div>
                  </Link>
                  <div className="dropdown__item row">
                    <img className="" src={darkmode} alt=""></img>
                    Darkmode
                  </div>
                  <div className="dropdown__item row">
                    <img className="" src={contribute} alt=""></img>
                    Đóng góp
                  </div>
                  <Link to="/login">
                    <div className="dropdown__item row">
                      <img className="" src={logout} alt=""></img>
                      Đăng xuất
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
