import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      
      <div className="announcement">
        Explore the new dashboard! You can switch back at any time.
      </div>

      
      <div className="navbar">
        <div className="navbar-title">
          Google Developer Groups
        </div>

        <div className="nav-tabs">
          <NavLink to="/dashboard" end>
            Overview
          </NavLink>

          <NavLink to="/dashboard">
            Members
          </NavLink>

          <NavLink to="/dashboard/events">
            Events
          </NavLink>

          <NavLink to="/dashboard/attendees">
            Attendees
          </NavLink>

          <NavLink to="/dashboard/tickets">
            Tickets
          </NavLink>

          <NavLink to="/dashboard/sponsors">
            Sponsors
          </NavLink>

          <a href="#" className="external-link">Website</a>
        </div>
      </div>
    </>
  )
}

export default Navbar
