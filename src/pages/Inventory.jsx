import React from 'react';

function Inventory() {
  return (
    <main className="main-container">
      <div className="main-title">
        <h3>INVENTORY</h3>
      </div>
      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>Total Stock</h3>
          </div>
          <h1>6500</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Low Stock Items</h3>
          </div>
          <h1>18</h1>
        </div>
      </div>
    </main>
  );
}

export default Inventory;
