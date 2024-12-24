import React, { forwardRef } from 'react';
import './support.css';

const SupportNav = forwardRef<HTMLElement>((props, companyRef) => (
  <section className="card" ref={companyRef}>
    <div className="mainActions"></div>

    <footer className="footer">
      <ul>
        <li>
          <p>Criamos um Checkout para você não precisar fazer nada</p>
        </li>
        <li>
          <p>Criar e desenvolver um mundo interativo</p>
        </li>
        <li>
          <p>Contra o racismo</p>
        </li>
      </ul>
    </footer>
  </section>
));

export default SupportNav;
