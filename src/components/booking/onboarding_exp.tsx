import React from 'react';

export default function OnboardingExp() {
  return (
    <section className="onboarding_exp">
      <div className="container">
        <div className="d-flex orange_arrow" />
        <div className="row no-margin">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="onboarding_form d-flex px-3">
              <h2 className="d-block">
                Build amazing customer onboarding experiences
              </h2>
              <span className="d-block">
                Boost engagement, spark human connection, and make new
                <br />
                hires feel welcomed, wheather they're in-house or remote!
              </span>
              <span className="curve_shape d-flex my-4" />
              <div className="d-flex free_demo_form py-4 px-5">
                <h6 className="d-block">
                  It only take 60 seconds to <br />
                  <span>get a Free demo!</span>
                </h6>
                <form className="d-flex" name="onboarding">
                  <div className="mb-2 mt-2 full-width">
                    <label htmlFor="full_name" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="full_name"
                      aria-describedby="full_name"
                    />
                    {/*<div id="emailHelp" class="form-text d-flex error">We'll never share your email with anyone else.</div>*/}
                  </div>
                  <div className="mb-2 mt-2 full-width">
                    <label htmlFor="contact_number" className="form-label">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="contact_number"
                      aria-describedby="contact_number"
                    />
                    {/*<div id="emailHelp" class="form-text d-flex error">We'll never share your email with anyone else.</div>*/}
                  </div>
                  <div className="mt-3 full-width btn-container">
                    <button type="submit" className="btn default_btn primary">
                      Write Us
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="onboarding_bg" />
          </div>
        </div>
      </div>
    </section>
  );
}
