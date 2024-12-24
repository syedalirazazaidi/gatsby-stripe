import React from 'react';

const testimonials = [
  {
    id: 1,
    content:
      'Life saver for everyone looking to book visa appointment. I have been trying to get a slot for the last two months and could not get one. After using Easy slot booking for a few days I got my slot.',
    image: '/testimonial/testi-user-1.png',
    name: 'Jamie Knop',
    username: '@JamieKnop',
  },
  {
    id: 2,
    content:
      'Life saver for everyone looking to book visa appointment. I have been trying to get a slot for the last two months and could not get one. After using Easy slot booking for a few days I got my slot.',
    image: '/testimonial/testi-user-1.png',
    name: 'Jamie Knop',
    username: '@JamieKnop',
  },
  {
    id: 3,
    content:
      'Life saver for everyone looking to book visa appointment. I have been trying to get a slot for the last two months and could not get one. After using Easy slot booking for a few days I got my slot.',
    image: '/testimonial/testi-user-1.png',
    name: 'Jamie Knop',
    username: '@JamieKnop',
  },
  {
    id: 4,
    content:
      'Life saver for everyone looking to book visa appointment. I have been trying to get a slot for the last two months and could not get one. After using Easy slot booking for a few days I got my slot.',
    image: '/testimonial/testi-user-1.png',
    name: 'Jamie Knop',
    username: '@JamieKnop',
  },
];

export default function TestimonialSection() {
  const sliderRef = React.useRef(null);

  React.useEffect(() => {
    const slider: any = sliderRef.current;

    if (!slider) return;

    let position = 0;
    const speed = 5;
    const step = () => {
      position += speed;
      slider.style.transform = `translateX(${position}px)`;

      if (position >= slider.scrollWidth / 2) {
        position = 0;
      }

      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, []);
  return (
    <section className="dualSliderTestiSec py-4">
      <div className="container-fluid">
        <div className="row no-margin">
          <div className="col-12">
            <h6 className="section_heading_center d-flex">Testimonials</h6>
            <h2 className="d-flex">Here's Why Our Customers Love Us</h2>
            <p className="d-flex">
              From 24/7 support that acts as your extended team to incredibly
              fast website performance, there are plenty of reasons why <br />
              our users keep recommending us!
            </p>
          </div>
        </div>
      </div>
      <div className="row no-margin mt-4">
        <div className="col-12">
          <div className="testimonials_container d-flex">
            <div className="testimonial_firstWrap">
              <div id="first_slider">
                <div className="slider_wrap">
                  <div className="testimonial_cardwrap">
                    <div className="testimonial_card_content">
                      <p>
                        Life saver for everyone looking to book visa
                        appointment. I have been trying to get a slot for the
                        last two months and could not get one. After using Easy
                        slot booking for a few days I got my slot.
                      </p>
                    </div>
                    <div className="testicard_bottom_wrap">
                      <div className="testimonial_user_wrap">
                        <div className="left">
                          <div className="user_img_wrap">
                            <img
                              src="/testimonial/testi-user-1.png"
                              alt="User"
                              title="User"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="user_info_wrap">
                        <h5>Jamie Knop</h5>
                        <p>@JamieKnop</p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial_cardwrap">
                    <div className="testimonial_card_content">
                      <p>
                        Life saver for everyone looking to book visa
                        appointment. I have been trying to get a slot for the
                        last two months and could not get one. After using Easy
                        slot booking for a few days I got my slot.
                      </p>
                    </div>
                    <div className="testicard_bottom_wrap">
                      <div className="testimonial_user_wrap">
                        <div className="left">
                          <div className="user_img_wrap">
                            <img
                              src="/testimonial/testi-user-1.png"
                              alt="User"
                              title="User"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="user_info_wrap">
                        <h5>Jamie Knop</h5>
                        <p>@JamieKnop</p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial_cardwrap">
                    <div className="testimonial_card_content">
                      <p>
                        Life saver for everyone looking to book visa
                        appointment. I have been trying to get a slot for the
                        last two months and could not get one. After using Easy
                        slot booking for a few days I got my slot.
                      </p>
                    </div>
                    <div className="testicard_bottom_wrap">
                      <div className="testimonial_user_wrap">
                        <div className="left">
                          <div className="user_img_wrap">
                            <img
                              src="/testimonial/testi-user-1.png"
                              alt="User"
                              title="User"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="user_info_wrap">
                        <h5>Jamie Knop</h5>
                        <p>@JamieKnop</p>
                      </div>
                    </div>
                  </div>

                  <div className="testimonial_cardwrap">
                    <div className="testimonial_card_content">
                      <p>
                        Life saver for everyone looking to book visa
                        appointment. I have been trying to get a slot for the
                        last two months and could not get one. After using Easy
                        slot booking for a few days I got my slot.
                      </p>
                    </div>
                    <div className="testicard_bottom_wrap">
                      <div className="testimonial_user_wrap">
                        <div className="left">
                          <div className="user_img_wrap">
                            <img
                              src="/testimonial/testi-user-1.png"
                              alt="User"
                              title="User"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="user_info_wrap">
                        <h5>Jamie Knop</h5>
                        <p>@JamieKnop</p>
                      </div>
                    </div>
                  </div>

                  <div className="testimonial_cardwrap">
                    <div className="testimonial_card_content">
                      <p>
                        Life saver for everyone looking to book visa
                        appointment. I have been trying to get a slot for the
                        last two months and could not get one. After using Easy
                        slot booking for a few days I got my slot.
                      </p>
                    </div>
                    <div className="testicard_bottom_wrap">
                      <div className="testimonial_user_wrap">
                        <div className="left">
                          <div className="user_img_wrap">
                            <img
                              src="/testimonial/testi-user-1.png"
                              alt="user"
                              title="User"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="user_info_wrap">
                        <h5>Jamie Knop</h5>
                        <p>@JamieKnop</p>
                      </div>
                    </div>
                  </div>

                  <div className="testimonial_cardwrap">
                    <div className="testimonial_card_content">
                      <p>
                        Life saver for everyone looking to book visa
                        appointment. I have been trying to get a slot for the
                        last two months and could not get one. After using Easy
                        slot booking for a few days I got my slot.
                      </p>
                    </div>
                    <div className="testicard_bottom_wrap">
                      <div className="testimonial_user_wrap">
                        <div className="left">
                          <div className="user_img_wrap">
                            <img
                              src="/testimonial/testi-user-1.png"
                              alt="User"
                              title="User"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="user_info_wrap">
                        <h5>Jamie Knop</h5>
                        <p>@JamieKnop</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row no-margin">
        <div className="col-12">
          <div className="testimonials_container d-flex">
            <div className="testimonial_secondWrap">
              <div id="second_slider">
                <div className="slider_wrap" ref={sliderRef}>
                  {testimonials
                    .concat(testimonials)
                    .map((testimonial, index) => (
                      <div className="testimonial_cardwrap" key={index}>
                        <div className="testimonial_card_content">
                          <p>{testimonial.content}</p>
                        </div>
                        <div className="testicard_bottom_wrap">
                          <div className="testimonial_user_wrap">
                            <div className="left">
                              <div className="user_img_wrap">
                                <img
                                  src={testimonial.image}
                                  alt={testimonial.name}
                                  title={testimonial.name}
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="user_info_wrap">
                            <h5>{testimonial.name}</h5>
                            <p>{testimonial.username}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
