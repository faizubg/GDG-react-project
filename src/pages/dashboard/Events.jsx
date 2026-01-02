import React from "react";

const Events = () => {
  return (
    <div className="events-page">
      {/* Filters */}
      <div className="filters-row">
        <div className="filters-left">
          <div className="filter-chip">
            Start date <span>is in the last 12 months</span>
          </div>
          <div className="filter-chip">
            Event venue <span>is any value</span>
          </div>
        </div>

        <div className="filters-right">
          <span>⟳</span>
          <span>☰</span>
          <span>⋮</span>
        </div>
      </div>

      {/* Overview */}
      <h2 className="section-title">Overview</h2>

      {/* Cards */}
      <div className="cards-grid">
        <div className="stat-card">
          <h1>8</h1>
          <p>Completed events all time</p>
        </div>

        <div className="stat-card">
          <h1>6</h1>
          <p>Completed events</p>
        </div>

        <div className="stat-card">
          <h1>0</h1>
          <p>Future events</p>
        </div>

        <div className="stat-card">
          <h1>6</h1>
          <p>Collaborated events all time</p>
        </div>

        <div className="stat-card">
          <h1>5</h1>
          <p>Completed collaborated events</p>
        </div>

        <div className="stat-card">
          <h1>0</h1>
          <p>Future collaborated events</p>
        </div>
      </div>
    </div>
  );
};

export default Events;
