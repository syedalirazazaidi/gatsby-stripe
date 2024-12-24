import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
export default function Agency() {
  return (
    <main className="agency_partners">
      <section className="agency_hero">
        <div className="container">
          <div className="hero_wrapper">
            <div className="label">Agency Partners</div>
            <h1>
              Raise your business performance with <br />
              our agency
            </h1>
            <p>
              Looking for the best digital agency to meet your business needs?
              Look no further! We partner with top-notch digital agencies that
              deliver services of excellent caliber and unmatched quality. Find
              the best one for your needs!
            </p>
            <div className="btn_wrapper">
              <a href="#" className="get_started">
                Get Started
              </a>
              <a href="#" className="try_chat">
                <span className="text">Try Chat for Free</span>
                <span className="icon">
                  <StaticImage
                    alt="arrow"
                    src="../../images/agency-partner/arrow-icon.svg"
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="our_services">
        <div className="services_wrapper">
          <div className="container">
            <div className="left_content_wrapper">
              <div className="card_row">
                <div className="card">
                  <div className="icon_box green">
                    <StaticImage
                      alt="support"
                      src="../../images/agency-partner/support.svg"
                    />
                  </div>
                  <h5>Safe & Secure</h5>
                  <p className="card_text">
                    Our experts will help you out with all your queries, 24x7.
                    We will be with you every step of the way.
                  </p>
                </div>

                <div className="card second">
                  <div className="icon_box pink">
                    <StaticImage
                      alt="folder"
                      src="../../images/agency-partner/folder-lock-icon.svg"
                    />
                  </div>
                  <h5>Safe & Secure</h5>
                  <p className="card_text">
                    Our experts will help you out with all your queries, 24x7.
                    We will be with you every step of the way.
                  </p>
                </div>
              </div>

              <div className="card_row second">
                <div className="card">
                  <div className="icon_box yellow">
                    <StaticImage
                      alt="available"
                      src="../../images/agency-partner/available-source.svg"
                    />
                  </div>
                  <h5>Available Source</h5>
                  <p className="card_text">
                    Our experts will help you out with all your queries, 24x7.
                    We will be with you every step of the way.
                  </p>
                </div>

                <div className="card fourth">
                  <div className="icon_box orange">
                    <StaticImage
                      alt="safe-secure"
                      src="../../images/agency-partner/safe-secure.svg"
                    />
                  </div>
                  <h5>Safe & Secure</h5>
                  <p className="card_text">
                    Our experts will help you out with all your queries, 24x7.
                    We will be with you every step of the way.
                  </p>
                </div>
              </div>
            </div>

            <div className="right_content_wrapper">
              <h1>
                Get benefited & grow huge <br />
                improvement with our service
              </h1>
              <p>
                If you reach the maximum limit error after checking more than
                eight times a day, the calendar page will lead you to a frozen
                account. Our Extension will protect you from blocking the
                account for 72 hours. While running, if the bot sees you are
                reaching the maximum limit, it will automatically log you out
                from the account.
              </p>
              <a href="#" className="pick_services">
                Pick our all services
              </a>
              <ul className="tick_content">
                <li>
                  <span className="tick_icon">
                    <StaticImage
                      alt="tick"
                      src="../../images/agency-partner/tick-icon.svg"
                    />
                  </span>
                  <span className="text">Flexible Communication</span>
                </li>
                <li>
                  <span className="tick_icon">
                    <StaticImage
                      alt="tick"
                      src="../../images/agency-partner/tick-icon.svg"
                    />
                  </span>
                  <span className="text">Quick Response</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="dropdown_list">
        <div className="dropdown_list_wrapper">
          <div className="container">
            <ul className="options_listing">
              <li>
                <a href="#">
                  <span className="icon">
                    <StaticImage
                      alt="globe"
                      src="../../images/agency-partner/globe-icon.svg"
                    />
                  </span>
                  <span className="text">Country</span>
                  <span className="arrow">
                    <StaticImage
                      alt="down-arrow"
                      src="../../images/agency-partner/down-arrow.svg"
                    />
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon">
                    <StaticImage
                      alt="services"
                      src="../../images/agency-partner/services-icon.svg"
                    />
                  </span>
                  <span className="text">Services</span>
                  <span className="arrow">
                    <StaticImage
                      alt="down-arrow"
                      src="../../images/agency-partner/down-arrow.svg"
                    />
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon">
                    <StaticImage
                      alt="industry"
                      src="../../images/agency-partner/industry-icon.svg"
                    />
                  </span>
                  <span className="text">Industry</span>
                  <span className="arrow">
                    <StaticImage
                      alt="down-arrow"
                      src="../../images/agency-partner/down-arrow.svg"
                    />
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="btn filter">
                  Filter
                </a>
                <a href="#" className="clear_filter">
                  Clear Filter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mt-5">
          <div className="card_wrapper">
            <div className="card">
              <div className="comp_logo"></div>
              <h6>Cargomatic</h6>
              <p>
                Cargomatic is an IT service company in Indonesia, specializing
                in philanthropy and ZISWAF. We offer web development for
                crowdfunding, WhatsApp gateway integration, bank account
                mutation tracking, and donor relation management. Our mission is
                to empower charitable organizations with advanced...
              </p>
            </div>

            <div className="card">
              <div className="comp_logo"></div>
              <h6>Samsung India</h6>
              <p>
                Cargomatic is an IT service company in Indonesia, specializing
                in philanthropy and ZISWAF. We offer web development for
                crowdfunding, WhatsApp gateway integration, bank account
                mutation tracking, and donor relation management. Our mission is
                to empower charitable organizations with advanced...
              </p>
            </div>

            <div className="card">
              <div className="comp_logo"></div>
              <h6>Code Exceptional</h6>
              <p>
                Cargomatic is an IT service company in Indonesia, specializing
                in philanthropy and ZISWAF. We offer web development for
                crowdfunding, WhatsApp gateway integration, bank account
                mutation tracking, and donor relation management. Our mission is
                to empower charitable organizations with advanced...
              </p>
            </div>

            <div className="card mt-5">
              <div className="comp_logo"></div>
              <h6>Cargomatic</h6>
              <p>
                Cargomatic is an IT service company in Indonesia, specializing
                in philanthropy and ZISWAF. We offer web development for
                crowdfunding, WhatsApp gateway integration, bank account
                mutation tracking, and donor relation management. Our mission is
                to empower charitable organizations with advanced...
              </p>
            </div>

            <div className="card mt-5">
              <div className="comp_logo"></div>
              <h6>Samsung India</h6>
              <p>
                Cargomatic is an IT service company in Indonesia, specializing
                in philanthropy and ZISWAF. We offer web development for
                crowdfunding, WhatsApp gateway integration, bank account
                mutation tracking, and donor relation management. Our mission is
                to empower charitable organizations with advanced...
              </p>
            </div>

            <div className="card mt-5">
              <div className="comp_logo"></div>
              <h6>Code Exceptional</h6>
              <p>
                Cargomatic is an IT service company in Indonesia, specializing
                in philanthropy and ZISWAF. We offer web development for
                crowdfunding, WhatsApp gateway integration, bank account
                mutation tracking, and donor relation management. Our mission is
                to empower charitable organizations with advanced...
              </p>
            </div>
          </div>

          <div className="btn_wrapper">
            <a href="#" className="load_more">
              Load More
            </a>
          </div>
        </div>
      </section>

      <section className="gradient_divider"></section>
    </main>
  );
}
