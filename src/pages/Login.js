import React, { useEffect } from "react";
// import GoogleLogin from "react-google-login";
import { Link, useNavigate } from "react-router-dom";
import { signInWithGoogle} from "../service/firebase.js";
import "../assets/css/Login.css";

function Login() {
  const responseGoogle = (response) => {
    console.log(response);
  };
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/home");
  }
  const handleEmail = () => {
    navigate("/home");
  }
  return (
    <>
      <div className="login">
        <div className="login__background">
          <div className="login__container column">
            <h2 className="login__heading">ĐĂNG NHẬP VÀO FPT HUB</h2>
            <div className="login__item">
              <i className="fa-solid fa-user login__icon"></i>
              <input
                type="text"
                className="login__input"
                placeholder="Tên tài khoản"
              ></input>
            </div>
            <div className="login__item">
              <i className="fa-solid fa-lock login__icon"></i>
              <input
                type="password"
                className="login__input"
                placeholder="Mật khẩu"
              ></input>
            </div>
            <div className="row login__sub">
              <div className="row">
                <input
                  type="checkbox"
                  className="login__checkbox"
                  placeholder=""
                ></input>
                <p className="login__remember">Nhớ mật khẩu</p>
              </div>
              <Link to="/forgot" className="login__register">Quên mật khẩu?</Link>
            </div>
            <button className="login__button btn" onClick={handleSubmit}>Đăng nhập</button>
            <p>Hoặc</p>
            <button className="google__button" onClick={signInWithGoogle}>
              <img className="google_icon" src={require("../assets/images/unnamed.png")}></img>
              Đăng nhập bằng Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
