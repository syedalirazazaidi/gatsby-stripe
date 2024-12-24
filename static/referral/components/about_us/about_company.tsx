import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import  "./about.scss";

export default function AboutCompany() {
  return (
    <main className="about_us negativeZIndex">
      <section className="about_company">
        <div className="container">
          <div className="company_content">
            <h6>About the Company</h6>
            <h2>
              Leading <b>Visa and Immigration</b> Agency
            </h2>
            <p>
              Going abroad by itself is a tedious process, be it for a business
              trip, higher education or just to travel. The uncertainty of
              getting your visa is an added stress amongst other aspects of it
              like planning.
            </p>
            <ul className="about_listing">
              <li>
                <span className="tick_icon">
                  <StaticImage
                    src="../../images/about-us/checked.png"
                    alt=""
                    title=""
                    placeholder="blurred"
                  />
                </span>
                <span className="list_text">Fast Processing</span>
              </li>
              <li>
                <span className="tick_icon">
                  <StaticImage
                    src="../../images/about-us/checked.png"
                    alt=""
                    title=""
                    placeholder="blurred"
                  />
                </span>
                <span className="list_text">Guarantee Approval</span>
              </li>
            </ul>
            <a href="#" className="watch_video">
              <span className="play_icon">
                <StaticImage
                  src="../../images/about-us/play-icon.svg"
                  alt=""
                  title=""
                  placeholder="blurred"
                />
              </span>
              <span className="watch_text">
                Watch the video to learn <br />
                more about us
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="our_mission">
        <div className="mission_bg">
          <div className="container">
            <div className="mission_head">
              <h1>Our mission</h1> to help client <br />
              and fulfill their <h2>Dream</h2>
            </div>
          </div>
        </div>
        <div className="mission_text">
          <p>
            There's this notion that to grow a business, you have to be
            ruthless. But we know there's a better way to grow. One where
            what'Rs good for the bottom line is also good for customers. We
            believe businesses can grow with a conscience, and succeed with a
            soul — and that they can do it with inbound. That's why we've
            created an ecosystem uniting software, education, and community to
            help businesses grow better every day.
            <br />
            <br />
            As fellow graduate students at MIT in 2004, Brian and Dharmesh
            noticed a shift in the way people shop and buy. Consumers were no
            longer tolerating interruptive bids for their attention — in fact,
            they'd gotten really, really good at ignoring them. From this shift,
            a company was born: HubSpot. It was founded on "inbound", the notion
            that people don't want to be interrupted by marketers or harassed by
            salespeople — they want to be helped.
          </p>
          <a href="#" className="btn know_more_btn">
            <h5>Know more about us</h5>
            <span className="next_arrow">
              <StaticImage
                src="../../images/about-us/next-arrow.svg"
                alt=""
                title=""
                placeholder="blurred"
              />
            </span>
          </a>
        </div>
      </section>

      <section className="our_story_video">
        <div className="container">
          <div className="story_container">
            <div className="content">
              <h3>
                Launch your future career by knowing <br />
                <span>our story</span> from experts
              </h3>
              <p>
                As fellow graduate students at MIT in 2004, Brian and Dharmesh
                noticed a shift in the way people shop and buy. Consumers were
                no longer tolerating interruptive bids for their attention — in
                fact, they'd gotten really, really good at ignoring them.
              </p>
              <div className="video_panel">
                <div className="panel_head">
                  <span className="dots">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="75"
                      height="16"
                      viewBox="0 0 75 18"
                      fill="none"
                    >
                      <circle cx="9" cy="9" r="9" fill="#FFE500" />
                      <circle cx="38" cy="9" r="9" fill="#FF3700" />
                      <circle cx="66" cy="9" r="9" fill="#00FF48" />
                    </svg>
                  </span>
                  <a href="#" className="btn default_btn red ontact_sales">
                    Contact Sales
                  </a>
                </div>
                <div className="panel_content">
                  <iframe
                    width="800"
                    height="387"
                    src="https://www.youtube.com/embed/oPUasqr9Yqk?si=STcviBTHpjtYvc6t"
                    title="YouTube video player"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="award_winning">
        <div className="container">
          <h1>
            Learn and grow better with award-winning <br />
            support and a thriving community.
          </h1>
          <p>
            Learn how to get the most out of HubSpot with free courses,
            certifications, and resources — plus a
            <br />
            legendary customer support team and an active user community to back
            you up.
          </p>
          <span className="blue_clipart">
            <StaticImage
              src="../../images/about-us/blue-curved.svg"
              alt=""
              title=""
              placeholder="blurred"
            />
          </span>

          <div className="award_details_container">
            <div className="award_content">
              <div className="content_box left">
                <StaticImage
                  src="../../images/about-us/group-icon.svg"
                  alt="ESB User Gruops"
                  title="ESB User Gruops"
                  placeholder="blurred"
                />

                <h2>150+</h2>
                <span>ES Booking user groups</span>
              </div>
              <div className="content_box left">
                <StaticImage
                  src="../../images/about-us/quality-icon.svg"
                  alt="Certified professionals"
                  title="Certified professionals"
                  placeholder="blurred"
                />

                <h2>483K+</h2>
                <span>Certified professionals</span>
              </div>
              <div className="content_box right">
                <StaticImage
                  src="../../images/about-us/followers-icon.svg"
                  alt="Social media followers"
                  title="Social media followers"
                  placeholder="blurred"
                />

                <h2>160K+</h2>
                <span>Social media followers</span>
              </div>

              <div className="content_box left pt-5">
                <StaticImage
                  src="../../images/about-us/handshake-icon.svg"
                  alt="ESB succesfull clients"
                  title="ESB succesfull clients"
                  placeholder="blurred"
                />

                <h2>1400</h2>
                <span>ES succesfull clients</span>
              </div>
              <div className="content_box left pt-5">
                <StaticImage
                  src="../../images/about-us/handshake-icon.svg"
                  alt="Monthly visits"
                  title="Monthly visits"
                  placeholder="blurred"
                />

                <h2>19K+</h2>
                <span>Every month visits</span>
              </div>
              <div className="content_box right pt-5">
                <StaticImage
                  src="../../images/about-us/registered-icon.svg"
                  alt="Registered users"
                  title="Registered users"
                  placeholder="blurred"
                />

                <h2>70K+</h2>
                <span>Successfull registered users</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="customer_feedback">
        <div className="container">
          <div className="row no-margin">
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12">
              <div className="cstmr_left_content">
                <h2>
                  Our{' '}
                  <span>
                    customers <br />
                    love
                  </span>{' '}
                  what we do
                </h2>
                <p>
                  Over 500,000 users and clients of all size use ES Booking to
                  get their visa slot booking with hassle free process.
                </p>
                <button className="btn default_btn primary read_stories">
                  Read the success stories
                </button>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12">
              <div className="user_feedback_container">
                <ul className="user_listing">
                  <li>
                    <span className="quote_icon">
                      <StaticImage
                        src="../../images/about-us/quote-blue.svg"
                        alt=""
                        title=""
                        placeholder="blurred"
                      />
                    </span>
                    <div className="user_message">
                      <span>
                        The service and customer team has a bunch of amazing
                        tools which solves my issue quickly
                      </span>
                      <StaticImage
                        src="../../images/about-us/client-1.png"
                        alt=""
                        title=""
                        placeholder="blurred"
                      />
                    </div>
                    <h2 className="name">Maya Halin</h2>
                  </li>

                  <li>
                    <span className="quote_icon">
                      <StaticImage
                        src="../../images/about-us/quote-blue.svg"
                        alt=""
                        title=""
                        placeholder="blurred"
                      />
                    </span>
                    <div className="user_message">
                      <span>
                        The service and customer team has a bunch of amazing
                        tools which solves my issue quickly
                      </span>
                      <StaticImage
                        src="../../images/about-us/client-2.png"
                        alt=""
                        title=""
                        placeholder="blurred"
                      />
                    </div>
                    <h2 className="name">Maya Halin</h2>
                  </li>

                  <li>
                    <span className="quote_icon">
                      <StaticImage
                        src="../../images/about-us/quote-blue.svg"
                        alt=""
                        title=""
                        placeholder="blurred"
                      />
                    </span>
                    <div className="user_message">
                      <span>
                        The service and customer team has a bunch of amazing
                        tools which solves my issue quickly
                      </span>
                      <StaticImage
                        src="../../images/about-us/client-3.png"
                        alt=""
                        title=""
                      />
                    </div>
                    <h2 className="name">Maya Halin</h2>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="cstmr_feedback_container">
          <div className="bg"></div>
        </div>
      </section>

      <section className="mission_second">
        <div className="line_clipart"></div>
        <div className="container">
          <div className="row no-margin mt-5">
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12">
              <div className="left_section">
                <h2>
                  <span>Our Mission</span> to help client <br />
                  and fulfill their <span>dream .</span>
                </h2>
                <p>
                  There's this notion that to grow a business, you have to be
                  ruthless. But we know there's a better way to grow. One where
                  what's good for the bottom line is also good for customers. We
                  believe businesses can grow with a conscience, and succeed
                  with a soul — and that they can do it with inbound. That's why
                  we've created an ecosystem uniting software, education, and
                  community to help businesses grow better every day.
                </p>
                <button className="btn default_btn orange_btn get_in_touch">
                  Get in touch
                </button>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12">
              <div className="right_container">
                <StaticImage
                  src="../../images/about-us/mission-second-bg.png"
                  alt=""
                  title=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our_story">
        <div className="right_clipart">
          <StaticImage
            src="../../images/about-us/story_right_clipart.svg"
            alt=""
            title=""
          />
        </div>
        <div className="row no-margin">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 pl_null">
            <div className="left_bg_section"></div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="right_content_section">
              <h2>Our Story</h2>
              <p>
                As fellow graduate students at MIT in 2004, Brian and Dharmesh
                noticed a shift in the way people shop and buy. Consumers were
                no longer tolerating interruptive bids for their attention — in
                fact, they'd gotten really, really good at ignoring them.
              </p>

              <p>
                From this shift, a company was born: HubSpot. It was founded on
                "inbound", the notion that people don't want to be interrupted
                by marketers or harassed by salespeople — they want to be
                helped.
              </p>

              <p>
                Today, the inbound movement continues to empower businesses
                around the world to stop interrupting, start helping, and return
                their focus to the customer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="gradient_divider about_page"></section>

      <section className="what_we_offer">
        <div className="container">
          <div className="row no-margin">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 pl_null">
              <div className="left_section">
                <h6 className="blue_heading">What do we offer</h6>
                <h2>
                  Outstanding immigration <span>visa services</span>
                </h2>
                <p>
                  Apply to travel, study work or immigrate to USA, Canada,
                  Poland apply for citizenship a permanent resident card.
                </p>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 pr_null">
              <div className="right_section">
                <a href="#" className="mx-5">
                  <StaticImage
                    src="../../images/about-us/student-visa.svg"
                    alt=""
                    title=""
                  />
                </a>
                <a href="#">
                  <StaticImage
                    src="../../images/about-us/business-visa.svg"
                    alt="Business Visa"
                    title="Business Visa"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="row no-margin mt-4">
            <div className="col-12 pl_null pr_null">
              <div className="visa_container">
                <a href="#">
                  <StaticImage
                    src="../../images/about-us/family-visa.svg"
                    alt="Family Visa"
                    title="Family Visa"
                  />
                </a>
                <a href="#">
                  <StaticImage
                    src="../../images/about-us/tourist-visa.png"
                    alt="Tourist Visa"
                    title="Tourist Visa"
                  />
                </a>
                <a href="#" className="residence">
                  <StaticImage
                    src="../../images/about-us/residence-visa.svg"
                    alt="Residence Visa"
                    title="Residence Visa"
                  />
                </a>
                <div className="blue_bg">
                  <h3>Get visa with 100% success rate</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our_support">
        <div className="container">
          <div className="row no-margin">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 pl_null">
              <div className="support_container">
                <div className="support_box border_purple">
                  <h2 className="number purple">01</h2>
                  <h1 className="support_heading">
                    Deliver the best customer experience, period.
                  </h1>
                  <h6>Direct Interviews</h6>
                  <span>Details matter. Add value in every interaction.</span>
                </div>

                <div className="support_box border_sky mt-5">
                  <h2 className="number sky">04</h2>
                  <h1 className="support_heading">
                    Thousand of trusted customers
                  </h1>
                  <h6>Direct Interviews</h6>
                  <span>Details matter. Add value in every interaction.</span>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 mob_space">
              <div className="support_container">
                <div className="support_box border_pink">
                  <h2 className="number pink">02</h2>
                  <h1 className="support_heading">Easy and fast process.</h1>
                  <h6>Direct Interviews</h6>
                  <span>Details matter. Add value in every interaction.</span>
                </div>

                <div className="support_box border_yellow mt-5">
                  <h2 className="number yellow">05</h2>
                  <h1 className="support_heading">
                    Get the <br />
                    best
                    <br /> training
                    <br /> you <br />
                    deserve
                  </h1>
                  <h6>Direct Interviews</h6>
                  <span>Details matter. Add value in every interaction.</span>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 pr_null">
              <div className="support_container">
                <h3 className="support_heading">Get Our Support</h3>
                <h6 className="purple_head">Providing Values</h6>
                <div className="support_box border_green">
                  <h2 className="number green">03</h2>
                  <h1 className="support_heading">
                    Providing industry's best immigration service.
                  </h1>
                  <h6>Direct Interviews</h6>
                  <span>Details matter. Add value in every interaction.</span>
                </div>

                <div className="support_box border_orange mt-5">
                  <h2 className="number orange">06</h2>
                  <h1 className="support_heading">
                    Fast <br />
                    visa <br />
                    process.
                  </h1>
                  <h6>Direct Interviews</h6>
                  <span>Details matter. Add value in every interaction.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gradient_divider"> </section>
    </main>
  );
}
