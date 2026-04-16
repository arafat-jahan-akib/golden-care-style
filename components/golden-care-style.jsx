import React from 'react';
import './golden-care-style.css';

const GoldenCare = () => {
  return (
    <div className="golden-care">
      <header className="golden-header">
        <img src="https://i.imgur.com/n0B3wQE.png" alt="Logo" className="logo" />
        <h1>Golden Care</h1>
      </header>
      <main className="golden-content">
        <section className="benefits">
          <h2>Benefits of Our Products</h2>
          <article className="benefit">
            <img src="https://i.imgur.com/51X63.jpg" alt="Collagen" className="benefit-image" />
            <h3>Collagen</h3>
            <p>Supports skin elasticity and hydration.</p>
          </article>
          <article className="benefit">
            <img src="https://i.imgur.com/oeXbO88.jpg" alt="Omega-3" className="benefit-image" />
            <h3>Omega-3</h3>
            <p>Promotes heart health and cognitive function.</p>
          </article>
        </section>
      </main>
    </div>
  );
};

export default GoldenCare;