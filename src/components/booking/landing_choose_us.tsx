import React from 'react';

export default function LandingChooseus() {
  return (
    <section className="landing_choose_us">
      <div className="container">
        <div className="row no-margin">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="why_us_bg" />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="why_us_content d-flex">
              <h6 className="section_heading d-block">Why Choose Us?</h6>
              <h4 className="d-block">One Application to booking</h4>
              <h2>slots for your possible visa dates</h2>
              <p className="d-block my-3">
                We got your back from all visa category channels, from community
                additions to premium users. Join us and never miss out on an
                available slot, ever.
              </p>
              <div className="why_us_listing d-flex">
                <ul className="listing d-flex">
                  <li>
                    <div className="icon-container">
                      <span className="circle light_blue">
                        <img
                          src="/icons/pioneers-icn.svg"
                          alt="Industry Pioneers"
                          title="Industry Pioneers"
                          className="d-inline-block align-text-top img-fluid"
                        />
                      </span>
                    </div>
                    <div className="d-flex listing-content">
                      <h4>Industry Pioneers</h4>
                      <span>
                        We were the first ones to provide our customers with
                        visa slot alerts. Doing this longer than anyone else on
                        the market.
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="icon-container">
                      <span className="circle green">
                        <i>
                          <img
                            src="/icons/rating-icn.svg"
                            alt="Spotless Rating"
                            title="Spotless Rating"
                            className="d-inline-block align-text-top img-fluid"
                          />
                        </i>
                      </span>
                    </div>
                    <div className="listing-content d-flex">
                      <h4>Spotless Rating</h4>
                      <span>
                        We provide nothing but exemplary service corroborated by
                        our perfect 5 star rating given by thousands of
                        satisfied customers.
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="icon-container">
                      <span className="circle light_brown">
                        <i>
                          <img
                            src="/icons/experienced-icn.svg"
                            alt="Most Experienced"
                            title="Most Experienced"
                            className="d-inline-block align-text-top img-fluid"
                          />
                        </i>
                      </span>
                    </div>
                    <div className="listing-content d-flex">
                      <h4>Most Experienced</h4>
                      <span>
                        We provide nothing but exemplary service corroborated by
                        our perfect 5 star rating given by thousands of
                        satisfied customers.
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="icon-container">
                      <span className="circle light_pink">
                        <i>
                          <img
                            src="/icons/versatile-icn.svg"
                            alt="Most Versatile"
                            title="Most Versatile"
                            className="d-inline-block align-text-top img-fluid"
                          />
                        </i>
                      </span>
                    </div>
                    <div className="listing-content d-flex">
                      <h4>Most Versatile</h4>
                      <span>
                        We provide the widest range of features and tools than
                        any other company in this industry. Making sure you stay
                        ahead.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
