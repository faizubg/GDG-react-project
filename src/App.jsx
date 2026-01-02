import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./layouts/AuthContext";
import ProtectedRoute from "./router/Protectedroute";
import { Outlet } from "react-router-dom";

import Hero from "./pages/Hero";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Sidebar from "./componets/Sidebar";
import Navbar from "./componets/Navbar";

import Analytics from "./pages/sidebar/Analytics";
import Members from "./pages/dashboard/Members";
import Events from "./pages/dashboard/Events";
import Emails from "./pages/sidebar/Emails";
import Settings from "./pages/sidebar/Settings";
import Sponsors from "./pages/sidebar/Sponsors";
import Attendees from "./pages/dashboard/Attendees";
import Tickets from "./pages/dashboard/Tickets";


import "./App.css";

const DashboardLayout = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main">
        <Navbar />
        {/* ⬇️ Outlet goes HERE */}
        <Outlet />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        {/* 🌍 Public */}
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* 🔒 Protected */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Members />} />
            <Route path="events" element={<Events />} />
            <Route path="emails" element={<Emails />} />
            <Route path="settings" element={<Settings />} />
            <Route path="sponsors" element={<Sponsors />} />
            <Route path="attendees" element={<Attendees />} />
            <Route path="tickets" element={<Tickets />} />
            <Route path="Analytics" element={<Analytics />} />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;
