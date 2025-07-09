import React from 'react';

function Customers() {
  return (
    <main className="main-container">
      <div className="main-title">
        <h3>CUSTOMERS</h3>
      </div>
      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>Total Customers</h3>
          </div>
          <h1>540</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>New This Month</h3>
          </div>
          <h1>42</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Active Users</h3>
          </div>
          <h1>110</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Inactive Users</h3>
          </div>
          <h1>30</h1>
        </div>
      </div>
    </main>
  );
}

export default Customers;
