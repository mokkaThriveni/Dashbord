import React from 'react';

function Reports() {
  return (
    <main className="main-container">
      <div className="main-title">
        <h3>REPORTS</h3>
      </div>
      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>Sales Today</h3>
          </div>
          <h1>₹8,400</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>This Month</h3>
          </div>
          <h1>₹1.2L</h1>
        </div>
      </div>
    </main>
  );
}

export default Reports;
