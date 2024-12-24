import React from 'react';

export default function EmailNewsletter() {
  return (
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
  );
}
