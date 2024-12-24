import React from 'react';

export default function LearnBanner() {
  return (
    <main className="learn_page">
      <section className="learn_hero">
        <div className="container">
          <div className="row no-margin">
            <div className="col-12">
              <h2 className="white_heading">
                Learning is an art and we're always ready to help our client's
              </h2>
            </div>
          </div>

          <div className="row no-margin learn_hero_container">
            <div className="col-xxl-3 col-md-6 col-sm-12">
              <div className="learn_content">
                <span className="white_text">
                  Agency's blog on medium where we share our thoughts about
                  Marketing future and creativity in the fields.
                </span>
                <span className="reader_green">12K Readers</span>
                <a href="#" className="read_article">
                  Read the article
                </a>
              </div>
              <div className="color_box pink">
                <span className="icon_container">
                  <img
                    src="../assets/images/icons/learn-icn-1.svg"
                    alt=""
                    title=""
                  />
                </span>
                <h6>Live webinars</h6>
                <h2>Join our live webinar</h2>
                <p>
                  Work with a trainer and peers to set up Asana in an
                  interactive session with a live Q&A.
                </p>
                <a href="#">Register Today</a>
              </div>
            </div>
            <div className="col-xxl-3 col-md-6 col-sm-12">
              <div className="learn_content">
                <span className="white_text">
                  Agency's blog on medium where we share our thoughts about
                  Marketing future and creativity in the fields.
                </span>
                <span className="reader_green">12K Readers</span>
                <a href="#" className="read_article">
                  Read the article
                </a>
              </div>
              <div className="color_box green">
                <span className="icon_container">
                  <img
                    src="../assets/images/icons/learn-icn-2.svg"
                    alt=""
                    title=""
                  />
                </span>
                <h6>ES booking guide</h6>
                <h2>Get tips from experts</h2>
                <p>
                  Work with a trainer and peers to set up Asana in an
                  interactive session with a live Q&A.
                </p>
                <a href="#">Read Articles</a>
              </div>
            </div>
            <div className="col-xxl-3 col-md-6 col-sm-12">
              <div className="learn_content">
                <span className="white_text">
                  Agency's blog on medium where we share our thoughts about
                  Marketing future and creativity in the fields.
                </span>
                <span className="reader_green">12K Readers</span>
                <a href="#" className="read_article">
                  Read the article
                </a>
              </div>
              <div className="color_box sky">
                <span className="icon_container">
                  <img
                    src="../assets/images/icons/learn-icn-3.svg"
                    alt=""
                    title=""
                  />
                </span>
                <h6>Video tutorials</h6>
                <h2>Watch video tutorials</h2>
                <p>
                  Work with a trainer and peers to set up Asana in an
                  interactive session with a live Q&A.
                </p>
                <a href="#">Browse videos</a>
              </div>
            </div>
            <div className="col-xxl-3 col-md-6 col-sm-12">
              <div className="learn_content">
                <span className="white_text">
                  Agency's blog on medium where we share our thoughts about
                  Marketing future and creativity in the fields.
                </span>
                <span className="reader_green">12K Readers</span>
                <a href="#" className="read_article">
                  Read the article
                </a>
              </div>
              <div className="color_box yellow">
                <span className="icon_container">
                  <img
                    src="../assets/images/icons/learn-icn-4.svg"
                    alt=""
                    title=""
                  />
                </span>
                <h6>ES Booking basic courses</h6>
                <h2>Complete a course</h2>
                <p>
                  Work with a trainer and peers to set up Asana in an
                  interactive session with a live Q&A.
                </p>
                <a href="#">Browse courses</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="quick_videos">
        <div className="container">
          <div className="row no-margin heading_row">
            <div className="col-12">
              <h4>Get started with quick videos</h4>
            </div>
          </div>
          <div className="row no-margin mt-5">
            <div className="col-xxl-3 col-md-12 col-sm-12">
              <div className="most_watched">
                <span className="clipart_icn"></span>
                <h3>Learn in minutes with video tutorials</h3>
                <p>
                  The ES Booking is here to help you and your team get the most
                  out of using ES booking and build your work.
                </p>
                <a href="#">
                  See all video tutorials <i className="fa fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-xxl-9 col-md-12 col-sm-12">
              <div
                id="learn-carousal"
                className="video_carousal_container owl-carousel owl-theme"
              >
                <div className="video_content">
                  <div className="thumb_img first">
                    <span className="time">
                      <i className="fa-regular fa-clock"></i>13:40
                    </span>
                  </div>
                  <a href="#" className="btn getting_started">
                    Getting Started
                  </a>
                  <h3>What is ES Booking?</h3>
                  <p>
                    Asana is a collaborative, work management platform. But what
                    does that mean?
                  </p>
                </div>

                <div className="video_content">
                  <div className="thumb_img second">
                    <span className="time">
                      <i className="fa-regular fa-clock"></i>12:25
                    </span>
                  </div>
                  <a href="#" className="btn getting_started">
                    Getting Started
                  </a>
                  <h3>Best support awarded to us</h3>
                  <p>
                    Asana is a collaborative, work management platform. But what
                    does that mean?
                  </p>
                </div>

                <div className="video_content">
                  <div className="thumb_img third">
                    <span className="time">
                      <i className="fa-regular fa-clock"></i>22:10
                    </span>
                  </div>
                  <a href="#" className="btn getting_started">
                    Getting Started
                  </a>
                  <h3>Collaborating with ES Booking</h3>
                  <p>
                    Asana is a collaborative, work management platform. But what
                    does that mean?
                  </p>
                </div>

                <a href="#" className="arrow-right">
                  <img
                    src="../assets/images/learn/carousal-arrow.svg"
                    alt=""
                    title=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row no-margin heading_row">
            <div className="col-12">
              <h4>Learn how Easyslot Booking works</h4>
            </div>
          </div>
          <div className="row no-margin mt-5">
            <div className="col-xxl-3 col-md-12 col-sm-12">
              <div className="most_watched">
                <span className="clipart_icn"></span>
                <h3>Learn in minutes with video tutorials</h3>
                <p>
                  The ES Booking is here to help you and your team get the most
                  out of using ES booking and build your work.
                </p>
                <a href="#">
                  See all video tutorials <i className="fa fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-xxl-9 col-md-12 col-sm-12">
              <div
                id="learn-carousal"
                className="video_carousal_container owl-carousel owl-theme"
              >
                <div className="video_content">
                  <div className="thumb_img first">
                    <span className="time">
                      <i className="fa-regular fa-clock"></i>13:40
                    </span>
                  </div>
                  <a href="#" className="btn getting_started">
                    Getting Started
                  </a>
                  <h3>What is ES Booking?</h3>
                  <p>
                    Asana is a collaborative, work management platform. But what
                    does that mean?
                  </p>
                </div>

                <div className="video_content">
                  <div className="thumb_img second">
                    <span className="time">
                      <i className="fa-regular fa-clock"></i>12:25
                    </span>
                  </div>
                  <a href="#" className="btn getting_started">
                    Getting Started
                  </a>
                  <h3>Best support awarded to us</h3>
                  <p>
                    Asana is a collaborative, work management platform. But what
                    does that mean?
                  </p>
                </div>

                <div className="video_content">
                  <div className="thumb_img third">
                    <span className="time">
                      <i className="fa-regular fa-clock"></i>22:10
                    </span>
                  </div>
                  <a href="#" className="btn getting_started">
                    Getting Started
                  </a>
                  <h3>Collaborating with ES Booking</h3>
                  <p>
                    Asana is a collaborative, work management platform. But what
                    does that mean?
                  </p>
                </div>

                <a href="#" className="arrow-right">
                  <img
                    src="../assets/images/learn/carousal-arrow.svg"
                    alt=""
                    title=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="email_newsletter">
        <div className="container">
          <div className="row no-margin">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="subscribe d-flex">
                <h5>Subscribe to our newsletter</h5>
                <span>
                  Stay up to date with the latest news, announcements and
                  articles. No spam.
                </span>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <form className="newsletter d-flex" name="newsletter">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="Enter your email"
                  placeholder="Enter your email"
                />
                <button className="btn default_btn primary" type="submit">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="gradient_divider"></section>
    </main>
  );
}
