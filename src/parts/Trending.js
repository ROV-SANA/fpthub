import React from 'react'
import "../assets/css/Trending.css";

function Trending(props) {
  const trendingList = props.list;
  return (
    <>
      <div className="trending shadow2 box">
          <h2 className="trending__heading"> Nổi bật</h2>
          {
            trendingList.map((item, index) => (
              <div className="trending__item" key={index}>
                <div className="trending__tittle">Chủ đề nổi trội ở {item.position}</div>
                <p className="trending__name">#{item.tag.toUpperCase()}</p>
                <i className="fa-solid fa-ellipsis trending__icon"></i>
              </div>
            ))
          }
      </div>
    </>
  )
}

export default Trending