import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import './support.scss';

export default function CustomerSupport() {
  return (
    <main className="customer_support">
      <section className="support_hero">
        <div className="dot_shape">
          <StaticImage
            alt="dot"
            src="../../images/customer-support/dot-shape.svg"
          />
        </div>
        <div className="container">
          <div className="left_content">
            <div className="label">Customer Support</div>
            <h1>EasySlot Booking Support. Works as your Extended team.</h1>
            <p>
              With web app name, your support agents have the information they
              need to provide fast, effective support to your customers. Bye bye
              waiting and frustration, Get peace of mind with our 30 Minutes
              response guarantee.
            </p>
            <a href="#" className="free_trial">
              <span className="text">Start Free Trial</span>
              <span className="circle">
                <StaticImage
                  alt="circle"
                  src="../../images/customer-support/arrow_right_up.svg"
                />
              </span>
            </a>
          </div>
          <div className="right_clipart"></div>
        </div>
        <div className="dot_shape">
          <StaticImage
            alt="wave-shape"
            src="../../images/customer-support/wave_shape.svg"
          />
        </div>
      </section>

      <section className="quick_links">
        <div className="container">
          <ul className="links_list">
            <li>
              <span className="circle orange">
                <StaticImage
                  alt="ticket_icon"
                  src="../../images/customer-support/ticket_icon.svg"
                />
              </span>
              <h3>Support Tickets</h3>
            </li>
            <li>
              <span className="circle pink">
                <StaticImage
                  alt="chat-icon"
                  src="../../images/customer-support/chat_icon.svg"
                />
              </span>
              <h3>24/7 Live Chat</h3>
            </li>
            <li>
              <span className="circle blue">
                <StaticImage
                  alt="book_icon"
                  src="../../images/customer-support/book_icon.svg"
                />
              </span>
              <h3>Knowledge Base</h3>
            </li>
          </ul>
        </div>
      </section>

      <section className="exceptional_support">
        <div className="container">
          <div className="left_conent">
            <h2>
              Exceptional <br />
              Customer Support at
              <br /> Your Fingertips
            </h2>
            <p>
              Your time is critical, which is why the Easy Slot Booking support
              goes beyond their normal duties to ensure any problem you have is
              solved instantly.
            </p>
          </div>
          <div className="right_content">
            <div className="content_card">
              <span className="icon">
                <StaticImage
                  alt="extendd-team"
                  src="../../images/customer-support/extendd-team-icon.svg"
                />
              </span>
              <h5>Extended Teams</h5>
              <p>
                The Easy Slot Booking support works as your extended team,
                available any time to make sure your business is running
                smoothly at all times. Our team always available to support
                clients for any kind of assistance.
              </p>
            </div>

            <div className="content_card">
              <span className="icon">
                <StaticImage
                  alt="clock-icon"
                  src="../../images/customer-support/clock-icon.svg"
                />
              </span>
              <h5>24/7 Monitoring</h5>
              <p>
                The Easy Slot Booking support works as your extended team,
                available any time to make sure your business is running
                smoothly at all times. Our team always available to support
                clients for any kind of assistance.
              </p>
            </div>

            <div className="content_card mt-5">
              <span className="icon">
                <StaticImage
                  alt="bulb"
                  src="../../images/customer-support/bulb-icon.svg"
                />
              </span>
              <h5>Quick Problem Resolution</h5>
              <p>
                The Easy Slot Booking support works as your extended team,
                available any time to make sure your business is running
                smoothly at all times. Our team always available to support
                clients for any kind of assistance.
              </p>
            </div>

            <div className="content_card mt-5">
              <span className="icon">
                <StaticImage
                  alt="tick-badge"
                  width={40}
                  src="../../images/customer-support/tick-badge-icon.svg"
                />
              </span>
              <h5>Talented Professionals</h5>
              <p>
                The Easy Slot Booking support works as your extended team,
                available any time to make sure your business is running
                smoothly at all times. Our team always available to support
                clients for any kind of assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="support_testimonial">
        <div className="container">
          <div className="testi_content">
            <span>
              “The support team responds very quickly and has always gone above
              and beyond to resolve issues or questions. Easy Slot Booking is
              always my number one recommendation.”
            </span>
            <Swiper
              // style={{
              //   display: 'flex',
              //   justifyContent: 'space-between',
              //   margin: '0 auto',
              //   padding: '0 20px',
              //   width: '100%',
              // }}
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              // spaceBetween={18}
              slidesPerView={1}
              loop={true}
              // breakpoints={{
              //   320: { slidesPerView: 1, spaceBetween: 10 },
              //   480: { slidesPerView: 1, spaceBetween: 15 },
              //   640: { slidesPerView: 2, spaceBetween: 15 },
              //   768: { slidesPerView: 2, spaceBetween: 20 },
              //   1024: { slidesPerView: 3, spaceBetween: 18 },
              // }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
                el: '.custom-pagination',
              }}
              className="swiper-wrapper"
            >
              <SwiperSlide>
                <div className="user_info" >
                  <span className="user_img">
                    <StaticImage
                      alt="user-img"
                      src="../../images/customer-support/user-img-1.png"
                    />
                  </span>
                  <div className="user_details">
                    <h6>Vikram Solanki</h6>
                    <span>Got USA Visa for higher studies </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="user_info">
                  <span className="user_img">
                    <StaticImage
                      alt="user-img"
                      src="../../images/customer-support/user-img-1.png"
                    />
                  </span>
                  <div className="user_details">
                    <h6>Vikram Solanki</h6>
                    <span>Got USA Visa for higher studies </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="user_info">
                  <span className="user_img">
                    <StaticImage
                      alt="user-img"
                      src="../../images/customer-support/user-img-1.png"
                    />
                  </span>
                  <div className="user_details">
                    <h6>Vikram Solanki</h6>
                    <span>Got USA Visa for higher studies </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="user_info">
                  <span className="user_img">
                    <StaticImage
                      alt="user-img"
                      src="../../images/customer-support/user-img-1.png"
                    />
                  </span>
                  <div className="user_details">
                    <h6>Vikram Solanki</h6>
                    <span>Got USA Visa for higher studies </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="user_info">
                  <span className="user_img">
                    <StaticImage
                      alt="user-img"
                      src="../../images/customer-support/user-img-1.png"
                    />
                  </span>
                  <div className="user_details">
                    <h6>Vikram Solanki</h6>
                    <span>Got USA Visa for higher studies </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="user_info">
                  <span className="user_img">
                    <StaticImage
                      alt="user-img"
                      src="../../images/customer-support/user-img-1.png"
                    />
                  </span>
                  <div className="user_details">
                    <h6>Vikram Solanki</h6>
                    <span>Got USA Visa for higher studies </span>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            {/* <div className="user_info">
              <span className="user_img">
                <StaticImage
                  alt="user-img"
                  src="../../images/customer-support/user-img-1.png"
                />
              </span>
              <div className="user_details">
                <h6>Vikram Solanki</h6>
                <span>Got USA Visa for higher studies </span>
              </div>
            </div>
            <div className="slider_dots">
              <ul>
                <li>
                  <a href="#" className="dot"></a>
                </li>
                <li>
                  <a href="#" className="dot active"></a>
                </li>
                <li>
                  <a href="#" className="dot"></a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </section>

      <section className="problem_solved">
        <div className="container">
          <h1>Problem? Solved.</h1>
          <p>
            Your time is critical, which is why the Easy Slot Booking support
            goes beyond their normal duties to ensure any problem you have is
            solved instantly.
          </p>

          <div className="content_wrapper">
            <div className="card">
              <h2>Extended Teams</h2>
              <p>
                The Easy Slot Booking support works as your extended team,
                available any time to make sure your business is running
                smoothly at all times.
              </p>
              <span className="card_clipart">
                <StaticImage
                  alt="card-img"
                  src="../../images/customer-support/card-img-1.svg"
                />
              </span>
            </div>

            <div className="card">
              <h2>24/7 Monitoring</h2>
              <p>
                Your server is being monitored in real-time 24/7/365 and you get
                to see over 16 different metrics from the comfort of the
                console.
              </p>
              <span className="card_clipart">
                <StaticImage
                  alt="card-img"
                  src="../../images/customer-support/card-img-2.svg"
                />
              </span>
            </div>

            <div className="card">
              <h2>Quick Problem Resolution</h2>
              <p>
                With 90 seconds average response time, and industry leading 95%
                CSAT, your problems are solved before they impact your business.
              </p>
              <span className="card_clipart">
                <StaticImage
                  alt="clipart"
                  src="../../images/customer-support/card-img-3.svg"
                />
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="gradient_divider"></section>
    </main>
  );
}
