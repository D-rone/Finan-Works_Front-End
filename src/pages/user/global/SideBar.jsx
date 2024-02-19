import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import finanWorksLogo from "../../../assets/Logo.svg";
import dashboardLogo from "../../../assets/dashboardLogo.svg";
import employeeListLogo from "../../../assets/employeeListLogo.svg";
import requestLogo from "../../../assets/requestLogo.svg";
import winnersLogo from "../../../assets/winnersLogo.svg";
import historyLogo from "../../../assets/historyLogo.svg";
import programsLogo from "../../../assets/programsLogo.svg";
import settingsLogo from "../../../assets/settings.svg";
import logoutLogo from "../../../assets/logOut.svg";
import Settings from "./Settings";
import axios from "axios";

let routes = [
  {
    name: "Dashboard",
    path: "",
    logo: dashboardLogo,
  },
  {
    name: "Employee list",
    path: "employee_list",
    logo: employeeListLogo,
  },
  {
    name: "Requests",
    path: "requests",
    logo: requestLogo,
  },
  {
    name: "History",
    path: "history",
    logo: historyLogo,
  },
  {
    name: "Programs",
    path: "programs",
    logo: programsLogo,
  },
  {
    name: "Announcements",
    path: "announcements",
    logo: dashboardLogo,
  },
];

function CustomLink({ to, children, logo }) {
  let resolvedPath = useResolvedPath(to);
  let isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li id={isActive ? "activeLink" : ""}>
      <img src={logo} alt="" />
      <Link to={to}>{children}</Link>
      <div></div>
    </li>
  );
}

export default function SideBar() {
  let [settingsCard, displaySettings] = useState(false);

  let handleSettingsClick = (e) => {
    displaySettings((prev) => !prev);
  };

  let DisplaySettings = () => {
    if (settingsCard)
      return <Settings handleSettingsClick={handleSettingsClick} />;
  };

  let logOut = async () => {
    try {
      const response = await axios.delete(
        "http://localhost:5000/api/v1/auth/logout",
        { withCredentials: true }
      );
      let data = await response.data;
      console.log(data?.msg);
      window.location.href = "/login";
    } catch (error) {
      console.log(error?.response?.data);
      window.location.href = "/404";
    }
  };
  return (
    <>
      <DisplaySettings />
      <div id="sidebarContainer">
        <div id="sideLogo">
          <img src={finanWorksLogo} alt="" />
        </div>

        <nav id="sideNavigation">
          <div id="sideNavSpacer"></div>
          <ul>
            {routes.map((route) => (
              <CustomLink key={route.path} to={route.path} logo={route.logo}>
                {route.name}
              </CustomLink>
            ))}
          </ul>
        </nav>
        <div id="bottomSidecontainer">
          <div>
            <button onClick={handleSettingsClick}>
              <img src={settingsLogo} alt="" />
              Settings
            </button>
            <button onClick={logOut}>
              <img src={logoutLogo} alt="" />
              Log out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
