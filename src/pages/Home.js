import React, { useState } from "react";
import Composer from "../components/Composer";
import Post from "../components/Post";
import Header from "../parts/Header";
import Menu from "../parts/Menu";
import Trending from "../parts/Trending";
import FAKE_POST_LIST from "../data/postList.js";
import FAKE_TRENDING_LIST from "../data/trendingList.js";
import FAKE_CURRENT_USER from "../data/currentUser.js";
import "../assets/css/flex.css";
import "../assets/css/Home.css";
import Poster from "../components/Poster";

function Home() {
  return (
    <>
      <Header currentUser={FAKE_CURRENT_USER}></Header>
      <div className="z0 wrapper">
        <div className="container">
          <div className="box-content">
            <Menu choose={1}></Menu>
            <div className="column w58 z0 margin-center padding-shadow">
              <Composer currentUser={FAKE_CURRENT_USER}></Composer>
              <Post></Post>
              <Post></Post>
              <Post></Post>
              <Post></Post>
              <Post></Post>
              <Post></Post>
            </div>
            <Trending list={FAKE_TRENDING_LIST}></Trending>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
