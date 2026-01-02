import React from "react";

const Attendees = () => {
  return (
    <div className="events-page">
      {/* Filters */}
      <div className="filters-row">
        <div className="filters-left">
          <div className="filter-group">
            <label>Event start date</label>
            <div className="filter-chip purple">Last 365 Days</div>
          </div>

          <div className="filter-group">
            <label>Event venue</label>
            <div className="filter-chip">is any value</div>
          </div>

          <div className="filter-group">
            <label>Event title</label>
            <div className="filter-chip">is any value</div>
          </div>
        </div>

        <div className="filters-right">
          <span>⟳</span>
          <span>☰</span>
          <span>⋮</span>
        </div>
      </div>

      <h2 className="section-title">Overview</h2>

      <div className="cards-grid">
        <div className="stat-card">
          <h1>392</h1>
          <p>Registrations</p>
        </div>

        <div className="stat-card">
          <h1>270</h1>
          <p>Check-ins</p>
        </div>

        <div className="stat-card">
          <h1>69%</h1>
          <p>Check-in rate</p>
        </div>

        <div className="stat-card">
          <h1>31</h1>
          <p>Collaborated events registrations</p>
        </div>

        <div className="stat-card">
          <h1>20</h1>
          <p>Collaborated events check-ins</p>
        </div>

        <div className="stat-card">
          <h1>65%</h1>
          <p>Collaborated events check-in rate</p>
        </div>
      </div>
    </div>
  );
};

export default Attendees;
