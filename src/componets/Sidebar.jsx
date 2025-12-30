import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <input className="search-input" placeholder="Search chapters" />

      <div className="chapter-card">
        <strong>GDG on Campus Gombe State University</strong>
        <p>Gombe, Nigeria</p>
      </div>

      <div className="sidebar-links">
        <NavLink to="/dashboard">Members</NavLink>
        <NavLink to="/dashboard/events">Events</NavLink>
        <NavLink to="/dashboard/emails">Emails</NavLink>
        <NavLink to="/dashboard/settings">Settings</NavLink>
        <NavLink to="/dashboard/sponsors">Sponsors</NavLink>
      </div>
    </aside>
  )
}

export default Sidebar
