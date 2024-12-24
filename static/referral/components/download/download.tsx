import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import './download.css';
export default function DownloadBanner() {
  return (
    <main className="download_page">
      <section className="download_hero"  >
        <div className="hero_container">
          <div className="hero_content">
            <div className="shape">
              <StaticImage
                src="../../images/download/hero-shape.png"
                alt="hero-shape"
                title="hero-shape"
                className="d-inline-block align-text-top img-fluid"
                layout="fixed"
              />
            </div>
            <div className="content">
              <div className="label">
                <span className="download_icon">
                  <StaticImage
                    src="../../images/download/download-icon.png"
                    alt="hero-shape"
                    title="hero-shape"
                    className="d-inline-block align-text-top img-fluid"
                    layout="fixed"
                  />
                </span>
                Best Services, Delivered Right
              </div>
              <div className="hero_text">
                Download the&nbsp;
                <br />
                <b>best Extension</b>
                <br /> for&nbsp;<b>Visa slot booking</b>
                <br /> services
              </div>
              <p>
                Navigating Visa Complexities for a seamless journey abroad. Visa
                consulting website is crucial to engage and convey the value
                your services offer
              </p>
              <a href="#" className="btn download">
                <span>
                  <StaticImage
                    src="../../images/download/chrome-icon.png"
                    alt="hero-shape"
                    title="hero-shape"
                    className="d-inline-block align-text-top img-fluid"
                    layout="fixed"
                  />
                </span>
                <div className="btn_text">
                  <span className="small">Download from</span>
                  <span className="title">Chrome Web Store</span>
                </div>
              </a>
            </div>
          </div>

          <div className="hero_clipart" >
            <StaticImage
              src="../../images/download/hero-clipart.png"
              alt="hero-clipart"
              title="hero-clipart"
              className="d-inline-block align-text-top img-fluid"
              layout="fixed"
            />
          </div>
        </div>
      </section>

      <section className="browser_listing">
        <div className="container">
          <ul className="extension_listing">
            <li>
              <a href="#">
                <span className="icon">
                  <StaticImage
                    src="../../images/download/mac-icon.svg"
                    alt="mac-icon"
                    title="mac-icon"
                    className="d-inline-block align-text-top img-fluid"
                    layout="fixed"
                  />
                </span>
                <h6>Mac/IOS</h6>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon">
                  <StaticImage
                    src="../../images/download/firefox-icon.svg"
                    alt="mac-icon"
                    title="mac-icon"
                    className="d-inline-block align-text-top img-fluid"
                    layout="fixed"
                  />
                </span>
                <h6>Firefox</h6>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon">
                  <StaticImage
                    src="../../images/download/chrome-icon-active.svg"
                    alt="mac-icon"
                    title="mac-icon"
                    className="d-inline-block align-text-top img-fluid"
                    layout="fixed"
                  />
                </span>
                <h6 className="active">Chrome</h6>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon">
                  <StaticImage
                    src="../../images/download/edge-icon.svg"
                    alt="mac-icon"
                    title="mac-icon"
                    className="d-inline-block align-text-top img-fluid"
                    layout="fixed"
                  />
                </span>
                <h6>Edge</h6>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon">
                  <StaticImage
                    src="../../images/download/android_icon.svg"
                    alt="android_icon"
                    title="android_icon"
                    className="d-inline-block align-text-top img-fluid"
                    layout="fixed"
                  />
                </span>
                <h6>Android</h6>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="why_esb">
        <div className="container">
          <div className="why_esb_content">
            <h1>
              Why ESB Extension is the best for
              <br /> Visa Slot Booking
            </h1>
            <p className="subtitle">
              Explore the whole internet and safeguard your digital life, all
              through the
              <br />
              seamless integration of ESBExtension with your Google Chrome
              Extension.
            </p>

            <div className="content_row">
              <div className="left_clipart">
                <StaticImage
                  src="../../images/download/why-esb-shape1.png"
                  alt="android_icon"
                  title="android_icon"
                  className="d-inline-block align-text-top img-fluid"
                  layout="fixed"
                />
              </div>
              <div className="right_content">
                <h3>What are ESB Extension for Google Chrome</h3>
                <div className="content">
                  <span className="tick_icon">
                    <StaticImage
                      src="../../images/download/tick-icon.svg"
                      alt="tick-icon"
                      title="tick-icon"
                      className="d-inline-block align-text-top img-fluid"
                      layout="fixed"
                    />
                  </span>
                  <p className="why_content">
                    Keeps your design inspirations well-organised and easy to
                    access. By giving you a different IP address ESB Extension
                    helps you bypass region-based censorship, giving you
                    unrestricted access to websites and apps.
                  </p>
                </div>

                <div className="content">
                  <span className="tick_icon">
                    <StaticImage
                      src="../../images/download/tick-icon.svg"
                      alt="tick-icon"
                      title="tick-icon"
                      className="d-inline-block align-text-top img-fluid"
                      layout="fixed"
                    />
                  </span>
                  <p className="why_content">
                    Keeps your design inspirations well-organised and easy to
                    access. By giving you a different IP address ESB Extension
                    helps you bypass region-based censorship, giving you
                    unrestricted access to websites and apps.
                  </p>
                </div>
              </div>
            </div>

            <div className="content_row">
              <div className="right_content">
                <h3>
                  Visa Consulting offers a range of services and expertise to
                  help business
                </h3>
                <div className="content">
                  <span className="tick_icon">
                    <StaticImage
                      src="../../images/download/tick-icon.svg"
                      alt="tick-icon"
                      title="tick-icon"
                      className="d-inline-block align-text-top img-fluid"
                      layout="fixed"
                    />{' '}
                  </span>
                  <p className="why_content">
                    Keeps your design inspirations well-organised and easy to
                    access. By giving you a different IP address ESB Extension
                    helps you bypass region-based censorship, giving you
                    unrestricted access to websites and apps.
                  </p>
                </div>

                <div className="content">
                  <span className="tick_icon">
                    <StaticImage
                      src="../../images/download/tick-icon.svg"
                      alt="tick-icon"
                      title="tick-icon"
                      className="d-inline-block align-text-top img-fluid"
                      layout="fixed"
                    />{' '}
                  </span>
                  <p className="why_content">
                    Keeps your design inspirations well-organised and easy to
                    access. By giving you a different IP address ESB Extension
                    helps you bypass region-based censorship, giving you
                    unrestricted access to websites and apps.
                  </p>
                </div>
              </div>
              <div className="left_clipart">
                <StaticImage
                  src="../../images/download/tick-icon.svg"
                  alt="tick-icon"
                  title="tick-icon"
                  className="d-inline-block align-text-top img-fluid"
                  layout="fixed"
                />{' '}
              </div>
            </div>

            <div className="content_row">
              <div className="left_clipart">
                <StaticImage
                  src="../../images/download/tick-icon.svg"
                  alt="tick-icon"
                  title="tick-icon"
                  className="d-inline-block align-text-top img-fluid"
                  layout="fixed"
                />{' '}
              </div>
              <div className="right_content">
                <h3>
                  Visa Consulting offers a range of services and expertise to
                  help business
                </h3>
                <div className="content">
                  <span className="tick_icon">
                    <StaticImage
                      src="../../images/download/tick-icon.svg"
                      alt="tick-icon"
                      title="tick-icon"
                      className="d-inline-block align-text-top img-fluid"
                      layout="fixed"
                    />
                  </span>
                  <p className="why_content">
                    Keeps your design inspirations well-organised and easy to
                    access. By giving you a different IP address ESB Extension
                    helps you bypass region-based censorship, giving you
                    unrestricted access to websites and apps.
                  </p>
                </div>

                <div className="content">
                  <span className="tick_icon">
                    <StaticImage
                      src="../../images/download/tick-icon.svg"
                      alt="tick-icon"
                      title="tick-icon"
                      className="d-inline-block align-text-top img-fluid"
                      layout="fixed"
                    />{' '}
                  </span>
                  <p className="why_content">
                    Keeps your design inspirations well-organised and easy to
                    access. By giving you a different IP address ESB Extension
                    helps you bypass region-based censorship, giving you
                    unrestricted access to websites and apps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="extension_setup">
        <div className="star_shape"></div>
        <div className="container">
          <div className="setup_content">
            <h1>
              How to set up a ESB Extension on
              <br /> Google Chrome
            </h1>
            <p className="subtitle">
              Follow these three easy steps to add a VPN Chrome extension to
              your browser. For more information,
              <br />
              have a look at our <a href="#">detailed tutorial here</a>.
            </p>

            <div className="contect_container">
              <div className="content_box">
                <h4>01</h4>
                <h5 className="title">Download Extension</h5>
                <p>
                  Download ESB Extension from chrome web store and install it.
                  It comes with useful extra features to improve your browsing
                  experience, like Threat Protection for blocking ads and
                  dangerous links.
                </p>
              </div>
              <div className="divider"></div>
              <div className="content_box">
                <h4>02</h4>
                <h5 className="title">Login account and create profile</h5>
                <p>
                  Download ESB Extension from chrome web store and install it.
                  It comes with useful extra features to improve your browsing
                  experience, like Threat Protection for blocking ads and
                  dangerous links.
                </p>
              </div>
              <div className="divider"></div>
              <div className="content_box">
                <h4>03</h4>
                <h5 className="title">Start searching available dates</h5>
                <p>
                  Download ESB Extension from chrome web store and install it.
                  It comes with useful extra features to improve your browsing
                  experience, like Threat Protection for blocking ads and
                  dangerous links.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gradient_divider"></section>
    </main>
  );
}
