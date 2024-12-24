import React from 'react';
import './booking.css';
import { StaticImage } from 'gatsby-plugin-image';
export default function HeroSection() {
  return (
    <div >
      <section className="hero_section" style={{zIndex:-1}}>
        <div className="container">
          <div style={{ paddingTop: 75 }} className="row no-margin">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 hero_text d-flex">
              <div className="d-flex tab_center">
                <span className="border" />
                <span className="text">Visa Appointment Alerts</span>
              </div>
              <h3 className="d-flex">Get The Visa Appointment&nbsp;-</h3>
              <h2>Simple, Fast and Relaible</h2>
              <p className="d-flex my-4">
                Easy Slot Booking tools helps people get the best possible Visa
                dates at your fingertips, 100% safe and trusted by thousands.
              </p>
              <div className="hero_btn_container d-flex my-1">
                <a href="#" className="btn rounded_hero_btn primary">
                  Start Free Trial
                </a>
                <a href="#" className="btn rounded_hero_btn watch_demo">
                  <span>Watch the Demo</span>

                  <img
                    src="/icons/play-icn.svg"
                    alt="Watch the Demo"
                    title="Watch the Demo"
                    className="img-fluid d-inline-block"
                  />
                </a>
              </div>
              <div className="hero_cstmr_section d-flex">
                <div className="zigzag" />
                <div className="d-flex hero_customers" />
                <span className="my-3">
                  <b>10,000+</b> people already downloaded ES Slotbooking
                  extension. Get started today!
                </span>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="landing_hero_img" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
