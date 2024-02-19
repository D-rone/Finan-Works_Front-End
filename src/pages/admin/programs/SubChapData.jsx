import React, { useEffect } from "react";
import "../global/popUpStyle.css";
import quit from "../../../assets/quitX.svg";

export default function SubChapData({ data, handleSubChapterClick }) {
  let articles = data?.articles;
  let articlesText = articles.reduce(function (prevVal, currVal, idx) {
    let data = `${currVal.nom} : ${currVal.text}`;
    return idx == 0 ? (
      data
    ) : (
      <>
        {prevVal} <br />
        <br /> {data}
      </>
    );
  }, "");
  return (
    <div id="shade">
      <div id="popUpContainer">
        <button onClick={handleSubChapterClick} id="quitBtn">
          <img src={quit} alt=""></img>
        </button>
        <h2>Sub Chapter : {data.name}</h2>
        <div className="user_description_box">
          <div className="information_user_box">
            <div className="zero">
              <div> Name of Sub-chapter :</div>
              <div className="second_one">{data.name}</div>
            </div>
            <div className="one">
              <div>Description : </div>
              <div className="second_one">
                <div>{data.description}</div>
              </div>
            </div>
            <div className="two">
              <div>Status : </div>
              <div className="second_one">{data.status}</div>
            </div>
            <div className="three">
              <div> Date of Creation:</div>
              <div className="second_one">{data.createdAt.toGMTString()}</div>
            </div>
            <div className="three">
              <div> Articles :</div>
              <div className="second_one"></div>
            </div>
          </div>
        </div>

        <div className="Articles_box">
          {data.articles.map((item) => (
            <div className="article_div" key={item._id}>
              {item.nom}:
              <br />
              {item.text.split("\n").map((i) => (
                <>
                  {i}
                  <br />
                </>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
