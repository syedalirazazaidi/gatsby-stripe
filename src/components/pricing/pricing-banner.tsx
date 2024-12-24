import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import './price.scss';
import { useGlobalContext } from '../../Provider/context';
export default function PricingPage() {
  const [isPremium, setIsPremium] = useState(false);

  const handleSwitchChange = () => {
    setIsPremium(prev => !prev);
  };

  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event: any) => {
    setSelectedOption(event.target.value);
    console.log(`Selected: ${event.target.value}`);
  };

  const { closeSubmenu } = useGlobalContext();

  return (
    <div>
      <main className="pricing_page" onMouseOver={closeSubmenu}>
        {/* <section className="pricing_top pricing-section"> */}
        <section className="pricing_top ">
          <div className="container">
            <div className="top_container">
              <h6>Pricing Plans</h6>
              <h2>Our pricing is simple with no hidden fees</h2>
              <span>
                Our pricing plans are designed to be affordable, flexible and
                tailored to your unique needs.
              </span>
              <div className="happy_customer">
                <StaticImage
                  src="../../images/pricing/happy-user.png"
                  alt=""
                  title=""
                  placeholder="blurred"
                />
                <a href="#">100K+ Happy customers</a>
              </div>

              <div className="tab-container">
                <div className="tab tab-active" data-id="tabOne">
                  <div className="tab-content">
                    <div className="switch-container">
                      <div className="switcher-box">
                        <div className="content">
                          <label
                            className={`toggler ${isPremium ? 'toggler--is-active' : ''}`}
                            id="do-premium"
                          >
                            Premium
                          </label>

                          <div className="toggle ">
                            <input
                              type="checkbox"
                              id="switcher"
                              className="check navbar-button "
                              checked={isPremium}
                              onChange={handleSwitchChange}
                            />
                            <b className="b switch"></b>
                          </div>

                          <label
                            className={`toggler ${!isPremium ? 'toggler--is-active' : ''}`}
                            id="do-standard"
                          >
                            Standard
                          </label>
                        </div>
                      </div>
                      <div className="cstm-dropdown">
                        <div className="select">
                          <select
                            id="price-toggle"
                            aria-label="Pricing Options"
                            defaultValue={selectedOption}
                            onChange={handleSelectChange}
                          >
                            <option selected>Select option</option>
                            <option value="monthly">Monthly</option>
                            <option value="hourly">Hourly</option>
                          </select>
                          <div className="down_icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="16px"
                              width="16px"
                              viewBox="0 0 520 520"
                            >
                              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-panel" id="premium">
                      <div className="tab-data">
                        <div className="tab-main-content">
                          <div className="main-panel">
                            <div className="content first-pan">
                              <div className="price monthly">
                                <i className="fa-solid fa-indian-rupee-sign"></i>
                                <h2>{isPremium ? 0 : 0}</h2>
                                <span>INR/mo</span>
                              </div>
                              <div className="price hourly hidden">
                                <i className="fa-solid fa-indian-rupee-sign"></i>
                                <h2>0</h2>
                                <span>INR/mo</span>
                              </div>
                              {!isPremium ? (
                                <span className="tooltip-text">
                                  Start-up plan : Includes taxes, DO hosting
                                  charges <i className="fa fa-info-circle"></i>
                                </span>
                              ) : (
                                <span className="tooltip-text">
                                  Excluding Taxes. Includes DO Hosting Charges.{' '}
                                  <i className="fa fa-info-circle"></i>
                                </span>
                              )}

                              <ul className="system-configr-list">
                                <li>
                                  <span className="name">RAM</span>
                                  <span className="value">1GB</span>
                                </li>
                                <li>
                                  <span className="name">Processor</span>
                                  <span className="value">1 Core</span>
                                </li>
                                <li>
                                  <span className="name">Storage</span>
                                  <span className="value">25GB</span>
                                </li>
                                <li>
                                  <span className="name">Bandwidth</span>
                                  <span className="value">1TB</span>
                                </li>
                              </ul>
                              <div className="btn-container">
                                <a href="#" className="outline">
                                  Start Free
                                </a>
                              </div>
                              <div className="plans-list">
                                <h4>All Plans Come With:</h4>
                                <ul className="pricing-features">
                                  <li>
                                    <span className="features">
                                      Cloudflare Add-on
                                    </span>
                                    <span className="new">NEW</span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      24/7/365 Support
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">Free SSL</span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Free Migration
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Unlimited Application Installation
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Team Management
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Dedicated Firewalls
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      24/7 Real-time Monitoring
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Automated Backups
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Staging Environment
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Optimized With Advanced Caches
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Auto Healing
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Regular Security Patching
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      HTTP/2 Enabled Servers
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      SSH and SFTP Access
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="main-panel popular">
                            <div className="most-popular">
                              <span>Most Popular</span>
                            </div>
                            <div className="content first-pan">
                              <div className="price monthly">
                                <i className="fa-solid fa-indian-rupee-sign"></i>
                                <h2>
                                  {isPremium || selectedOption === 'monthly'
                                    ? 4000
                                    : 3000}
                                </h2>
                                <span>INR/mo</span>
                              </div>
                              <div className="price hourly hidden">
                                <i className="fa-solid fa-indian-rupee-sign"></i>
                                <h2>1200</h2>
                                <span>INR/mo</span>
                              </div>
                              <span className="tooltip-text">
                                Excluding Taxes. Includes DO Hosting Charges.{' '}
                                <i className="fa fa-info-circle"></i>
                              </span>
                              <ul className="system-configr-list">
                                <li>
                                  <span className="name">RAM</span>
                                  <span className="value">4GB</span>
                                </li>
                                <li>
                                  <span className="name">Processor</span>
                                  <span className="value">2 Core</span>
                                </li>
                                <li>
                                  <span className="name">Storage</span>
                                  <span className="value">80GB</span>
                                </li>
                                <li>
                                  <span className="name">Bandwidth</span>
                                  <span className="value">4TB</span>
                                </li>
                              </ul>
                              <div className="btn-container">
                                <a href="#" className="solid">
                                  Start Free
                                </a>
                              </div>
                              <div className="plans-list">
                                <h4>All Plans Come With:</h4>
                                <ul className="pricing-features">
                                  <li>
                                    <span className="features">
                                      Cloudflare Add-on
                                    </span>
                                    <span className="new">NEW</span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      24/7/365 Support
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Free Object Cache Pro
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">Free SSL</span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Free Migration
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Unlimited Application Installation
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Team Management
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Dedicated Firewalls
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      24/7 Real-time Monitoring
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Automated Backups
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Staging Environment
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Optimized With Advanced Caches
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Auto Healing
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Regular Security Patching
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      HTTP/2 Enabled Servers
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      SSH and SFTP Access
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="main-panel last">
                            <div className="content first-pan">
                              <div className="price monthly">
                                <i className="fa-solid fa-indian-rupee-sign"></i>
                                <h2>{isPremium ? 8000 : 25000}</h2>
                                <span>INR/mo</span>
                              </div>
                              <div className="price hourly hidden">
                                <i className="fa-solid fa-indian-rupee-sign"></i>
                                <h2>2000</h2>
                                <span>INR/mo</span>
                              </div>

                              <span className="tooltip-text">
                                Excluding Taxes. Includes DO Hosting Charges.{' '}
                                <i className="fa fa-info-circle"></i>
                              </span>
                              <ul className="system-configr-list">
                                <li>
                                  <span className="name">RAM</span>
                                  <span className="value">8GB</span>
                                </li>
                                <li>
                                  <span className="name">Processor</span>
                                  <span className="value">4 Core</span>
                                </li>
                                <li>
                                  <span className="name">Storage</span>
                                  <span className="value">160GB</span>
                                </li>
                                <li>
                                  <span className="name">Bandwidth</span>
                                  <span className="value">5TB</span>
                                </li>
                              </ul>
                              <div className="btn-container">
                                <a href="#" className="outline">
                                  Start Free
                                </a>
                              </div>
                              <div className="plans-list">
                                <h4>All Plans Come With:</h4>
                                <ul className="pricing-features">
                                  <li>
                                    <span className="features">
                                      Cloudflare Add-on
                                    </span>
                                    <span className="new">NEW</span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      24/7/365 Support
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Free Object Cache Pro
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">Free SSL</span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Free Migration
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Unlimited Application Installation
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Team Management
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Dedicated Firewalls
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      24/7 Real-time Monitoring
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Automated Backups
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Staging Environment
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Optimized With Advanced Caches
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Auto Healing
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Regular Security Patching
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      HTTP/2 Enabled Servers
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      SSH and SFTP Access
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="tab-panel hide" id="standard">
                      <div className="tab-data">
                        <div className="tab-main-content">
                          <div className="main-panel">
                            <div className="content first-pan">
                              <div className="price monthly">
                                <i className="fa-solid fa-indian-rupee-sign"></i>
                                <h2>0</h2>
                                <span>INR/mo</span>
                              </div>
                              <div className="price hourly hidden">
                                <i className="fa-solid fa-indian-rupee-sign"></i>
                                <h2>0</h2>
                                <span>INR/mo</span>
                              </div>
                              <span className="tooltip-text">
                                Excluding Taxes. Includes DO Hosting Charges.{' '}
                                <i className="fa fa-info-circle"></i>
                              </span>
                              <ul className="system-configr-list">
                                <li>
                                  <span className="name">RAM</span>
                                  <span className="value">1GB</span>
                                </li>
                                <li>
                                  <span className="name">Processor</span>
                                  <span className="value">1 Core</span>
                                </li>
                                <li>
                                  <span className="name">Storage</span>
                                  <span className="value">25GB</span>
                                </li>
                                <li>
                                  <span className="name">Bandwidth</span>
                                  <span className="value">1TB</span>
                                </li>
                              </ul>
                              <div className="btn-container">
                                <a href="#" className="outline">
                                  Start Free
                                </a>
                              </div>
                              <div className="plans-list">
                                <h4>All Plans Come With:</h4>
                                <ul className="pricing-features">
                                  <li>
                                    <span className="features">
                                      Cloudflare Add-on
                                    </span>
                                    <span className="new">NEW</span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      24/7/365 Support
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">Free SSL</span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Free Migration
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Unlimited Application Installation
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Team Management
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Dedicated Firewalls
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      24/7 Real-time Monitoring
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Automated Backups
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Staging Environment
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Optimized With Advanced Caches
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Auto Healing
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Regular Security Patching
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      HTTP/2 Enabled Servers
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      SSH and SFTP Access
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="main-panel popular">
                            <div className="most-popular">
                              <span>Most Popular</span>
                            </div>
                            <div className="content first-pan">
                              <div className="price monthly">
                                <i className="fa-solid fa-indian-rupee-sign"></i>
                                <h2>4000</h2>
                                <span>INR/mo</span>
                              </div>
                              <div className="price hourly hidden">
                                <i className="fa-solid fa-indian-rupee-sign"></i>
                                <h2>2500</h2>
                                <span>INR/mo</span>
                              </div>
                              <span className="tooltip-text">
                                Excluding Taxes. Includes DO Hosting Charges.{' '}
                                <i className="fa fa-info-circle"></i>
                              </span>
                              <ul className="system-configr-list">
                                <li>
                                  <span className="name">RAM</span>
                                  <span className="value">4GB</span>
                                </li>
                                <li>
                                  <span className="name">Processor</span>
                                  <span className="value">2 Core</span>
                                </li>
                                <li>
                                  <span className="name">Storage</span>
                                  <span className="value">80GB</span>
                                </li>
                                <li>
                                  <span className="name">Bandwidth</span>
                                  <span className="value">4TB</span>
                                </li>
                              </ul>
                              <div className="btn-container">
                                <a href="#" className="solid">
                                  Start Free
                                </a>
                              </div>
                              <div className="plans-list">
                                <h4>All Plans Come With:</h4>
                                <ul className="pricing-features">
                                  <li>
                                    <span className="features">
                                      Cloudflare Add-on
                                    </span>
                                    <span className="new">NEW</span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      24/7/365 Support
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Free Object Cache Pro
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">Free SSL</span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Free Migration
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Unlimited Application Installation
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Team Management
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Dedicated Firewalls
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      24/7 Real-time Monitoring
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Automated Backups
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Staging Environment
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Optimized With Advanced Caches
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Auto Healing
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Regular Security Patching
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      HTTP/2 Enabled Servers
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      SSH and SFTP Access
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="main-panel last">
                            <div className="content first-pan">
                              <div className="price monthly">
                                <i className="fa-solid fa-indian-rupee-sign"></i>
                                <h2>2500</h2>
                                <span>INR/mo</span>
                              </div>
                              <div className="price hourly hidden">
                                <i className="fa-solid fa-indian-rupee-sign"></i>
                                <h2>700</h2>
                                <span>INR/mo</span>
                              </div>
                              <span className="tooltip-text">
                                Excluding Taxes. Includes DO Hosting Charges.{' '}
                                <i className="fa fa-info-circle"></i>
                              </span>
                              <ul className="system-configr-list">
                                <li>
                                  <span className="name">RAM</span>
                                  <span className="value">8GB</span>
                                </li>
                                <li>
                                  <span className="name">Processor</span>
                                  <span className="value">4 Core</span>
                                </li>
                                <li>
                                  <span className="name">Storage</span>
                                  <span className="value">160GB</span>
                                </li>
                                <li>
                                  <span className="name">Bandwidth</span>
                                  <span className="value">5TB</span>
                                </li>
                              </ul>
                              <div className="btn-container">
                                <a href="#" className="outline">
                                  Start Free
                                </a>
                              </div>
                              <div className="plans-list">
                                <h4>All Plans Come With:</h4>
                                <ul className="pricing-features">
                                  <li>
                                    <span className="features">
                                      Cloudflare Add-on
                                    </span>
                                    <span className="new">NEW</span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      24/7/365 Support
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Free Object Cache Pro
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">Free SSL</span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Free Migration
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Unlimited Application Installation
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Team Management
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Dedicated Firewalls
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      24/7 Real-time Monitoring
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Automated Backups
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Staging Environment
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Optimized With Advanced Caches
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Auto Healing
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Regular Security Patching
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      HTTP/2 Enabled Servers
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      SSH and SFTP Access
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tab" data-id="tabTwo">
                  <div className="tab-content">
                    <div className="switch-container">
                      <div className="switcher-box">
                        <div className="content">
                          <label
                            className="toggler toggler--is-active"
                            id="do-premium"
                          >
                            High Frequency
                          </label>
                          <div className="toggle">
                            <input
                              type="checkbox"
                              id="switcher"
                              className="check"
                            />
                            <b className="b switch"></b>
                          </div>
                          <label className="toggler" id="do-standard">
                            Standard
                          </label>
                        </div>
                      </div>
                      <div className="cstm-dropdown">
                        <div className="select">
                          <select
                            id="price-toggle"
                            aria-label=""
                            aria-describedby=""
                            aria-invalid="false"
                          >
                            <option selected value="">
                              Select an option
                            </option>
                            <option value="monthly">Monthly</option>
                            <option value="hourly">Hourly</option>
                          </select>
                          <div className="down_icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="16px"
                              width="16px"
                              viewBox="0 0 520 520"
                            >
                              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-panel">
                      <div className="tab-data">
                        <div className="tab-main-content">
                          <div className="main-panel">
                            <div className="content first-pan">
                              <div className="price monthly">
                                <i className="fa-solid fa-indian-rupee-sign"></i>
                                <h2>5000</h2>
                                <span>INR/mo</span>
                              </div>
                              <div className="price hourly hide">
                                <i className="fa-solid fa-indian-rupee-sign"></i>
                                <h2>3000</h2>
                                <span>INR/mo</span>
                              </div>
                              <span className="tooltip-text">
                                Excluding Taxes. Includes Vultr Hosting Charges.{' '}
                                <i className="fa fa-info-circle"></i>
                              </span>
                              <ul className="system-configr-list">
                                <li>
                                  <span className="name">RAM</span>
                                  <span className="value">1GB</span>
                                </li>
                                <li>
                                  <span className="name">Processor</span>
                                  <span className="value">1 Core</span>
                                </li>
                                <li>
                                  <span className="name">Storage</span>
                                  <span className="value">32GB</span>
                                </li>
                                <li>
                                  <span className="name">Bandwidth</span>
                                  <span className="value">1TB</span>
                                </li>
                              </ul>
                              <div className="btn-container">
                                <a href="#" className="outline">
                                  Start Free
                                </a>
                              </div>
                              <p className="location">
                                Locations Available &nbsp;
                                <i className="fa fa-info-circle"></i>
                              </p>
                              <div className="plans-list">
                                <h4>All Plans Come With:</h4>
                                <ul className="pricing-features">
                                  <li>
                                    <span className="features">
                                      Cloudflare Add-on
                                    </span>
                                    <span className="new">NEW</span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      24/7/365 Support
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">Free SSL</span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Free Migration
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Unlimited Application Installation
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Team Management
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Dedicated Firewalls
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      24/7 Real-time Monitoring
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Automated Backups
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Staging Environment
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Optimized With Advanced Caches
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Auto Healing
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Regular Security Patching
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      HTTP/2 Enabled Servers
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      SSH and SFTP Access
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="main-panel popular">
                            <div className="most-popular">
                              <span>Most Popular</span>
                            </div>
                            <div className="content">
                              <div className="price monthly">
                                <i className="fa-solid fa-indian-rupee-sign"></i>
                                <h2>12000</h2>
                                <span>INR/mo</span>
                              </div>
                              <div className="price hourly hide">
                                <i className="fa-solid fa-indian-rupee-sign"></i>
                                <h2>4500</h2>
                                <span>INR/mo</span>
                              </div>
                              <span className="tooltip-text">
                                Excluding Taxes. Includes DO Hosting Charges.{' '}
                                <i className="fa fa-info-circle"></i>
                              </span>
                              <ul className="system-configr-list">
                                <li>
                                  <span className="name">RAM</span>
                                  <span className="value">4GB</span>
                                </li>
                                <li>
                                  <span className="name">Processor</span>
                                  <span className="value">2 Core</span>
                                </li>
                                <li>
                                  <span className="name">Storage</span>
                                  <span className="value">128GB</span>
                                </li>
                                <li>
                                  <span className="name">Bandwidth</span>
                                  <span className="value">3TB</span>
                                </li>
                              </ul>
                              <div className="btn-container">
                                <a href="#" className="solid">
                                  Start Free
                                </a>
                              </div>
                              <p className="location">
                                Locations Available &nbsp;
                                <i className="fa fa-info-circle"></i>
                              </p>
                              <div className="plans-list">
                                <h4>All Plans Come With:</h4>
                                <ul className="pricing-features">
                                  <li>
                                    <span className="features">
                                      Cloudflare Add-on
                                    </span>
                                    <span className="new">NEW</span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      24/7/365 Support
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Free Object Cache Pro
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">Free SSL</span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Free Migration
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Unlimited Application Installation
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Team Management
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Dedicated Firewalls
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      24/7 Real-time Monitoring
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Automated Backups
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Staging Environment
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Optimized With Advanced Caches
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Auto Healing
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Regular Security Patching
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      HTTP/2 Enabled Servers
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      SSH and SFTP Access
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="main-panel last">
                            <div className="content">
                              <div className="price monthly">
                                <i className="fa-solid fa-indian-rupee-sign"></i>
                                <h2>15000</h2>
                                <span>INR/mo</span>
                              </div>
                              <div className="price hourly hide">
                                <i className="fa-solid fa-indian-rupee-sign"></i>
                                <h2>5000</h2>
                                <span>INR/mo</span>
                              </div>
                              <span className="tooltip-text">
                                Excluding Taxes. Includes DO Hosting Charges.{' '}
                                <i className="fa fa-info-circle"></i>
                              </span>
                              <ul className="system-configr-list">
                                <li>
                                  <span className="name">RAM</span>
                                  <span className="value">8GB</span>
                                </li>
                                <li>
                                  <span className="name">Processor</span>
                                  <span className="value">2 Core</span>
                                </li>
                                <li>
                                  <span className="name">Storage</span>
                                  <span className="value">256GB</span>
                                </li>
                                <li>
                                  <span className="name">Bandwidth</span>
                                  <span className="value">4TB</span>
                                </li>
                              </ul>
                              <div className="btn-container">
                                <a href="#" className="outline">
                                  Start Free
                                </a>
                              </div>
                              <p className="location">
                                Locations Available &nbsp;
                                <i className="fa fa-info-circle"></i>
                              </p>
                              <div className="plans-list">
                                <h4>All Plans Come With:</h4>
                                <ul className="pricing-features">
                                  <li>
                                    <span className="features">
                                      Cloudflare Add-on
                                    </span>
                                    <span className="new">NEW</span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      24/7/365 Support
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Free Object Cache Pro
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">Free SSL</span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Free Migration
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Unlimited Application Installation
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Team Management
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Dedicated Firewalls
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      24/7 Real-time Monitoring
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Automated Backups
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Staging Environment
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Optimized With Advanced Caches
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Auto Healing
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      Regular Security Patching
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      HTTP/2 Enabled Servers
                                    </span>
                                  </li>
                                  <li>
                                    <span className="features">
                                      SSH and SFTP Access
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="note_text">
                <span>Note :</span>&nbsp;$0.033/GB per server will be applied
                for offsite backup storage.
              </div>
            </div>
          </div>
        </section>

        <section className="pricing_booking">
          <div className="container">
            <div className="booking_head">
              <h2>Modified plans and pricing as per your need</h2>
              <div className="head_border"></div>
            </div>

            <div className="row no-margin mt-5 mb-5">
              <div className="col-xxl-3 col-lg-3 col-md-12 col-sm-12 pl_null">
                <div className="booking_bg"></div>
              </div>
              <div className="col-xxl-6 col-lg-6 col-md-12 col-sm-12">
                <div className="booking_points">
                  <p>
                    Created for large-scale clients group who are willing to get
                    benefit from dedicated features, custom onboarding and
                    regular notifications.
                  </p>
                  <ul className="points_listing">
                    <li>
                      <span className="tick_icon">
                        <img src="/pricing/green-tick.svg" alt="" title="" />
                      </span>
                      <span className="points">Dedicated onboarding</span>
                    </li>
                    <li>
                      <span className="tick_icon">
                        <img src="/pricing/green-tick.svg" alt="" title="" />
                      </span>
                      <span className="points">Custom features</span>
                    </li>
                    <li>
                      <span className="tick_icon">
                        <img src="/pricing/green-tick.svg" alt="" title="" />
                      </span>
                      <span className="points">Personalized plans</span>
                    </li>
                    <li>
                      <span className="tick_icon">
                        <img src="/pricing/green-tick.svg" alt="" title="" />
                      </span>
                      <span className="points">Unique pricing</span>
                    </li>
                    <li>
                      <span className="tick_icon">
                        <img src="/pricing/green-tick.svg" alt="" title="" />
                      </span>
                      <span className="points">Custom limits</span>
                    </li>
                    <li>
                      <span className="tick_icon">
                        <img src="/pricing/green-tick.svg" alt="" title="" />
                      </span>
                      <span className="points">Dedicated supported team</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-3 col-lg-3 col-md-12 col-sm-12 pr_null">
                <div className="btn_container">
                  <a href="booking.html" className="btn blue_btn default_btn">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pricing_question">
          <div className="top_clipart"></div>
          <div className="container">
            <div className="question_container">
              <div className="row no-margin">
                <div className="col-xxl-6 col-lg-6 col-md-12 pl_null">
                  <div
                    className="accordion accordion-left"
                    id="accordionLeftExample"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#left-collapseOne"
                          aria-expanded="false"
                          aria-controls="left-collapseOne"
                        >
                          How does 24/7/365 support work?
                        </button>
                      </h2>
                      <div
                        id="left-collapseOne"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionLeftExample"
                      >
                        <div className="accordion-body">
                          Placeholder content for this accordion, which is
                          intended to demonstrate the accordion-flush className.
                          This is the first item's accordion body.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#left-collapseTwo"
                          aria-expanded="false"
                          aria-controls="left-collapseTwo"
                        >
                          Do you charge any tax on monthly invoices?
                        </button>
                      </h2>
                      <div
                        id="left-collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionLeftExample"
                      >
                        <div className="accordion-body">
                          Placeholder content for this accordion, which is
                          intended to demonstrate the accordion-flush className.
                          This is the second item's accordion body. Let's
                          imagine this being filled with some actual content.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#left-collapseThree"
                          aria-expanded="false"
                          aria-controls="left-collapseThree"
                        >
                          Do you charge any tax on monthly invoices?
                        </button>
                      </h2>
                      <div
                        id="left-collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionLeftExample"
                      >
                        <div className="accordion-body">
                          Placeholder content for this accordion, which is
                          intended to demonstrate the accordion-flush className.
                          This is the third item's accordion body. Nothing more
                          exciting happening here in terms of content, but just
                          filling up the space to make it look, at least at
                          first glance, a bit more representative of how this
                          would look in a real-world application.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#left-collapseFour"
                          aria-expanded="false"
                          aria-controls="left-collapseFour"
                        >
                          Can I have separate pricing plans?
                        </button>
                      </h2>
                      <div
                        id="left-collapseFour"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionLeftExample"
                      >
                        <div className="accordion-body">
                          Placeholder content for this accordion, which is
                          intended to demonstrate the accordion-flush className.
                          This is the third item's accordion body. Nothing more
                          exciting happening here in terms of content, but just
                          filling up the space to make it look, at least at
                          first glance, a bit more representative of how this
                          would look in a real-world application.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#left-collapseFive"
                          aria-expanded="false"
                          aria-controls="left-collapseFive"
                        >
                          What payment methods do you accept?
                        </button>
                      </h2>
                      <div
                        id="left-collapseFive"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionLeftExample"
                      >
                        <div className="accordion-body">
                          Placeholder content for this accordion, which is
                          intended to demonstrate the accordion-flush className.
                          This is the third item's accordion body. Nothing more
                          exciting happening here in terms of content, but just
                          filling up the space to make it look, at least at
                          first glance, a bit more representative of how this
                          would look in a real-world application.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6 col-lg-6 col-md-12 pr_null">
                  <div
                    className="accordion accordion-right"
                    id="accordionRightExample"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#right-collapseOne"
                          aria-expanded="false"
                          aria-controls="right-collapseOne"
                        >
                          Can I launch separate applications?
                        </button>
                      </h2>
                      <div
                        id="right-collapseOne"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionRightExample"
                      >
                        <div className="accordion-body">
                          Placeholder content for this accordion, which is
                          intended to demonstrate the accordion-flush className.
                          This is the first item's accordion body.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#right-collapseTwo"
                          aria-expanded="false"
                          aria-controls="right-collapseTwo"
                        >
                          How can I cancel my ES Booking account?
                        </button>
                      </h2>
                      <div
                        id="right-collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionRightExample"
                      >
                        <div className="accordion-body">
                          Placeholder content for this accordion, which is
                          intended to demonstrate the accordion-flush className.
                          This is the second item's accordion body. Let's
                          imagine this being filled with some actual content.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#right-collapseThree"
                          aria-expanded="false"
                          aria-controls="right-collapseThree"
                        >
                          What features do you offer and others not?
                        </button>
                      </h2>
                      <div
                        id="right-collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionRightExample"
                      >
                        <div className="accordion-body">
                          Placeholder content for this accordion, which is
                          intended to demonstrate the accordion-flush className.
                          This is the third item's accordion body. Nothing more
                          exciting happening here in terms of content, but just
                          filling up the space to make it look, at least at
                          first glance, a bit more representative of how this
                          would look in a real-world application.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#right-collapseFour"
                          aria-expanded="false"
                          aria-controls="right-collapseFour"
                        >
                          What is your refund policy?
                        </button>
                      </h2>
                      <div
                        id="right-collapseFour"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionRightExample"
                      >
                        <div className="accordion-body">
                          Placeholder content for this accordion, which is
                          intended to demonstrate the accordion-flush className.
                          This is the third item's accordion body. Nothing more
                          exciting happening here in terms of content, but just
                          filling up the space to make it look, at least at
                          first glance, a bit more representative of how this
                          would look in a real-world application.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#right-collapseFive"
                          aria-expanded="false"
                          aria-controls="right-collapseFive"
                        >
                          Do you offer discounts for students or educators?
                        </button>
                      </h2>
                      <div
                        id="right-collapseFive"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionRightExample"
                      >
                        <div className="accordion-body">
                          Placeholder content for this accordion, which is
                          intended to demonstrate the accordion-flush className.
                          This is the third item's accordion body. Nothing more
                          exciting happening here in terms of content, but just
                          filling up the space to make it look, at least at
                          first glance, a bit more representative of how this
                          would look in a real-world application.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pricing_testimonial">
          <div className="container">
            <div className="top_content">
              <h6>Testimonials</h6>
              <h2>
                What our happy customers <b>says about pricing</b>
              </h2>
              <img
                src="/pricing/yellow-clipart.svg"
                className="yellow_clipart"
                alt=""
                title=""
              />
              <div className="row no-margin mt-2">
                <div className="col-xxl-7 col-lg-7 col-md-12 col-sm-12 pl_null">
                  <div className="testimonial_content">
                    <img
                      className="quote"
                      src="/pricing/quote.svg"
                      alt=""
                      title=""
                    />
                    <p>
                      Life saver for everyone looking to book visa appointment.
                      I have been trying to get a slot for the last two months
                      and could not get one. After using Easy slot booking for a
                      few days I got my slot. Very happy to have this service.
                    </p>
                    <div className="name_rating">
                      <h6>Alok Kumar</h6>
                      <ul className="star_list">
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: '#FFD43B' }}
                        />
                        <li>
                          {' '}
                          <FontAwesomeIcon
                            icon={faStar}
                            style={{ color: '#FFD43B' }}
                          />
                        </li>
                        <li>
                          {' '}
                          <FontAwesomeIcon
                            icon={faStar}
                            style={{ color: '#FFD43B' }}
                          />
                        </li>
                        <li>
                          {' '}
                          <FontAwesomeIcon
                            icon={faStar}
                            style={{ color: '#FFD43B' }}
                          />
                        </li>

                        <li>
                          <FontAwesomeIcon
                            icon={faStarHalfStroke}
                            style={{ color: '#FFD43B' }}
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-5 col-lg-5 col-md-12 col-sm-12 pr_null">
                  <div className="user_img"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="gradient_divider"></section>
      </main>
    </div>
  );
}
