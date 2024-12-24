import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import './review.scss';

export default function CustomerReview() {
  return (
    <main className="customer_review">
      <section className="review_hero">
        <div className="dot_shape">
          <StaticImage
            alt="dot-shape"
            src="../../images/customer-support/dot-shape.svg"
          />
        </div>
        <div className="container">
          <div className="left_content">
            <div className="label">Customer Reviews</div>
            <h1>
              Why Easy Slot Booking
              <br />
              is the #1 choice
              <br />
              for Visa Slot Booking
            </h1>
            <p>
              Because it is the top choice for Browser Extension, services,
              support, and visa slot booking 1M+ websites. And Easy Slot Booking
              reviews highlight its credibility as a fast, expert-supported,
              scalable & affordable hosting provider.
            </p>
            <a href="#" className="review_btn">
              <span className="circle">
                <StaticImage
                  alt="star"
                  src="../../images/customer-review/star-icon.svg"
                />
              </span>
              <div className="btn_content">
                <div className="rating">
                  <h5>4.5</h5>
                  <span>(240k+)</span>
                </div>
                <span className="subtitle">Reviews on Trustpilot</span>
              </div>
            </a>
          </div>
          <div className="right_clipart"></div>
        </div>
      </section>

      <section className="review_testimonial">
        <div className="container">
          <h1>
            Easy Slot Booking reviews show why Customers Trust Us as the #1 Visa
            Slot Booking Provider
          </h1>
          <p className="sub_text">
            Hear directly from our satisfied customers about their pre-Easy Slot
            Booking experience and how our services transformed their
            businesses.
          </p>

          {/* <div className="card_wrapper">
            <div className="testi_card">
              <div className="user_details">
                <span className="user_img">
                  <StaticImage
                    alt="user-1"
                    src="../../images/customer-review/user-1.svg"
                  />
                </span>
                <div className="user_info">
                  <h6>Krishna Mohan Padaa</h6>
                  <span className="sub_text">Full Stack Developer, USA</span>
                </div>
              </div>
              <div className="testi_text">
                Life saver for everyone looking to book visa appointment. I have
                been trying to get a slot for the last two months and could not
                get one. After using Easy slot booking for a few days I got my
                slot. Very happy to have this service.
              </div>
              <div className="rating_wrapper">
                <ul className="stars">
                  <li>
                    <a>
                      <StaticImage
                        alt="green-star"
                        src="../../images/customer-review/green-star.svg"
                      />
                    </a>
                  </li>
                  <li>
                    <a>
                      <StaticImage
                        alt="green-star"
                        src="../../images/customer-review/green-star.svg"
                      />
                    </a>
                  </li>
                  <li>
                    <a>
                      <StaticImage
                        alt="green-star"
                        src="../../images/customer-review/green-star.svg"
                      />
                    </a>
                  </li>
                  <li>
                    <a>
                      <StaticImage
                        alt="green-star"
                        src="../../images/customer-review/green-star.svg"
                      />
                    </a>
                  </li>
                  <li>
                    <a>
                      <StaticImage
                        alt="green-star"
                        src="../../images/customer-review/gray-star.svg"
                      />
                    </a>
                  </li>
                </ul>
                <span className="quote"></span>
              </div>
            </div>

            <div className="testi_card active">
              <div className="user_details">
                <span className="user_img">
                  <StaticImage
                    alt="user-2"
                    src="../../images/customer-review/user-2.svg"
                  />
                </span>
                <div className="user_info">
                  <h6>Krishna Mohan Padaa</h6>
                  <span className="sub_text">Full Stack Developer, USA</span>
                </div>
              </div>
              <div className="testi_text">
                Life saver for everyone looking to book visa appointment. I have
                been trying to get a slot for the last two months and could not
                get one. After using Easy slot booking for a few days I got my
                slot. Very happy to have this service.
              </div>
              <div className="rating_wrapper">
                <ul className="stars">
                  <li>
                    <a>
                      <StaticImage
                        alt="green-star"
                        src="../../images/customer-review/green-star.svg"
                      />
                    </a>
                  </li>
                  <li>
                    <a>
                      <StaticImage
                        alt="green-star"
                        src="../../images/customer-review/green-star.svg"
                      />
                    </a>
                  </li>
                  <li>
                    <a>
                      <StaticImage
                        alt="green-star"
                        src="../../images/customer-review/green-star.svg"
                      />
                    </a>
                  </li>
                  <li>
                    <a>
                      <StaticImage
                        alt="green-star"
                        src="../../images/customer-review/green-star.svg"
                      />
                    </a>
                  </li>
                  <li>
                    <a>
                      <StaticImage
                        alt="green-star"
                        src="../../images/customer-review/gray-star.svg"
                      />
                    </a>
                  </li>
                </ul>
                <span className="quote"></span>
              </div>
            </div>

            <div className="testi_card">
              <div className="user_details">
                <span className="user_img">
                  <StaticImage
                    alt="user-3"
                    src="../../images/customer-review/user-3.svg"
                  />
                </span>
                <div className="user_info">
                  <h6>Krishna Mohan Padaa</h6>
                  <span className="sub_text">Full Stack Developer, USA</span>
                </div>
              </div>
              <div className="testi_text">
                Life saver for everyone looking to book visa appointment. I have
                been trying to get a slot for the last two months and could not
                get one. After using Easy slot booking for a few days I got my
                slot. Very happy to have this service.
              </div>
              <div className="rating_wrapper">
                <ul className="stars">
                  <li>
                    <a>
                      <StaticImage
                        alt="green-star"
                        src="../../images/customer-review/green-star.svg"
                      />
                    </a>
                  </li>
                  <li>
                    <a>
                      <StaticImage
                        alt="green-star"
                        src="../../images/customer-review/green-star.svg"
                      />
                    </a>
                  </li>
                  <li>
                    <a>
                      <StaticImage
                        alt="green-star"
                        src="../../images/customer-review/green-star.svg"
                      />
                    </a>
                  </li>
                  <li>
                    <a>
                      <StaticImage
                        alt="green-star"
                        src="../../images/customer-review/green-star.svg"
                      />
                    </a>
                  </li>
                  <li>
                    <a>
                      <StaticImage
                        alt="green-star"
                        src="../../images/customer-review/gray-star.svg"
                      />
                    </a>
                  </li>
                </ul>
                <span className="quote"></span>
              </div>
            </div>
          </div> */}
        </div>

        <div className="main_container">
          <Swiper
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              margin: '0 auto',
              padding: '0 20px',
              width: '100%',
            }}
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={18}
            slidesPerView={3}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              480: { slidesPerView: 1, spaceBetween: 15 },
              640: { slidesPerView: 2, spaceBetween: 15 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 18 },
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              el: '.custom-pagination',
            }}
            className="swiper-wrapper"
          >
            <SwiperSlide>
              <div className="testi_card ">
                <div className="user_details">
                  <span className="user_img">
                    <StaticImage
                      alt="user-1"
                      src="../../images/customer-review/user-1.svg"
                    />
                  </span>
                  <div className="user_info">
                    <h6>Krishna Mohan Padaa</h6>
                    <span className="sub_text">Full Stack Developer, USA</span>
                  </div>
                </div>
                <div className="testi_text">
                  Life saver for everyone looking to book visa appointment. I
                  have been trying to get a slot for the last two months and
                  could not get one. After using Easy slot booking for a few
                  days I got my slot. Very happy to have this service.
                </div>
                <div className="rating_wrapper">
                  <ul className="stars">
                    {[...Array(4)].map((_, i) => (
                      <li key={i}>
                        <a>
                          <StaticImage
                            alt="green-star"
                            src="../../images/customer-review/green-star.svg"
                          />
                        </a>
                      </li>
                    ))}
                    <li>
                      <a>
                        <StaticImage
                          alt="gray-star"
                          src="../../images/customer-review/gray-star.svg"
                        />
                      </a>
                    </li>
                  </ul>
                  <img src="/quote-black.svg" alt="quote" />
                  {/* <span className="quote"></span> */}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testi_card active">
                <div className="user_details">
                  <span className="user_img">
                    <StaticImage
                      alt="user-2"
                      src="../../images/customer-review/user-2.svg"
                    />
                  </span>
                  <div className="user_info">
                    <h6>Krishna Mohan Padaa</h6>
                    <span className="sub_text">Full Stack Developer, USA</span>
                  </div>
                </div>
                <div className="testi_text">
                  Life saver for everyone looking to book visa appointment. I
                  have been trying to get a slot for the last two months and
                  could not get one. After using Easy slot booking for a few
                  days I got my slot. Very happy to have this service.
                </div>
                <div className="rating_wrapper">
                  <ul className="stars">
                    <li>
                      <a>
                        <StaticImage
                          alt="green-star"
                          src="../../images/customer-review/green-star.svg"
                        />
                      </a>
                    </li>
                    <li>
                      <a>
                        <StaticImage
                          alt="green-star"
                          src="../../images/customer-review/green-star.svg"
                        />
                      </a>
                    </li>
                    <li>
                      <a>
                        <StaticImage
                          alt="green-star"
                          src="../../images/customer-review/green-star.svg"
                        />
                      </a>
                    </li>
                    <li>
                      <a>
                        <StaticImage
                          alt="green-star"
                          src="../../images/customer-review/green-star.svg"
                        />
                      </a>
                    </li>
                    <li>
                      <a>
                        <StaticImage
                          alt="green-star"
                          src="../../images/customer-review/gray-star.svg"
                        />
                      </a>
                    </li>
                  </ul>
                  <img src="/quote-black.svg" alt="quote" />
                  {/* <span className="quote"></span> */}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testi_card">
                <div className="user_details">
                  <span className="user_img">
                    <StaticImage
                      alt="user-3"
                      src="../../images/customer-review/user-3.svg"
                    />
                  </span>
                  <div className="user_info">
                    <h6>Krishna Mohan Padaa</h6>
                    <span className="sub_text">Full Stack Developer, USA</span>
                  </div>
                </div>
                <div className="testi_text">
                  Life saver for everyone looking to book visa appointment. I
                  have been trying to get a slot for the last two months and
                  could not get one. After using Easy slot booking for a few
                  days I got my slot. Very happy to have this service.
                </div>
                <div className="rating_wrapper">
                  <ul className="stars">
                    <li>
                      <a>
                        <StaticImage
                          alt="green-star"
                          src="../../images/customer-review/green-star.svg"
                        />
                      </a>
                    </li>
                    <li>
                      <a>
                        <StaticImage
                          alt="green-star"
                          src="../../images/customer-review/green-star.svg"
                        />
                      </a>
                    </li>
                    <li>
                      <a>
                        <StaticImage
                          alt="green-star"
                          src="../../images/customer-review/green-star.svg"
                        />
                      </a>
                    </li>
                    <li>
                      <a>
                        <StaticImage
                          alt="green-star"
                          src="../../images/customer-review/green-star.svg"
                        />
                      </a>
                    </li>
                    <li>
                      <a>
                        <StaticImage
                          alt="green-star"
                          src="../../images/customer-review/gray-star.svg"
                        />
                      </a>
                    </li>
                  </ul>
                  <img src="/quote-black.svg" alt="quote" />
                  {/* <span className="quote"></span> */}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testi_card">
                <div className="user_details">
                  <span className="user_img">
                    <StaticImage
                      alt="user-1"
                      src="../../images/customer-review/user-1.svg"
                    />
                  </span>
                  <div className="user_info">
                    <h6>Krishna Mohan Padaa</h6>
                    <span className="sub_text">Full Stack Developer, USA</span>
                  </div>
                </div>
                <div className="testi_text">
                  Life saver for everyone looking to book visa appointment. I
                  have been trying to get a slot for the last two months and
                  could not get one. After using Easy slot booking for a few
                  days I got my slot. Very happy to have this service.
                </div>
                <div className="rating_wrapper">
                  <ul className="stars">
                    {[...Array(4)].map((_, i) => (
                      <li key={i}>
                        <a>
                          <StaticImage
                            alt="green-star"
                            src="../../images/customer-review/green-star.svg"
                          />
                        </a>
                      </li>
                    ))}
                    <li>
                      <a>
                        <StaticImage
                          alt="gray-star"
                          src="../../images/customer-review/gray-star.svg"
                        />
                      </a>
                    </li>
                  </ul>
                  <img src="/quote-black.svg" alt="quote" />
                  {/* <span className="quote"></span> */}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testi_card active">
                <div className="user_details">
                  <span className="user_img">
                    <StaticImage
                      alt="user-2"
                      src="../../images/customer-review/user-2.svg"
                    />
                  </span>
                  <div className="user_info">
                    <h6>Krishna Mohan Padaa</h6>
                    <span className="sub_text">Full Stack Developer, USA</span>
                  </div>
                </div>
                <div className="testi_text">
                  Life saver for everyone looking to book visa appointment. I
                  have been trying to get a slot for the last two months and
                  could not get one. After using Easy slot booking for a few
                  days I got my slot. Very happy to have this service.
                </div>
                <div className="rating_wrapper">
                  <ul className="stars">
                    <li>
                      <a>
                        <StaticImage
                          alt="green-star"
                          src="../../images/customer-review/green-star.svg"
                        />
                      </a>
                    </li>
                    <li>
                      <a>
                        <StaticImage
                          alt="green-star"
                          src="../../images/customer-review/green-star.svg"
                        />
                      </a>
                    </li>
                    <li>
                      <a>
                        <StaticImage
                          alt="green-star"
                          src="../../images/customer-review/green-star.svg"
                        />
                      </a>
                    </li>
                    <li>
                      <a>
                        <StaticImage
                          alt="green-star"
                          src="../../images/customer-review/green-star.svg"
                        />
                      </a>
                    </li>
                    <li>
                      <a>
                        <StaticImage
                          alt="green-star"
                          src="../../images/customer-review/gray-star.svg"
                        />
                      </a>
                    </li>
                  </ul>
                  <img src="/quote-black.svg" alt="quote" />
                  {/* <span className="quote"></span> */}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testi_card">
                <div className="user_details">
                  <span className="user_img">
                    <StaticImage
                      alt="user-3"
                      src="../../images/customer-review/user-3.svg"
                    />
                  </span>
                  <div className="user_info">
                    <h6>Krishna Mohan Padaa</h6>
                    <span className="sub_text">Full Stack Developer, USA</span>
                  </div>
                </div>
                <div className="testi_text">
                  Life saver for everyone looking to book visa appointment. I
                  have been trying to get a slot for the last two months and
                  could not get one. After using Easy slot booking for a few
                  days I got my slot. Very happy to have this service.
                </div>
                <div className="rating_wrapper">
                  <ul className="stars">
                    <li>
                      <a>
                        <StaticImage
                          alt="green-star"
                          src="../../images/customer-review/green-star.svg"
                        />
                      </a>
                    </li>
                    <li>
                      <a>
                        <StaticImage
                          alt="green-star"
                          src="../../images/customer-review/green-star.svg"
                        />
                      </a>
                    </li>
                    <li>
                      <a>
                        <StaticImage
                          alt="green-star"
                          src="../../images/customer-review/green-star.svg"
                        />
                      </a>
                    </li>
                    <li>
                      <a>
                        <StaticImage
                          alt="green-star"
                          src="../../images/customer-review/green-star.svg"
                        />
                      </a>
                    </li>
                    <li>
                      <a>
                        <StaticImage
                          alt="green-star"
                          src="../../images/customer-review/gray-star.svg"
                        />
                      </a>
                    </li>
                  </ul>
                  <img src="/quote-black.svg" alt="quote" />
                  {/* <span className="quote"></span> */}
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="custom-pagination" />
        </div>
      </section>

      <section className="social_comments">
        <div className="container">
          <h1>
            Easy Slot Booking reviews on Independent Review Sites Confirms Years
            of Excellence
          </h1>
          <p>
            Discover why customers are raving about Easy Slot Booking on trusted
            review sites like Twitter, Facebook, and Google. Explore their
            feedback on our exceptional product and services.
          </p>

          <div className="comments_section">
            <ul className="nav nav-tabs" id="commentsTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="twitter-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#twitter-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="twitter-tab-pane"
                  aria-selected="true"
                >
                  <span className="btn_icon twitter"></span>
                  <span className="btn_text">Twitter</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="facebook-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#facebook-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="facebook-tab-pane"
                  aria-selected="false"
                >
                  <span className="btn_icon facebook"></span>
                  <span className="btn_text">Facebook</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="google-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#google-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="google-tab-pane"
                  aria-selected="false"
                >
                  <span className="btn_icon google"></span>
                  <span className="btn_text">Google</span>
                </button>
              </li>
            </ul>

            <div className="tab-content" id="commentsTabContent">
              <div
                className="tab-pane fade show active"
                id="twitter-tab-pane"
                role="tabpanel"
                aria-labelledby="twitter-tab-pane"
                tabIndex={0}
              >
                <div className="comments_wrapper">
                  <div className="card">
                    <p className="text">
                      It helped me a lot. I love the support! No problems at all
                      and whenever I had a question, the customer service was
                      quick to respond! Thank you.
                    </p>
                    <div className="user_details">
                      <div className="name">
                        <h6>Himanshu Gayen</h6>
                        <div className="recommend">
                          <span className="text">Recommend :</span>
                          <span className="option yes">Yes</span>
                        </div>
                      </div>
                      <span className="date">18.09.2024</span>
                    </div>
                  </div>
                  <div className="card">
                    <p className="text">
                      It helped me a lot. I love the support! No problems at all
                      and whenever I had a question, the customer service was
                      quick to respond! Thank you.
                    </p>
                    <div className="user_details">
                      <div className="name">
                        <h6>Himanshu Gayen</h6>
                        <div className="recommend">
                          <span className="text">Recommend :</span>
                          <span className="option yes">Yes</span>
                        </div>
                      </div>
                      <span className="date">18.09.2024</span>
                    </div>
                  </div>
                  <div className="card">
                    <p className="text">
                      It helped me a lot. I love the support! No problems at all
                      and whenever I had a question, the customer service was
                      quick to respond! Thank you.
                    </p>
                    <div className="user_details">
                      <div className="name">
                        <h6>Himanshu Gayen</h6>
                        <div className="recommend">
                          <span className="text">Recommend :</span>
                          <span className="option yes">Yes</span>
                        </div>
                      </div>
                      <span className="date">18.09.2024</span>
                    </div>
                  </div>

                  <div className="card second_row">
                    <p className="text">
                      It helped me a lot. I love the support! No problems at all
                      and whenever I had a question, the customer service was
                      quick to respond! Thank you.
                    </p>
                    <div className="user_details">
                      <div className="name">
                        <h6>Himanshu Gayen</h6>
                        <div className="recommend">
                          <span className="text">Recommend :</span>
                          <span className="option yes">Yes</span>
                        </div>
                      </div>
                      <span className="date">18.09.2024</span>
                    </div>
                  </div>
                  <div className="card second_row">
                    <p className="text">
                      It helped me a lot. I love the support! No problems at all
                      and whenever I had a question, the customer service was
                      quick to respond! Thank you.
                    </p>
                    <div className="user_details">
                      <div className="name">
                        <h6>Himanshu Gayen</h6>
                        <div className="recommend">
                          <span className="text">Recommend :</span>
                          <span className="option yes">Yes</span>
                        </div>
                      </div>
                      <span className="date">18.09.2024</span>
                    </div>
                  </div>
                  <div className="card second_row">
                    <p className="text">
                      It helped me a lot. I love the support! No problems at all
                      and whenever I had a question, the customer service was
                      quick to respond! Thank you.
                    </p>
                    <div className="user_details">
                      <div className="name">
                        <h6>Himanshu Gayen</h6>
                        <div className="recommend">
                          <span className="text">Recommend :</span>
                          <span className="option yes">Yes</span>
                        </div>
                      </div>
                      <span className="date">18.09.2024</span>
                    </div>
                  </div>
                </div>
                <div className="btn_wrapper">
                  <a href="#" className="load_reviews">
                    Load More Reviews
                  </a>
                </div>
              </div>

              <div
                className="tab-pane"
                id="facebook-tab-pane"
                role="tabpanel"
                aria-labelledby="facebook-tab-pane"
                tabIndex={0}
              >
                <div className="comments_wrapper">
                  <div className="card">
                    <p className="text">
                      It helped me a lot. I love the support! No problems at all
                      and whenever I had a question, the customer service was
                      quick to respond! Thank you.
                    </p>
                    <div className="user_details">
                      <div className="name">
                        <h6>Himanshu Gayen</h6>
                        <div className="recommend">
                          <span className="text">Recommend :</span>
                          <span className="option yes">Yes</span>
                        </div>
                      </div>
                      <span className="date">18.09.2024</span>
                    </div>
                  </div>
                  <div className="card">
                    <p className="text">
                      It helped me a lot. I love the support! No problems at all
                      and whenever I had a question, the customer service was
                      quick to respond! Thank you.
                    </p>
                    <div className="user_details">
                      <div className="name">
                        <h6>Himanshu Gayen</h6>
                        <div className="recommend">
                          <span className="text">Recommend :</span>
                          <span className="option yes">Yes</span>
                        </div>
                      </div>
                      <span className="date">18.09.2024</span>
                    </div>
                  </div>
                  <div className="card">
                    <p className="text">
                      It helped me a lot. I love the support! No problems at all
                      and whenever I had a question, the customer service was
                      quick to respond! Thank you.
                    </p>
                    <div className="user_details">
                      <div className="name">
                        <h6>Himanshu Gayen</h6>
                        <div className="recommend">
                          <span className="text">Recommend :</span>
                          <span className="option yes">Yes</span>
                        </div>
                      </div>
                      <span className="date">18.09.2024</span>
                    </div>
                  </div>

                  <div className="card second_row">
                    <p className="text">
                      It helped me a lot. I love the support! No problems at all
                      and whenever I had a question, the customer service was
                      quick to respond! Thank you.
                    </p>
                    <div className="user_details">
                      <div className="name">
                        <h6>Himanshu Gayen</h6>
                        <div className="recommend">
                          <span className="text">Recommend :</span>
                          <span className="option yes">Yes</span>
                        </div>
                      </div>
                      <span className="date">18.09.2024</span>
                    </div>
                  </div>
                  <div className="card second_row">
                    <p className="text">
                      It helped me a lot. I love the support! No problems at all
                      and whenever I had a question, the customer service was
                      quick to respond! Thank you.
                    </p>
                    <div className="user_details">
                      <div className="name">
                        <h6>Himanshu Gayen</h6>
                        <div className="recommend">
                          <span className="text">Recommend :</span>
                          <span className="option yes">Yes</span>
                        </div>
                      </div>
                      <span className="date">18.09.2024</span>
                    </div>
                  </div>
                  <div className="card second_row">
                    <p className="text">
                      It helped me a lot. I love the support! No problems at all
                      and whenever I had a question, the customer service was
                      quick to respond! Thank you.
                    </p>
                    <div className="user_details">
                      <div className="name">
                        <h6>Himanshu Gayen</h6>
                        <div className="recommend">
                          <span className="text">Recommend :</span>
                          <span className="option yes">Yes</span>
                        </div>
                      </div>
                      <span className="date">18.09.2024</span>
                    </div>
                  </div>
                </div>
                <div className="btn_wrapper">
                  <a href="#" className="load_reviews">
                    Load More Reviews
                  </a>
                </div>
              </div>

              <div
                className="tab-pane"
                id="google-tab-pane"
                role="tabpanel"
                aria-labelledby="google-tab-pane"
                tabIndex={0}
              >
                <div className="comments_wrapper">
                  <div className="card">
                    <p className="text">
                      It helped me a lot. I love the support! No problems at all
                      and whenever I had a question, the customer service was
                      quick to respond! Thank you.
                    </p>
                    <div className="user_details">
                      <div className="name">
                        <h6>Himanshu Gayen</h6>
                        <div className="recommend">
                          <span className="text">Recommend :</span>
                          <span className="option yes">Yes</span>
                        </div>
                      </div>
                      <span className="date">18.09.2024</span>
                    </div>
                  </div>
                  <div className="card">
                    <p className="text">
                      It helped me a lot. I love the support! No problems at all
                      and whenever I had a question, the customer service was
                      quick to respond! Thank you.
                    </p>
                    <div className="user_details">
                      <div className="name">
                        <h6>Himanshu Gayen</h6>
                        <div className="recommend">
                          <span className="text">Recommend :</span>
                          <span className="option yes">Yes</span>
                        </div>
                      </div>
                      <span className="date">18.09.2024</span>
                    </div>
                  </div>
                  <div className="card">
                    <p className="text">
                      It helped me a lot. I love the support! No problems at all
                      and whenever I had a question, the customer service was
                      quick to respond! Thank you.
                    </p>
                    <div className="user_details">
                      <div className="name">
                        <h6>Himanshu Gayen</h6>
                        <div className="recommend">
                          <span className="text">Recommend :</span>
                          <span className="option yes">Yes</span>
                        </div>
                      </div>
                      <span className="date">18.09.2024</span>
                    </div>
                  </div>

                  <div className="card second_row">
                    <p className="text">
                      It helped me a lot. I love the support! No problems at all
                      and whenever I had a question, the customer service was
                      quick to respond! Thank you.
                    </p>
                    <div className="user_details">
                      <div className="name">
                        <h6>Himanshu Gayen</h6>
                        <div className="recommend">
                          <span className="text">Recommend :</span>
                          <span className="option yes">Yes</span>
                        </div>
                      </div>
                      <span className="date">18.09.2024</span>
                    </div>
                  </div>
                  <div className="card second_row">
                    <p className="text">
                      It helped me a lot. I love the support! No problems at all
                      and whenever I had a question, the customer service was
                      quick to respond! Thank you.
                    </p>
                    <div className="user_details">
                      <div className="name">
                        <h6>Himanshu Gayen</h6>
                        <div className="recommend">
                          <span className="text">Recommend :</span>
                          <span className="option yes">Yes</span>
                        </div>
                      </div>
                      <span className="date">18.09.2024</span>
                    </div>
                  </div>
                  <div className="card second_row">
                    <p className="text">
                      It helped me a lot. I love the support! No problems at all
                      and whenever I had a question, the customer service was
                      quick to respond! Thank you.
                    </p>
                    <div className="user_details">
                      <div className="name">
                        <h6>Himanshu Gayen</h6>
                        <div className="recommend">
                          <span className="text">Recommend :</span>
                          <span className="option yes">Yes</span>
                        </div>
                      </div>
                      <span className="date">18.09.2024</span>
                    </div>
                  </div>
                </div>
                <div className="btn_wrapper">
                  <a href="#" className="load_reviews">
                    Load More Reviews
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="download">
        <div className="container">
          <h1>
            Visa slot booking made easier with Easy Slot Booking Extension
          </h1>
          <p className="subtitle">
            Easy Slot Booking tool helps people get the best possible Visa Date
            at your fingertips, 100% safe and trusted by thousands.
          </p>

          <div className="card_wrapper">
            <div className="download_card active">
              <div className="card_icon">
                <span className="desktop"></span>
              </div>
              <span className="sub_head">Desktop</span>
              <h3>PC/Mac</h3>
              <p className="text">
                Stay ahead with quick, adaptable communication strategies for
                evolving business landscapes.
              </p>
              <a className="download_btn">
                <span className="btn_icon">
                  <StaticImage
                    alt="download"
                    src="../../images/customer-review/download-icon.svg"
                  />
                </span>
                <span className="btn_text">Download</span>
              </a>
            </div>

            <div className="download_card">
              <div className="card_icon">
                <span className="apple"></span>
              </div>
              <span className="sub_head">Mobile Phone</span>
              <h3>iOS</h3>
              <p className="text">
                Stay ahead with quick, adaptable communication strategies for
                evolving business landscapes.
              </p>
              <a className="download_btn">
                <span className="btn_icon">
                  <StaticImage
                    alt="download"
                    src="../../images/customer-review/download-icon.svg"
                  />
                </span>
                <span className="btn_text">Download</span>
              </a>
            </div>

            <div className="download_card">
              <div className="card_icon">
                <span className="chrome"></span>
              </div>
              <span className="sub_head">Browser Extension</span>
              <h3>Chrome</h3>
              <p className="text">
                Stay ahead with quick, adaptable communication strategies for
                evolving business landscapes.
              </p>
              <a className="download_btn">
                <span className="btn_icon">
                  <StaticImage
                    alt="download"
                    src="../../images/customer-review/download-icon.svg"
                  />
                </span>
                <span className="btn_text">Download</span>
              </a>
            </div>

            <div className="download_card">
              <div className="card_icon">
                <span className="android"></span>
              </div>
              <span className="sub_head">Mobile Phone/Tablet</span>
              <h3>Android</h3>
              <p className="text">
                Stay ahead with quick, adaptable communication strategies for
                evolving business landscapes.
              </p>
              <a className="download_btn">
                <span className="btn_icon">
                  <StaticImage
                    alt="download"
                    src="../../images/customer-review/download-icon.svg"
                  />
                </span>
                <span className="btn_text">Download</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="gradient_divider"></section>
    </main>
  );
}
