import React, { forwardRef } from 'react';

import './download.css';

const DownloadNav = forwardRef<HTMLElement>((props, developersRef) => (
  <section className="card" ref={developersRef}>
    <div className="mainActionsWrapper">
      <div className="mainActions">
        <ul>
          <li>
            <h5>Link </h5>
          </li>
          <li>
            <p>Link1</p>
          </li>
        </ul>

        <ul>
          <li>
            <h5>Links</h5>
          </li>
          <li>
            <p>Link2</p>
          </li>

          <li>
            <p>Configurar parametros presenciais</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
));

export default DownloadNav;
