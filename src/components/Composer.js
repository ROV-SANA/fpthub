import React, { useState } from "react";
import "../assets/css/Composer.css";
import "../assets/css/setup.css";
import Poster from "./Poster";

function Composer(props) {
  const user = props.currentUser;
  const [isShow, setIsShow] = useState(false);
  const callbackIsShow = (childData) => {
    setIsShow(childData);
  };
  return (
    <>
      <div className="composer shadow2 box" onClick={() => setIsShow(!isShow)}>
        <img className="composer__avt" src={user.avatar} alt={user.name}></img>
        <input
          type="text"
          className="composer__input"
          placeholder="Đăng bài"
        ></input>
        <i className="fa-solid fa-images composer__icon"></i>
        <i className="fa-solid fa-file composer__icon"></i>
      </div>
      {
        isShow && <Poster parentsCallback={callbackIsShow}></Poster>
      }
    </>
  );
}

export default Composer;
