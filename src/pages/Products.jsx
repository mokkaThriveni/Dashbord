import React from 'react';

function Products() {
  return (
    <main className="main-container">
      <div className="main-title">
        <h3>PRODUCTS</h3>
      </div>
      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>Total Products</h3>
          </div>
          <h1>300</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Out of Stock</h3>
          </div>
          <h1>10</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>New Arrivals</h3>
          </div>
          <h1>25</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Top Rated</h3>
          </div>
          <h1>8</h1>
        </div>
      </div>
    </main>
  );
}

export default Products;
