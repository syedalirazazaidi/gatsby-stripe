import React, { forwardRef } from 'react';

const ContactNav = forwardRef<HTMLElement>((props, companyRef) => (
  <section className="card" ref={companyRef}>
    <div className="mainActions">
      <ul>
        <li>
          <p>Parceiros</p>
        </li>
      </ul>

      <ul>
        <li>
          <p>Sala de imprensa</p>
        </li>
      </ul>
    </div>

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

export default ContactNav;
