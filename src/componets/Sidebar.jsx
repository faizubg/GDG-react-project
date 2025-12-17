import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <input
        type="text"
        placeholder="Search chapters"
        className="search-input"
      />

      <div className="chapter-card">
        <strong>GDG on Campus Gombe State University</strong>
        <p>Gombe, Nigeria</p>
      </div>

      <div className="sidebar-links">
        <NavLink to="/">Members</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/emails">Emails</NavLink>
        <NavLink to="/settings">Settings</NavLink>
        <NavLink to="/sponsors">Sponsors</NavLink>
      </div>
    </aside>
  )
}

export default Sidebar
