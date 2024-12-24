import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

export default function OurFeatures() {
  return (
    <section className="our_features">
      <div className="container">
        <div className="row no-margin">
          <div className="col-12">
            <h6 className="section_heading_center d-flex">Our Features</h6>
            <h2 className="d-flex">
              Managing visa slot booking has never been easier
            </h2>
            <p className="d-flex">
              We help you get your visa slots in a quick, easy, and secure
              manner. Become a part of our family today for a smoother
              <br />
              visa slot booking process.
            </p>
          </div>
        </div>
        <div className="row no-margin my-4">
          <div className="col-lg-12 col-md-12 col-12">
            <div className="features_tab d-flex"style={{margin:'80px 0px '}}>
              <ul style={{backgroundColor:'#F5F5F5',border:'none',boxShadow: 'none'}} className="nav nav-tabs my-4" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="home-tab-pane"
                    aria-selected="true"
                  >
                    <span>Booking Management</span>
                    <div className="divider" />
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="profile-tab-pane"
                    aria-selected="false"
                  >
                    <span>Time Tracking</span>
                    <div className="divider" />
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contact-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="contact-tab-pane"
                    aria-selected="false"
                  >
                    <span>Slot Analysis</span>
                    <div className="divider" />
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contact-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="contact-tab-pane"
                    aria-selected="false"
                  >
                    <span>Notifications</span>
                    <div className="divider" />
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contact-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="contact-tab-pane"
                    aria-selected="false"
                  >
                    <span>Customer Support</span>
                    <div className="divider" />
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home-tab-pane"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                  tabIndex={0}
                >
                  <div className="row no-margin">
                    <div className="col-xl-4 col-lg-5 col-md-12 col-sm-12">
                      <div className="features_listing d-flex">
                        <ul className="listing d-flex">
                          <li>
                            <div className="icon-container">
                              <span className="circle first">
                                <StaticImage
                                  src="../../images/icons/error-icn.png"
                                  alt="Error handling"
                                  title="Error handling"
                                  className="d-inline-block align-text-top img-fluid"
                                  layout="fixed"
                                  placeholder="blurred"
                                />
                              </span>
                            </div>
                            <div className="d-flex listing-content">
                              <h4>Error handling While Booking</h4>
                              <span>
                                ES Booking Extension takes care of all the
                                errors popups up while booking the slot,
                                especially on bulk release.
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className="icon-container">
                              <span className="circle second">
                                <i>
                                  <StaticImage
                                    src="../../images/icons/24x7-icn.png"
                                    alt="24X7 Customer support"
                                    title="24X7 Customer support"
                                    className="d-inline-block align-text-top img-fluid"
                                    layout="fixed"
                                    placeholder="blurred"
                                  />
                                </i>
                              </span>
                            </div>
                            <div className="listing-content d-flex">
                              <h4>24X7 Customer support</h4>
                              <span>
                                Premium users will get Private discussion
                                channels for all their queries, tricks, and tips
                                for booking an appointment.
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className="icon-container">
                              <span className="circle second">
                                <i>
                                  <StaticImage
                                    src="../../images/icons/trusted-icn.png"
                                    alt="Trusted by million"
                                    title="Trusted by million"
                                    className="d-inline-block align-text-top img-fluid"
                                    layout="fixed"
                                    placeholder="blurred"
                                  />
                                </i>
                              </span>
                            </div>
                            <div className="listing-content d-flex">
                              <h4>Trusted by million users</h4>
                              <span>
                                ES Booking is the first-ever real-time alert
                                service started in 2020 and helped many users
                                book their visa appointments.
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xl-8 col-lg-7 col-md-12 col-sm-12">
                      <div className="application-img-one" />
                    </div>
                  </div>
                </div>
                {/* <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">...</div>
                      <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">...</div>
                      <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">...</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
