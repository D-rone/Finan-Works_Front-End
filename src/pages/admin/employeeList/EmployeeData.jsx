import React, { useEffect } from "react";
import "../global/popUpStyle.css";
import quit from "../../../assets/quitX.svg";

export default function EmployeeData({ data, handleProfileClick }) {
  return (
    <div id="shade">
      <div id="popUpContainer">
        <button onClick={handleProfileClick} id="quitBtn">
          <img src={quit} alt=""></img>
        </button>

        <h2>Employee Information</h2>
        <table id="profileInfoTable">
          <tbody>
            <tr>
              <th>Name :</th>
              <td>
                <div className="profileData">{data.name}</div>
              </td>
            </tr>
            <tr>
              <th>Email : </th>
              <td>
                <div className="profileData">{data.email}</div>
              </td>
            </tr>
            <tr>
              <th>Type : </th>
              <td>
                <div className="profileData">{data.type}</div>
              </td>
            </tr>
            <tr>
              <th>N° Tel :</th>
              <td>
                <div className="profileData">{data.phone}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
