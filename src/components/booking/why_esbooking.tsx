import React from 'react';

export default function WhyesBooking() {
  return (
    <section className="why_esbooking">
      <div className="container">
        <div className="row no-margin">
          <div className="col-12">
            <h6 className="section_heading">Why ES Booking</h6>
          </div>
          <div className="col-12">
            <h2 className="my-3">
              Visa slot booking made easier with ES Booking
            </h2>
          </div>
        </div>
        <div className="row no-margin why_content">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <div className="why_content_box d-flex">
              <span className="icon_box d-flex">
                <img
                  src="/icons/network-icn.svg"
                  alt="Netwoerk"
                  title="Netwoerk"
                  className="d-inline-block align-text-top img-fluid"
                />
              </span>
              <h4 className="d-block">Engage your customers dramatically</h4>
              <ul className="d-flex why_es_listing">
                <li>
                  <i className="fa fa-check" />
                  <span>24/7 Customer support</span>
                </li>
                <li>
                  <i className="fa fa-check" />
                  <span>Most user friendly interface</span>
                </li>
                <li>
                  <i className="fa fa-check" />
                  <span>Extensions available for all major browser</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <div className="why_content_box d-flex active">
              <span className="icon_box d-flex">
                <img
                  src="/icons/folder-icn.svg"
                  alt="our safe data account"
                  title="our safe data account"
                  className="d-inline-block align-text-top img-fluid"
                />
              </span>
              <img
                src="/icons/why-active-shape.svg"
                alt="our safe data account"
                title="our safe data account"
                className="d-inline-block align-text-top why_shape img-fluid"
              />
              <h4 className="d-block">
                Store and transfer our safe data account
              </h4>
              <ul className="d-flex why_es_listing">
                <li>
                  <i className="fa fa-check" />
                  <span>Profitability Boost</span>
                </li>
                <li>
                  <i className="fa fa-check" />
                  <span>24/7 Customer Support</span>
                </li>
                <li>
                  <i className="fa fa-check" />
                  <span>Extensions available for all users of world</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <div className="why_content_box d-flex">
              <span className="icon_box d-flex">
                <img
                  src="/icons/lamp-icn.svg"
                  alt="increase productivity"
                  title="increase productivity"
                  className="d-inline-block align-text-top img-fluid"
                />
              </span>
              <h4 className="d-block">
                Estimate costs and increase productivity
              </h4>
              <ul className="d-flex why_es_listing">
                <li>
                  <i className="fa fa-check" />
                  <span>24/7 Customer support</span>
                </li>
                <li>
                  <i className="fa fa-check" />
                  <span>Most user friendly interface</span>
                </li>
                <li>
                  <i className="fa fa-check" />
                  <span>Extensions available for all major browser</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
