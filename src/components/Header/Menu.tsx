import React from 'react';
import { useGlobalContext } from '../../Provider/context';
import { FaBars } from 'react-icons/fa';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import './header.scss';
const Menu = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (e: any) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 5;
    openSubmenu(page, { center, bottom });
  };
  const handleSubmenu = (e: any) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu();
    }
  };
  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <div>
            <Link to="/">
              <StaticImage
                src="./navbar-icn.svg"
                alt="logo"
                title="navbar"
                layout="constrained"
                placeholder="blurred"
                className="nav-logo"
                style={{ width: '150px' }}
              />
            </Link>
          </div>
          <button className="mobileview" onClick={openSidebar}>
            <FaBars color="white" />
          </button>
        </div>
        <div className="nav-container">
          <ul className="nav-links">
            <li>
              <Link to="/features">
                <button className="link-btn" onMouseOver={displaySubmenu}>
                  features
                </button>
              </Link>
            </li>
            <li>
              <Link to="/pricing">
                <button className="link-btn" onMouseOver={displaySubmenu}>
                  pricing
                </button>
              </Link>
            </li>
            <li>
              <Link to="/affiliate">
                <button className="link-btn" onMouseOver={displaySubmenu}>
                  affiliate
                </button>
              </Link>
            </li>
            <li>
              <Link to="/download">
                <button className="link-btn" onMouseOver={displaySubmenu}>
                  download
                </button>
              </Link>
            </li>
            <li>
              <Link to="/customer-support">
                <button className="link-btn" onMouseOver={displaySubmenu}>
                  support
                </button>
              </Link>
            </li>
            <li>
              <Link to="/learn">
                <button className="link-btn" onMouseOver={displaySubmenu}>
                  learn
                </button>
              </Link>
            </li>
            <li>
              <span className="divider">|</span>
            </li>
            <li>
              <Link to="/contact-sales">
                <button className="link-btn" onMouseOver={displaySubmenu}>
                  contact sale
                </button>
              </Link>
            </li>
          </ul>
          <button className="btn join-btn">Join Now</button>
        </div>
      </div>
    </nav>
  );
};
export default Menu;
