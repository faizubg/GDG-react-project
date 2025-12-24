import React from "react";
import { Outlet } from "react-router-dom"; // ✅ ADD THIS
import Sidebar from "../components/Sidebar";
import TopBar from "../components/NavBar";
import "../App.css";

const DashboardLayout = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-area">
        <TopBar />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
