import React from "react";
import Post from "../components/Post";
import Header from "../parts/Header";
import Menu from "../parts/Menu";
import Trending from "../parts/Trending";
import FAKE_TRENDING_LIST from "../data/trendingList.js";
import FAKE_CURRENT_USER from "../data/currentUser.js";
import ProfileBanner from "../components/ProfileBanner";
import "../assets/css/setup.css";
import "../assets/css/flex.css";
import "../assets/css/Profile.css";

function Profile() {
  const currentUser = FAKE_CURRENT_USER;
  return (
    <>
      <Header currentUser={FAKE_CURRENT_USER}></Header>
      <div className="z0 wrapper">
        <div className="main">
          <ProfileBanner></ProfileBanner>
          <div className="z0 wrapper profile">
            <div className="container">
              <div className="box-content">
                <Menu choose={4}></Menu>
                <div className="column w58 z0 margin-center padding-shadow">
                  <Post></Post>
                </div>
                <Trending list={FAKE_TRENDING_LIST}></Trending>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
