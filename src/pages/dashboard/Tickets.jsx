import React from "react";

const Tickets = () => {
  return (
    <div className="events-page">
      {/* Filters */}
      <div className="filters-row">
        <div className="filters-left">
          <div className="filter-group">
            <label>Event start date</label>
            
            <div className="filter-chip">Last 365 Days</div>
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
        <div className="stat-card wide">
          <h1>5,600</h1>
          <p>Available ticket quantity</p>
        </div>

        <div className="stat-card wide">
          <h1>392</h1>
          <p>Completed ticket orders</p>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
