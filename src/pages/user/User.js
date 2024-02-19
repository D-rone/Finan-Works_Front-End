import React, { useState, useEffect } from "react";
import SideBar from "./global/SideBar.jsx";
import "./employee.css";

import { Outlet } from "react-router-dom";
import axios from "axios";

export default function Admin() {
  let [userName, setUserName] = useState("");
  useEffect(() => {
    let checkLoginStatus = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/users/showMe",
          { withCredentials: true }
        );
        let data = await response.data;
        let user = data?.user;
        if (user) {
          if (user.role == "admin") {
            window.location.href = "/admin";
          } else {
            setUserName(user?.name);
          }
        } else {
          window.location.href = "/login";
        }
      } catch (error) {
        console.log(error?.response?.data);
        if (error.response.status === 401) window.location.href = "/login";
        else window.location.href = "/404";
      }
    };
    checkLoginStatus();
  });
  return (
    <div id="dashboard_container">
      <div id="ellipse1" className="ellipse"></div>
      <div id="ellipse2" className="ellipse"></div>
      <div id="ellipse3" className="ellipse"></div>
      <section id="sideSection">
        <SideBar />
      </section>
      <Outlet context={[userName]} />
    </div>
  );
}
