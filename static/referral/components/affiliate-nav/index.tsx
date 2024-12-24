import React, { forwardRef } from 'react';

import './affiliate.css';

const AffilateNav = forwardRef<HTMLElement>((props, companyRef) => (
  <section className="card" ref={companyRef}>
    <div className="mainActions">
      <ul>
        <li>
          <p>Sobre a stripe</p>
        </li>
        <li>
          <p>Clientes</p>
        </li>
        <li>
          <p>Empresarial</p>
        </li>
        <li>
          <p>Parceiros</p>
        </li>
      </ul>

      <ul>
        {/* <li><MdRadio /><p>Trabalhos</p></li>
				<li><MdLocalFlorist /><p>Meio ambiente</p></li>
				<li><MdGroup /><p>Sala de imprensa</p></li> */}
      </ul>
    </div>

    <footer className="footer">
      {/* <h5><FaPenFancy /> No blog</h5> */}
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

export default AffilateNav;
