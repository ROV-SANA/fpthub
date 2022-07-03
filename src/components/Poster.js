import React, { useState } from "react";
import FAKE_CURRENT_USER from "../data/currentUser";
import times from "../assets/images/times.svg";
import plus from "../assets/images/plus.svg";
import smile from "../assets/images/smile.svg";
import file from "../assets/images/file.svg";
import image from "../assets/images/image.svg";
import "../assets/css/Poster.css";
import "../assets/css/tags.css";

function Poster(props) {
  const [isShow, setIsShow] = useState(true);
  const sendData = () => {
    props.parentsCallback(isShow);
  };
  isShow === false && sendData();
  return (
    <>
      <div className="overlay">
        <div className="poster">
          <img
            src={times}
            className="times"
            alt={"times"}
            onClick={() => setIsShow(false)}
          ></img>
          <h2 className="poster__heading">Tạo bài viết</h2>
          <div className="poster__content">
            <div className="row">
              <img
                src={FAKE_CURRENT_USER.avatar}
                className="poster__avt"
                alt={"avt"}
              ></img>
              <p className="poster__name">{FAKE_CURRENT_USER.name}</p>
            </div>
            <input
              type="text"
              className="poster__input"
              placeholder="Nội dung bài viết..."
            ></input>
            <div className="poster__topic row">
              <div className="row">
                <p className="">Chủ đề của bạn: </p>
                
              </div>
              <img src={smile} />
            </div>
            <div className="poster__attachment row">
              <p className="">Thêm vào bài viết</p>
              <div className="row">
                <img src={image} />
                <img src={file} />
              </div>
            </div>
          </div>
          <button className="btn btn--blue poster__btn active">Đăng bài</button>
        </div>
      </div>
    </>
  );
}

export default Poster;
