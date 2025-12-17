import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './componets/Sidebar'
import Navbar from './componets/Navbar'

import Members from './pages/dashboard/Members'
import Events from './pages/dashboard/Events'
import Emails from './pages/sidebar/Emails'
import Settings from './pages/sidebar/Settings'
import Sponsors from './pages/sidebar/Sponsors'

import './App.css'

const App = () => {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main">
        <Navbar />

        <Routes>
          <Route path="/" element={<Members />} />
          <Route path="/events" element={<Events />} />
          <Route path="/emails" element={<Emails />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/sponsors" element={<Sponsors />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
