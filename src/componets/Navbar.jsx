import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="announcement">
        Explore the new dashboard! You can switch back at any time.
      </div>

      <div className="navbar">
        <h3>Google Developer Groups</h3>

        <div className="nav-tabs">
          <NavLink to="/overview">Overview</NavLink> 
          <NavLink to="/">Members</NavLink>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/attendees">Attendees</NavLink>
           <NavLink to="/tickets">Ticket</NavLink>
          <NavLink to="/sponsors">Sponsors</NavLink>
          <NavLink to="/website">Website</NavLink>
          
         


        </div>
      </div>
    </>
  )
}

export default Navbar
