import React from 'react';

export default function LandingAboutus() {
  return (
    <section className="landing_about_us">
      <div className="container">
        <div className="row no-margin">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <div className="aboutus_left d-flex">
              <div className="box_for_content">
                <div className="box green d-flex">
                  <h3>10K+</h3>
                  <span>Member</span>
                </div>
                <div className="box yellow d-flex">
                  <h3>5000+</h3>
                  <span>Trusted Users</span>
                </div>
                <div className="box sky d-flex">
                  <h3>366+</h3>
                  <span>Success stories</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
            <div className="landing_aboutus_content d-flex">
              <h6 className="section_heading d-block">
                About Easy Slot Booking
              </h6>
              <h3 className="my-3 d-block">
                Easy Slot Booking for visa appointments
              </h3>
              <p className="d-block">
                Now never miss the single slot with Easy Slot Booking. Getting a
                visa is always tiresome and problematic, especially when getting
                a US visa. It's tough to get dates as per your choice;
                sometimes, you can get blocked with multiple logins. But if you
                want visa booking quickly, you've come to the right place!
              </p>
              <p className="d-block">
                With chrome extension and Alerts, it becomes easier! Users can
                look over available dates using telegram and the chrome
                extension surveys errors, if any, during slot booking. The
                complete process is done correctly with fast booking. You must
                follow the telegram channel and log in to the portal to get a
                slot as per your choice. One can download the
                <a>ES Booking chrome extension </a> now!
              </p>
              <div className="btn_container d-flex">
                <a href="#" className="btn default_btn primary">
                  Read More
                </a>
                <a href="#" className="btn default_btn primary_border">
                  Watch Video
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
