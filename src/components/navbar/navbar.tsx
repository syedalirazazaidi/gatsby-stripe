import { Link } from 'gatsby';
import './navbar.scss';

import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStore,
  faChartBar,
  faBoxOpen,
  faCreditCard,
  faCog,
  faPlus,
  faWarehouse,
  faUserCog,
  faUsers,
  faCube,
  faChartLine,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';
const NavbarHeader = () => {
  const elementRef = useRef<HTMLDivElement | null>(null);
 
  useEffect(() => {
    const element: any = elementRef.current;

    if (!element) return;
    const mainNavigation: any = element.querySelector(
      '.main-nav'
    ) as HTMLElement | null;
    const mainNavigationItems: any =
      mainNavigation?.querySelectorAll('.has-dropdown');
    const dropdownList: any = element.querySelector('.dropdown-list');
    const dropdownWrappers = dropdownList?.querySelectorAll('.dropdown');
    const dropdownItems = dropdownList?.querySelectorAll('.content');
    const dropdownBg = dropdownList?.querySelector('.bg-layer');

    const checkMq = () => {
      return window
        .getComputedStyle(element, '::before')
        .getPropertyValue('content')
        .replace(/'/g, '')
        .replace(/"/g, '')
        .split(', ');
    };

    const mq = checkMq();

    const showDropdown = (item: any) => {
      const mq = checkMq();
      if (mq[0] === 'desktop') {
        const selectedDropdown: any = dropdownList?.querySelector(
          '#' + item.getAttribute('data-content')
        );

        if (!selectedDropdown) return;

        const selectedDropdownHeight = selectedDropdown.offsetHeight;
        const selectedDropdownWidth =
          selectedDropdown.querySelector('.content').offsetWidth;
        const selectedDropdownLeft =
          item.getBoundingClientRect().left +
          item.offsetWidth / 2 -
          selectedDropdownWidth / 2;

        if (!element.classList.contains('is-initialized')) {
          dropdownList.style.transition = 'none';
          updateDropdown(
            selectedDropdown,
            selectedDropdownHeight,
            selectedDropdownWidth,
            selectedDropdownLeft
          );
          element.classList.add('is-initialized');
          dropdownList.offsetHeight;
          dropdownList.style.transition =
            'transform 0.3s ease, width 0.3s ease, height 0.3s ease';
        } else {
          updateDropdown(
            selectedDropdown,
            selectedDropdownHeight,
            selectedDropdownWidth,
            selectedDropdownLeft
          );
        }

        element
          .querySelectorAll('.dropdown.active')
          .forEach((activeItem: any) => {
            activeItem.classList.remove('active');
            activeItem.style.opacity = '0';
            activeItem.style.transform = 'scale(0.95)';
            setTimeout(() => {
              activeItem.style.opacity = '';
              activeItem.style.transform = '';
            }, 300);
          });

        selectedDropdown.classList.add('active');
        selectedDropdown.style.transition =
          'opacity 0.3s ease, transform 0.3s ease';
        selectedDropdown.style.opacity = '1';
        selectedDropdown.style.transform = 'scale(1)';

        if (!element.classList.contains('is-dropdown-visible')) {
          setTimeout(() => {
            element.classList.add('is-dropdown-visible');
          }, 10);
        }

        element
          .querySelectorAll('.main-nav .has-dropdown')
          .forEach((menuItem: any) => {
            menuItem.classList.remove('active');
          });

        item.classList.add('active');
      }
    };

    // const showDropdown = (item: any) => {
    //   const mq = checkMq();
    //   if (mq[0] === 'desktop') {
    //     const selectedDropdown: any = dropdownList?.querySelector(
    //       '#' + item.getAttribute('data-content')
    //     );

    //     if (!selectedDropdown) return;

    //     const selectedDropdownHeight = selectedDropdown.offsetHeight;
    //     const selectedDropdownWidth =
    //       selectedDropdown.querySelector('.content').offsetWidth;
    //     const selectedDropdownLeft =
    //       item.getBoundingClientRect().left +
    //       item.offsetWidth / 2 -
    //       selectedDropdownWidth / 2;

    //     if (!element.classList.contains('is-initialized')) {
    //       dropdownList.style.transition = 'none';
    //       updateDropdown(
    //         selectedDropdown,
    //         selectedDropdownHeight,
    //         selectedDropdownWidth,
    //         selectedDropdownLeft
    //       );
    //       element.classList.add('is-initialized');
    //       dropdownList.offsetHeight;
    //       dropdownList.style.transition =
    //         'transform 0.3s ease, width 0.3s ease, height 0.3s ease';
    //     } else {
    //       updateDropdown(
    //         selectedDropdown,
    //         selectedDropdownHeight,
    //         selectedDropdownWidth,
    //         selectedDropdownLeft
    //       );
    //     }

    //     element.querySelectorAll('.active').forEach((activeItem: any) => {
    //       activeItem.classList.remove('active');
    //     });

    //     selectedDropdown.classList.add('active');
    //     selectedDropdown.classList.remove('move-left', 'move-right');
    //     if (selectedDropdown.previousElementSibling)
    //       selectedDropdown.previousElementSibling.classList.add('move-left');
    //     if (selectedDropdown.nextElementSibling)
    //       selectedDropdown.nextElementSibling.classList.add('move-right');
    //     item.classList.add('active');

    //     // Ensure visibility is updated without abrupt changes
    //     if (!element.classList.contains('is-dropdown-visible')) {
    //       setTimeout(() => {
    //         element.classList.add('is-dropdown-visible');
    //         selectedDropdown.style.transform = 'scale(1)';
    //         selectedDropdown.style.opacity = '1';
    //       }, 10);
    //     }
    //   }
    // };

    const updateDropdown = (
      dropdownItem: HTMLElement,
      height: number,
      width: number,
      left: number
    ) => {
      if (!dropdownList || !dropdownBg) return;

      dropdownList.style.transform = `translateX(${left}px)`;
      dropdownList.style.width = `${width}px`;
      dropdownList.style.height = `${height}px`;

      dropdownBg.style.transform = `scaleX(${width}) scaleY(${height})`;
    };

    const hideDropdown = () => {
      const mq = checkMq();
      if (mq[0] === 'desktop') {
        element.classList.remove('is-dropdown-visible');
        element.querySelectorAll('.active').forEach((activeItem: any) => {
          activeItem.classList.remove('active');
        });
        element.querySelectorAll('.move-left').forEach((item: any) => {
          item.classList.remove('move-left');
        });
        element.querySelectorAll('.move-right').forEach((item: any) => {
          item.classList.remove('move-right');
        });
      }
    };

    const hideDropdownWithDelay = () => {
      setTimeout(() => {
        if (
          mainNavigation.querySelectorAll('.has-dropdown:hover').length === 0 &&
          element.querySelectorAll('.dropdown-list:hover').length === 0
        ) {
          hideDropdown();
        }
      }, 50);
    };

    const bindEvents = () => {
      mainNavigationItems.forEach((item: any) => {
        item.addEventListener('mouseenter', () => showDropdown(item));
        item.addEventListener('mouseleave', hideDropdownWithDelay);

        item.addEventListener('touchstart', (event: any) => {
          const selectedDropdown = dropdownList.querySelector(
            '#' + item.getAttribute('data-content')
          );
          if (
            !element.classList.contains('is-dropdown-visible') ||
            !selectedDropdown.classList.contains('active')
          ) {
            event.preventDefault();
            showDropdown(item);
          }
        });
      });

      dropdownList.addEventListener('mouseleave', hideDropdownWithDelay);

      element
        .querySelector('.nav-trigger')
        .addEventListener('click', (event: any) => {
          event.preventDefault();
          element.classList.toggle('nav-open');
        });
    };

    bindEvents();

    return () => {
      mainNavigationItems.forEach((item: any) => {
        item.removeEventListener('mouseenter', () => showDropdown(item));
        item.removeEventListener('mouseleave', hideDropdownWithDelay);
        item.removeEventListener('touchstart', (event: any) => {});
      });

      dropdownList.removeEventListener('mouseleave', hideDropdownWithDelay);
    };
  }, []);
  useEffect(() => {
    const featureLinks = document.querySelectorAll('.has-dropdown');
    const slideSheet = document.querySelector('.slide-sheet');
    const closeSheetButton = document.querySelector('.close-sheet');
    const backArrow = document.querySelector('.back-arrow');
    const sheetContent = document.querySelector('.sheet-content');
  
    if (!slideSheet || !sheetContent) {
      console.error('Slide sheet or sheet content is not found.');
      return;
    }
  
    const closeAllNavBars = () => {
      document.body.classList.remove('nav-open');
      slideSheet?.classList.remove('active');
    };
  
    const handleFeatureClick = (event: any) => {
      const item = event.target.closest('.has-dropdown');
      if (!item) return;
  
      const dataContent = item.getAttribute('data-content');
      const dropdownContent = document.querySelector(
        `#${dataContent} .content`
      )?.innerHTML;
  
      console.log('First click detected:', { dataContent, dropdownContent });
  
      if (dropdownContent) {
        sheetContent.innerHTML = dropdownContent;
  
        // Force repaint before adding the active class
        requestAnimationFrame(() => {
          slideSheet.classList.add('active');
          console.log('Slide sheet activated on first click.');
        });
      } else {
        console.error('Dropdown content not found.');
      }
    };
  
    const handleCloseClick = () => {
      console.log('Closing slide sheet.');
      closeAllNavBars();
    };
  
    featureLinks.forEach(item => {
      item.addEventListener('click', handleFeatureClick);
    });
  
    closeSheetButton?.addEventListener('click', handleCloseClick);
    backArrow?.addEventListener('click', handleCloseClick);
  
    return () => {
      featureLinks.forEach(item => {
        item.removeEventListener('click', handleFeatureClick);
      });
      closeSheetButton?.removeEventListener('click', handleCloseClick);
      backArrow?.removeEventListener('click', handleCloseClick);
    };
  }, []);

  return (
    <div className="morph-container">
      <header ref={elementRef} className="morph-dropdown">
        <a href="#0" className="nav-trigger">
          Open Nav
          <span aria-hidden="true" />
        </a>
        <Link className="navbar-brand d-block " to="/">
          <img
            src="../logo-nw.svg"
            alt="EasySlot Booking"
            title="EasySlot Booking"
            width="150"
            height="50"
            className="d-inline-block align-text-top"
          />
        </Link>
        <div className="main_nav_css">
          <nav className="main-nav">
            <p className="easy_slot">easyslot</p>

            <ul>
              <li className=" button" data-content="affiliate">
                <Link to="/download" className="feature_css hover_features">
                  Download
                </Link>
                {/* <span className="greater-than">&gt;</span> */}
              </li>
              <li
                className="has-dropdown gallery button-bottom"
                data-content="features"
              >
                <Link to="/features" className="feature_css">
                  {' '}
                  Features
                </Link>

                <span className="greater-than">&gt;</span>
              </li>
              <li
                className="has-dropdown button button-bottom"
                data-content="affiliate"
              >
                <Link to="/affiliate" className="feature_css">
                  Affiliate
                </Link>
                <span className="greater-than">&gt;</span>
              </li>
              <li
                className="has-dropdown button button-bottom"
                data-content="support"
              >
                <Link to="/customer-support" className="feature_css">
                  Support
                </Link>
                <span className="greater-than">&gt;</span>
              </li>
              <li className=" links" data-content="pricing">
                <Link to="/pricing" className="feature_css hover_features">
                  Pricing
                </Link>
                {/* <span className="greater-than">&gt;</span> */}
              </li>

              <li className=" button" data-content="learn">
                <Link to="/learn" className="feature_css hover_features">
                  Learn
                </Link>
                {/* <span className="greater-than">&gt;</span> */}
              </li>
              <li className="line__css">
                <a href="#">|</a>
              </li>
              <li className=" button" data-content="contactsales">
                <Link
                  to="/contact-sales"
                  className="feature_css hover_features"
                >
                  Contact Sale
                </Link>
                {/* <span className="greater-than">&gt;</span> */}
              </li>
              <li className="join_btn">
                <button className="header_joinbutton">Join Now</button>
              </li>
            </ul>
          </nav>
          <div className="slide-sheet">
            <div className="sheet-header">
              <span className="close-sheet-back back-arrow easy_slot_back">
                &lt; Back
              </span>

              <Link to="/">
                <span className="close-sheet"> ⨯</span>
              </Link>
            </div>
            <div className="sheet-content"></div>
          </div>
          <div className="morph-dropdown-wrapper">
            <div className="dropdown-list shadow-lg p-3 mb-5 bg-white rounded">
              <ul>
                <li id="download" className="dropdown links">
                  <a href="#0" className="label">
                    Download
                  </a>
                  <div className="content"></div>
                </li>
                <li id="features" className="dropdown gallery">
                  <a href="#0" className="label">
                    features
                  </a>

                  <div className="content">
                    <div className="dashboard-container">
                      <div className="section my-store">
                        <h3>MY STORE</h3>
                        <div className="row">
                          <div className="item">
                            <FontAwesomeIcon
                              icon={faPlusCircle}
                              className="icon"
                            />
                            <div>
                              <h4>Add Module</h4>
                              <p>Type your desired module name(s) in the app</p>
                            </div>
                          </div>
                          <div className="item">
                            <FontAwesomeIcon
                              icon={faBoxOpen}
                              className="icon"
                            />
                            <div>
                              <h4>Product</h4>
                              <p>Go to the page where you add</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="section account">
                        {/* <h3>ACCOUNT</h3> */}
                        <div className="row">
                          <div className="item">
                            <FontAwesomeIcon icon={faCube} className="icon" />
                            <div>
                              <h4>Stocks</h4>
                              <p>A pre-manufactured and completed Goods</p>
                            </div>
                          </div>
                          <div className="item">
                            <FontAwesomeIcon
                              icon={faCreditCard}
                              className="icon"
                            />
                            <div>
                              <h4>Payment</h4>
                              <p>Users are advised to navigate to e-Pay</p>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="item">
                            <FontAwesomeIcon icon={faCog} className="icon" />
                            <div>
                              <h4>Settings</h4>
                              <p>Type your desired module name(s) in the app</p>
                            </div>
                          </div>
                          <div className="item">
                            <FontAwesomeIcon icon={faUsers} className="icon" />
                            <div>
                              <h4>Users</h4>
                              <p>Function that enables users to access</p>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="item">
                            <FontAwesomeIcon
                              icon={faChartLine}
                              className="icon"
                            />
                            <div>
                              <h4>Stats</h4>
                              <p>Get data in just a click to see the update</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li id="affiliate" className="dropdown button">
                  <a href="#0" className="label">
                    Affiliate
                  </a>
                  <div className="content" style={{ width: '300px' }}>
                    <div className="account-section">
                      <p className="account-title">Account</p>
                      <ul className="account-list">
                        {/* Item 1 with badge */}
                        <div className="account-item">
                          <li className="list-item">
                            <FontAwesomeIcon icon={faPlus} className="icon" />
                            Overview
                          </li>
                          {/* <p className="badge">1</p> */}
                        </div>

                        <div className="account-item">
                          <li className="list-item">
                            <FontAwesomeIcon
                              icon={faBoxOpen}
                              className="icon"
                            />
                            Updates
                          </li>
                          {/* <p className="badge"></p>{' '} */}
                        </div>
                        <div className="account-item">
                          <li className="list-item">
                            <FontAwesomeIcon
                              icon={faWarehouse}
                              className="icon"
                            />
                            Payment
                          </li>
                          {/* <p className="badge"></p> */}
                        </div>
                        <div className="account-item">
                          <li className="list-item">
                            <FontAwesomeIcon
                              icon={faUserCog}
                              className="icon"
                            />
                            My Order
                          </li>
                          {/* <p className="badge"></p> */}
                        </div>
                        <div className="account-item">
                          <li className="list-item">
                            <FontAwesomeIcon icon={faUsers} className="icon" />
                            Admin Setting
                          </li>
                          {/* <p className="badge"></p> */}
                        </div>
                      </ul>
                    </div>
                  </div>
                </li>
                <li id="support" className="dropdown button">
                  <a href="#0" className="label">
                    Support
                  </a>
                  <div className="content" style={{ width: '480px' }}>
                    <div className="sidebar-section">
                      <h3>
                        <FontAwesomeIcon icon={faStore} className="icon" />
                        <span>Store Product Management System</span>
                      </h3>
                      <h3>
                        <FontAwesomeIcon icon={faChartBar} className="icon" />
                        Account & User Management
                      </h3>
                      <ul className="flex-ul">
                        <div className="flex-div">
                          <li>- Overview</li>
                          <li>- Stats</li>
                          <li>- Products</li>
                        </div>
                        <div className="flex-div">
                          <li>- Updates</li>
                          <li>- Payment</li>
                          <li>- Settings</li>
                        </div>
                      </ul>
                    </div>

                    <div>
                      <ul className="sidebar-section-second">
                        <li>
                          <FontAwesomeIcon
                            icon={faPlus}
                            className="icon icon-css"
                          />
                          Add Module
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faBoxOpen} className="icon" />
                          My Products
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faWarehouse}
                            className="icon"
                          />
                          Stocks Management
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faUserCog} className="icon" />
                          Account Setup
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faUsers} className="icon" />
                          Manage Users
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li id="pricing" className="dropdown links">
                  <a href="#0" className="label">
                    Pricing
                  </a>
                  <div className="content"></div>
                </li>

                <li id="learn" className="dropdown button">
                  <a href="#0" className="label">
                    Learn
                  </a>
                  <div className="content"></div>
                </li>
                <li id="contactsales" className="dropdown button">
                  <a href="#0" className="label">
                    Contact Sales
                  </a>
                  <div className="content"></div>
                </li>
              </ul>
              <div className="bg-layer" aria-hidden="true" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavbarHeader;
