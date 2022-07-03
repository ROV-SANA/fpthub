import React from "react";
import Header from "../parts/Header";
import Menu from "../parts/Menu";
import Trending from "../parts/Trending";
import FAKE_CURRENT_USER from "../data/currentUser.js";
import FAKE_TRENDING_LIST from "../data/trendingList.js";
import FAKE_POST_LIST from "../data/postList";
import "../assets/css/Bookmark.css";
import Post from "../components/Post";

function Bookmark() {
  const currentUser = FAKE_CURRENT_USER;
  const postList = FAKE_POST_LIST;
  return (
    <>
      <Header currentUser={FAKE_CURRENT_USER}></Header>
      <div className="z0 wrapper">
        <div className="container">
          <div className="box-content">
            <Menu></Menu>
            <div className="column w58 z0 margin-center padding-shadow">
              <div className="bookmarkList">
                <h2 className="bookmarkList__heading">Dấu trang</h2>
                <p className="bookmarkList__username">
                  @{currentUser.userName}
                </p>
                <Post></Post>
                <Post></Post>
                <Post></Post>
                <Post></Post>
              </div>
            </div>
            <Trending list={FAKE_TRENDING_LIST}></Trending>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bookmark;
