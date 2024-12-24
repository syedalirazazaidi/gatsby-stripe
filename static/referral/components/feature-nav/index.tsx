import React, { forwardRef } from 'react';

import './feature.css';
const FeatureNav = forwardRef<HTMLElement>((props, productsRef) => (
  <section className="card" ref={productsRef}>
    <div>
      <ul className="actions">
        <li>
          <h5>Repases</h5>
        </li>
        <li>
          <div className="description">
            <p>Payouts</p>
            <p>Repasses programáticos</p>
          </div>
        </li>
        <li>
          <div className="description">
            <p>Issuing</p>
            <p>Criação de cartão</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
));

export default FeatureNav;
