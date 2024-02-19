import React, { useState } from "react";
import Admin from "./pages/admin/Admin.js";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/admin/dashboard/Dashboard.jsx";
import EmployeeList from "./pages/admin/employeeList/EmployeeList.jsx";
import Login from "./pages/login/Login.jsx";
import "./App.css";
import Page_404 from "./pages/Page_404.jsx";
import RequestsList from "./pages/admin/requests/RequestsList.jsx";
import Program from "./pages/admin/programs/ProgramList";
import SubChaptersList from "./pages/admin/programs/SubChapList.jsx";
import User from "./pages/user/User.js";
import AnnouncesList from "./pages/admin/announcement/AnnouncesList.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/home/Home.jsx";
import HistoryList from "./pages/admin/history/HistoryList.jsx";

export default function App() {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const submitForm = () => {
    setFormIsSubmitted(true);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="admin" element={<Admin />}>
          <Route path="" element={<Dashboard el="Dashboard" />} />
          <Route path="employee_list" element={<EmployeeList />} />
          <Route path="requests" element={<RequestsList />} />
          <Route path="history" element={<HistoryList />} />
          <Route path="programs" element={<Program el="Programs" />} />
          <Route path="sub_chapter" element={<SubChaptersList />} />
          <Route path="announcements" element={<AnnouncesList />} />
        </Route>
        <Route path="user" element={<User />}></Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Page_404 />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}
