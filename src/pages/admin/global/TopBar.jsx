import React from "react";
import "./globalStyle.css";
import notifLogo from "../../../assets/notification.svg";
import adminPic from "../../../assets/topG.PNG";
import searchLogo from "../../../assets/search.svg";
import { useOutletContext } from "react-router-dom";


export default function TopBar() {
  let [adminName] = useOutletContext();  
  return (
    <>
      <header id="topbar">
        <div id="topbarInput">
          <img src={searchLogo} alt="" />
          <input type="text" placeholder="Search here..." />  
        </div>
        <div id="topbarOptions">
          <button id="notificationsBtn">
            <img src={notifLogo} alt="" />
          </button>
          <div id="adminInfo">
            <img src={adminPic} alt="" />
            <h3>{adminName}</h3>
          </div>
        </div>
      </header>
      <div id="headerSpacer"></div>
    </>
  );
}
