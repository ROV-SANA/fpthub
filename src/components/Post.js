import React from "react";
import "../assets/css/flex.css";
import "../assets/css/Post.css";
import "../assets/css/tags.css";
import "../assets/css/setup.css";

function Post(props) {
  return (
    <>
      <div className="post box shadow2">
        <div className="post__tittle">
          <div className="row">
            <img
              className="post__avt"
              src={require("../assets/images/avt1.png")}
              alt=""
            ></img>
            <div className="column justify-center">
              <div className="row">
                <div className="post__name">Trần Văn Bảo Thắng</div>
                <span className="tag tag--dark tag--learning">
                  Learning
                </span>
              </div>
              <div className="post__time">4 tháng 6 lúc 11:50</div>
            </div>
          </div>
          <div className="row">
            <div className="counter counter--seed">
              <i className="fa-solid fa-seedling counter__icon"></i>
              12 mầm
            </div>
            <div className="counter counter--flag">
              <i className="fa-solid fa-flag counter__icon"></i>1 cờ
            </div>
            <i className="fa-solid fa-ellipsis"></i>
          </div>
        </div>
        <div className="post__content">
          Biến môi trường bao gồm các biến môi trường hệ thống (system
          variables) và các biến môi trường người dùng (user variables). Các
          biến môi trường áp dụng cho hệ thống có phạm vi hoạt động trên toàn hệ
          thống máy tính. Có nghĩa là bất cứ người dùng nào cũng có thể sử dụng
          giá trị của các biến hệ thống. Tuy nhiên chỉ có người dùng admin mới
          có quyền thay đổi giá trị của các biến này.
        </div>
        <div className="bottom row">
          <div
            className="bottom__item seed"
          >
            <i className="fa-solid fa-seedling counter__icon"></i>
            Tặng mầm
          </div>
          <div
            className="bottom__item flag"
          >
            <i className="fa-solid fa-flag counter__icon"></i>
            Cắm cờ
          </div>
          <div className="bottom__item">
            <i className="fa-solid fa-comment counter__icon"></i>
            Bình luận
          </div>
          <div
            className="bottom__item bookmark"
          >
            <i className="fa-solid fa-bookmark counter__icon"></i>
            Lưu bài
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
