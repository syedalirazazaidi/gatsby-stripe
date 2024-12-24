import React from 'react';

export default function PartnerSection() {
  return (
    <section className="landing_features">
      <div className="features_absolute_position">
        <div className="container">
          <div className="row no-margin">
            <div className="col-12">
              <div className="d-flex what_we_do">
                <div className="rounded_heading">
                  <h5>What We Do</h5>
                </div>
                <h2>Flexible services for every stage of your requierment</h2>
                <div className="landing_features_list d-flex">
                  <ul className="features_container">
                    <li className="content">
                      <span className="icon_box d-flex pink">
                        <img
                          src="/landing/bulb_icon_1.svg"
                          height={36}
                          width={36}
                        />
                      </span>
                      <h3>Easy to Useable</h3>
                      <p className="features_text">
                        We always try to make our the platform easier every time
                      </p>
                    </li>
                    <li className="content">
                      <span className="icon_box d-flex blue">
                        <img
                          src="/landing/users_icon_2.svg"
                          height={36}
                          width={36}
                        />
                      </span>
                      <h3>1M+ Users</h3>
                      <p className="features_text">
                        We always give good feelings and impressions to each of
                        our users
                      </p>
                    </li>
                    <li className="content">
                      <span className="icon_box d-flex purple">
                        <img
                          src="/landing/eye_icon_3.svg"
                          height={36}
                          width={36}
                        />
                      </span>
                      <h3>Tranparency Services</h3>
                      <p className="features_text">
                        No one was harmed because everything was clear
                      </p>
                    </li>
                    <li className="content">
                      <span className="icon_box d-flex orange">
                        <img
                          src="/landing/thumb_icon_4.svg"
                          height={36}
                          width={36}
                        />
                      </span>
                      <h3>Happy Clients</h3>
                      <p className="features_text">
                        Happy and satiesfied clients worldwide and still
                        counting
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
