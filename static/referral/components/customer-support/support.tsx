import React from 'react'
import { StaticImage } from 'gatsby-plugin-image';

export default function CustomerSupport() {
    return (
       <>
        <main className="customer_support">
         <section className="support_hero">
            <div className="dot_shape">
            <StaticImage
                      src="../../images/customer-support/dot-shape.svg"
                      alt="tick-icon"
                      title="tick-icon"
                      className="d-inline-block align-text-top img-fluid"
                      layout="fixed"
                    />{' '}
                {/* <img src="../assets/images/customer-support/dot-shape.svg" /> */}
            </div>
            <div className="container">
                <div className="left_content">
                    <div className="label">Customer Support</div>
                    <h1>EasySlot Booking Support. Works as your Extended team.</h1>
                    <p>
                        With web app name, your support agents have the information they need to provide fast,
                        effective support to your customers. Bye bye waiting and frustration, Get peace of mind 
                        with our 30 Minutes response guarantee.
                    </p>
                    <a href="#" className="free_trial">
                        <span className="text">Start Free Trial</span>
                        <span className="circle"></span>
                    </a>
                </div>
                <div className="right_clipart"></div>
            </div>
            <div className="dot_shape">
            <StaticImage
                      src="../../images/customer-support/wave_shape.svg"
                      alt="tick-icon"
                      title="tick-icon"
                      className="d-inline-block align-text-top img-fluid"
                      layout="fixed"
                    />{' '}
                {/* <img src="../assets/images/customer-support/wave_shape.svg" /> */}
            </div>
         </section>
          
        <section className="gradient_divider">
        </section>

    </main>
    </>
    )
}
