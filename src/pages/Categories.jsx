import React from 'react';

function Categories() {
  return (
    <main className="main-container">
      <div className="main-title">
        <h3>CATEGORIES</h3>
      </div>
      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>Total Categories</h3>
          </div>
          <h1>12</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Most Popular</h3>
          </div>
          <h1>Electronics</h1>
        </div>
      </div>
    </main>
  );
}

export default Categories;
