import React, { useState } from 'react';
import { FaChevronRight, FaTimes, FaChevronLeft } from 'react-icons/fa';
import sublinks from './const';
import { useGlobalContext } from '../../Provider/context';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
const Sidebar = () => {
  const { isSidebarOpen, openSidebar, closeSidebar, closeSubmenu } =
    useGlobalContext();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggleSheet = () => {
    setIsOpen(!isOpen);
  };

  const handleBack = () => {
    setIsOpen(false);
  };
  return (
    <div
      className={`${isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'}`}
    >
      <aside className="sidebar">
        <div className="sidebar__main">
          <StaticImage
            src="./navbar-icn.svg"
            alt="logo"
            title="navbar"
            layout="constrained"
            className="nav-logo"
          />
          <button className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>

        <div className="sidebar-links">
          {sublinks.map((item, index) => {
            const { links, page } = item;
            return (
              <article key={index} className="sidebar-item">
                <h4>{page}</h4>
                <span className="chevron-icon" onClick={toggleSheet}>
                  <FaChevronRight />
                </span>

                <div className={`sliding-sheet ${isOpen ? 'open' : ''}`}>
                  <div className="sliding-sheet-header">
                    <div className="slider-sheet__content">
                      <button className="icon-btn" onClick={handleBack}>
                        <span className="icon-text">
                          <FaChevronLeft size={20} /> Back
                        </span>
                      </button>
                      <button
                        onClick={() => {
                          closeSidebar();
                          handleBack();
                        }}
                        className="icon-btn"
                      >
                        <FaTimes size={20} />
                      </button>
                    </div>
                  </div>
                  <div className="slider__content">
                    <p>this is Slider content</p>
                    <p>this is Slider content</p>
                    <p>this is Slider content</p>
                    <p>this is Slider content</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
