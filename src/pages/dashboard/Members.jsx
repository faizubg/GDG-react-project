import React from 'react'

const Members = () => {
  return (
    <div className="page">
      {/* Join date */}
      <div className="filter">
        <span>Join date</span>
        <button className="filter-btn">Last 365 Days</button>
      </div>

      <h3>Overview</h3>

      {/* Cards */}
      <div className="cards">
        <div className="card">
          <h2>679</h2>
          <p>Chapter members all time</p>
        </div>

        <div className="card">
          <h2>597</h2>
          <p>New chapter members</p>
        </div>

        <div className="card">
          <h2>8</h2>
          <p>Departed chapter members</p>
        </div>

        <div className="card">
          <h2>139</h2>
          <p>First-time attendees</p>
        </div>
      </div>
    </div>
  )
}

export default Members
