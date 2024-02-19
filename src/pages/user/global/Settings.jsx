import quit from "../../../assets/quitX.svg";
import React from "react";

export default function Settings({ handleSettingsClick }) {
  return (
    <div id="shade" className="settingsContainer">
      <div id="popUpContainer">
        <button onClick={handleSettingsClick} id="quitBtn">
          <img src={quit} alt=""></img>
        </button>

        <h2>Settings</h2>
      </div>
    </div>
  );
}
