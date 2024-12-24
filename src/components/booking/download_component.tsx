import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import './booking.css';
export default function DownloadComponent() {
    return (
        <section className="download_component">
            <div className="shape">
                <StaticImage
                    src="../../images/landing/download-shape.svg"
                    alt="Download shape"
                    layout="fixed"
                />
            </div>
            <div className="container py-5">
                <div className="download_container">
                    <div className="download_content">
                        <div className="label">Download Extension</div>
                        <div className="heading">
                            We are available for all major <br />
                            browsers.
                            <span>Download now</span> and book your slot.
                        </div>
                        <ul className="features_listing">
                            <li className="features">
                                <div className="number_box">10K</div>
                                <span>Download</span>
                            </li>
                            <li className="features">
                                <div className="number_box">20K</div>
                                <span>Active User</span>
                            </li>
                            <li className="features">
                                <div className="number_box">4.8</div>
                                <span>Rating</span>
                            </li>
                            <li className="shape">
                                <span>
                                    <StaticImage
                                        src="../../images/landing/arrow-shape.svg"
                                        alt="Arrow shape"
                                        layout="fixed"
                                    />
                                </span>
                            </li>
                        </ul>
                        <a href="#" className="download_now">
                            Download Now
                        </a>
                        <div className="notify">
                            <span className="star">*</span>
                            <span className="text">
                                You can download Easyslot Booking extension as per your web
                                browser and operating system.
                            </span>
                        </div>
                    </div>
                    <div className="download_clipart ">
                        <StaticImage
                            src="../../images/landing/download-clipart.svg"
                            alt="Download clipart"
                            layout="fixed"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
