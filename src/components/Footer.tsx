import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Link } from 'gatsby';

export default function AppFooter() {
  return (
    <footer>
      <section className="gradient_divider"></section>
      <div className="container">
        <section className="pages_footer d-flex py-lg-5">
          <div className="container">
            <div className="row">
              <div className="col mob_foot_logo">
                <div className="logo_section">
                  <a className="d-block" href="#">
                    <StaticImage
                      src="../images/common-img/footer-logo.svg"
                      alt="EasySlot Booking"
                      title="EasySlot Booking"
                      className="d-inline-block align-text-top img-fluid"
                      layout="fixed"
                      placeholder="blurred"
                    />
                  </a>
                  <div className="footer_stack_logo">
                    <span className="design_text">Design and Developed by</span>
                    <img
                      src="/footer/stackadroit-logo-footer.svg"
                      alt="Stackadroit LLP."
                      title="Stackadroit LLP."
                    />
                  </div>
                  <span className="d-block footer_text_logo my-3">
                    We help you get your visa slots in a quick, easy, and secure
                    manner. Become a part of our family today for a smoother
                    visa slot booking process.
                  </span>
                  <div className="foot_social_container">
                    <a href="#" className="footer_fb">
                      <StaticImage
                        src="../images/common-img/Facebook-footer.png"
                        alt="Facebook"
                        title="Facebook"
                        className="d-inline-block align-text-top img-fluid"
                        layout="constrained"
                        width={70}
                        height={80}
                      />
                    </a>
                    <a href="#" className="footer_twitter">
                      <StaticImage
                        src="../images/common-img/Twitter-footer.png"
                        alt="Twitter"
                        title="Twitter"
                        className="d-inline-block align-text-top img-fluid"
                        layout="fixed"
                        placeholder="blurred"
                        width={28}
                        height={36}
                      />
                    </a>
                    <a href="#" className="footer_youtube">
                      <StaticImage
                        src="../images/common-img/YouTube-footer.png"
                        alt="YouTube"
                        title="YouTube"
                        className="d-inline-block align-text-top img-fluid"
                        layout="constrained"
                        width={70}
                        height={80}
                        placeholder="blurred"
                      />
                    </a>
                    <a href="#" className="footer_instagram">
                      <StaticImage
                        src="../images/common-img/Instagram-footer.png"
                        alt="Instagram"
                        title="Instagram"
                        className="d-inline-block align-text-top img-fluid"
                        layout="constrained"
                        width={70}
                        height={80}
                        placeholder="blurred"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col footer_links">
                <h6 className="footer_menu_head">Quick Links</h6>
                <ul>
                  <li>
                    <Link to="/about_us">About Us</Link>
                  </li>
                  <li>
                    <Link to="/features">Features</Link>
                  </li>
                  <li>
                    <Link to="/pricing">Pricing</Link>
                  </li>

                  <li>
                    <a href="#">Download</a>
                  </li>
                  <li>
                    <a href="#">Customer Support</a>
                  </li>
                  <li>
                    <a href="#">Reviews</a>
                  </li>
                  <li>
                    <a href="#">Add-ons</a>
                  </li>
                </ul>
              </div>
              <div className="col footer_links">
                <h6 className="footer_menu_head">Company</h6>
                <ul>
                  <li>
                    <Link to="/success_stories">Success Stories</Link>
                  </li>

                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <Link to="/customer-reviews">Customer Reviews</Link>
                  </li>
                  <li>
                    <Link to="/agency-partners">Agency Partners</Link>
                  </li>
                  <li>
                    <Link to="/referral">Referral</Link>
                  </li>

                  <li>
                    <a href="#">Sitemap</a>
                  </li>
                  <li>
                    <a href="#">Learn</a>
                  </li>
                </ul>
              </div>
              <div className="col footer_links">
                <h6 className="footer_menu_head">Support</h6>
                <ul>
                  <li>
                    <a href="#">System Status</a>
                  </li>
                  <li>
                    <a href="#">Knowledge Base</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <Link to="/contact_us">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="col footer_links">
                <h6 className="footer_menu_head">Helpful Links</h6>
                <ul>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="#">Refunds &amp; Cancellation</a>
                  </li>
                  <li>
                    <Link to="/faqs">FAQs</Link>
                  </li>

                  <li>
                    <a href="#">Support</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="foot_featured_products d-flex">
        <div className="container">
          <h4>Our Featured products</h4>
          <div className="d-flex flex-row footer_text_icon">
            <div className="p-2">
              <span>
                <i className="icon hand" />
                Visa Handshake
              </span>
            </div>
            <div className="p-2">
              <span>
                <i className="icon passport" />
                Easy Slotbooking
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="foot_copyright d-flex">
        <div className="container">
          <div className="d-flex flex-row justify-content-between">
            <div className="p-2 copyright">
              <span>
                Copyright © 2023 - 2024 ES Booking. All rights reserved.
              </span>
            </div>
            <div className="p-2 foot_link_listing">
              <ul>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <span className="pipe_sign">|</span>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <span className="pipe_sign">|</span>
                </li>
                <li>
                  <a href="#">Cookie preferences</a>
                </li>
                <li>
                  <span className="pipe_sign">|</span>
                </li>
                <li>
                  <span>Do not sell or share any personal information</span>
                </li>
              </ul>
            </div>
            <div className="p-2">
              <div id="select_country">
                <button
                  className="btn btn-secondary choose_region"
                  role="button"
                >
                  <i className="fa fa-globe" />
                  <span>Choose Region</span>
                </button>
              </div>
            </div>
            <div className="bottom_msg" />
          </div>
        </div>
      </section>
      <div className="usa-affiliated d-flex py-4 text-center">
        <span>
          Easy Slot Booking is not affiliated, associated, authorized, or
          endorsed by the US Government or any of its subsidiaries.
        </span>
      </div>
    </footer>
  );
}
