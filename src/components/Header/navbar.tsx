import React from 'react';
import Menu from './Menu';
import Submenu from './submenu';
import Sidebar from './sidebar';
function Navber() {
  return (
    <div>
      <Menu />
      <Sidebar />
      <Submenu />
    </div>
  );
}

export default Navber;
