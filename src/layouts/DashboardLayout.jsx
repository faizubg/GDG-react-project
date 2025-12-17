import React from "react"
import Sidebar from "../components/Sidebar"
import TopBar from "../components/NavBar"

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-area">
        <TopBar />
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout
