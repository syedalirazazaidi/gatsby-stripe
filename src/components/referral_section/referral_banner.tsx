import React from 'react'
import { useLocation } from "@reach/router";
import './referral.scss'
export default function Referralbanner() {
    const location = useLocation();
    
    return (
        <>
        <main className="referral_page">
        <section className="referral_hero negativeZIndex">
            <div className="container">
                <div className="row no-margin">
                    <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 pl_null">
                        <div className="hero_content">
                            <h1>
                                Love using <b>ES Booking</b> and want to <b>refer it to  a friend</b> ?
                            </h1>
                            <a href="#" className="btn start_reeferring">Start Referring</a>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 pr_null">
                        <img src="/referral/refer-baneer-img.svg" alt="" title="" className="referral_bg" />
                    </div>
                </div>
            </div>
        </section>

        <section className="gradient_section">
            <div className="container">
                <div className="reff_white">
                    <div className="reff_content bordered">
                        <div className="icon">
                            <img src="/referral/user-down.svg" alt="" title="" />
                        </div>
                        <div className="content_box">
                            <h2>What do you get ?</h2>
                            <p>
                                You are eligible to receive 15% of your friend's subscription fee as ES Booking Wallet credits
                                for one year, once your friend becomes a paying customer and completes 90 days with ES Booking.
                                You can use these credits to purchase any new ES Booking chrome extension, renew your subscription,
                                add user licenses, purchase add-ons, or upgrade your current subscription to another edition.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="reff_white">
                    <div className="reff_content">
                        <div className="icon">
                            <img src="/referral/user-left.svg" alt="" title="" />
                        </div>
                        <div className="content_box">
                            <h2>What does your referral get ?</h2>
                            <p>
                                Each referral of yours will earn $100 in promotional credits in their ES Booking account after
                                they sign up, which they can use on any purchase of a new ES booking extensions.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="divider"></div>

                <div className="faq_section">
                    <div className="row no-margin full-width">
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 pl_null">
                            <div className="left_tab_content">
                                <h1>Frequently Asked Questions</h1>

                                <ul className="reff_faq_tab">
                                    <li>
                                        <a href="#" className="active">Referrals and Rewards</a>
                                    </li>
                                    <li>
                                        <a href="#">Links and Promotions</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12 pr_null">
                            <div className="faq_container">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                aria-expanded="true" aria-controls="collapseOne">
                                                Who can I refer?
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Rakuten offers cash bonuses to our members for spreading the word about earning Cash
                                                Back. Just send your friend a unique link by text, email or social media. If someone
                                                you refer signs up for Rakuten and makes a qualifying purchase, you can both earn a
                                                reward! The purchase requirement and reward amount can vary, but the most current
                                                promotion can always be found on this page.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                How many rewards can I earn?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Rakuten offers cash bonuses to our members for spreading the word about earning Cash Back.
                                                Just send your friend a unique link by text, email or social media. If someone
                                                you refer signs up for Rakuten and makes a qualifying purchase, you can both
                                                earn a reward! The purchase requirement and reward amount can vary, but the most
                                                current promotion can always be found on this page.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Will I get rewards for all the products that the referred customer goes on to purchase?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Rakuten offers cash bonuses to our members for spreading the word about earning Cash Back.
                                                Just send your friend a unique link by text, email or social media. If someone
                                                you refer signs up for Rakuten and makes a qualifying purchase, you can both
                                                earn a reward! The purchase requirement and reward amount can vary, but the most
                                                current promotion can always be found on this page.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapsezFour">
                                                When will I receive my rewards? What if the customer cancels their subscription?
                                            </button>
                                        </h2>
                                        <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Rakuten offers cash bonuses to our members for spreading the word about earning Cash Back.
                                                Just send your friend a unique link by text, email or social media. If someone
                                                you refer signs up for Rakuten and makes a qualifying purchase, you can both
                                                earn a reward! The purchase requirement and reward amount can vary, but the most
                                                current promotion can always be found on this page.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                What happens if my referral downgrades?
                                            </button>
                                        </h2>
                                        <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Rakuten offers cash bonuses to our members for spreading the word about earning Cash Back.
                                                Just send your friend a unique link by text, email or social media. If someone
                                                you refer signs up for Rakuten and makes a qualifying purchase, you can both
                                                earn a reward! The purchase requirement and reward amount can vary, but the most
                                                current promotion can always be found on this page.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                Will I earn recurring rewards for the referred customer?
                                            </button>
                                        </h2>
                                        <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Rakuten offers cash bonuses to our members for spreading the word about earning Cash Back.
                                                Just send your friend a unique link by text, email or social media. If someone
                                                you refer signs up for Rakuten and makes a qualifying purchase, you can both
                                                earn a reward! The purchase requirement and reward amount can vary, but the most
                                                current promotion can always be found on this page.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                                How can I use the Wallet credits I earn from referring to some one?
                                            </button>
                                        </h2>
                                        <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Rakuten offers cash bonuses to our members for spreading the word about earning Cash Back.
                                                Just send your friend a unique link by text, email or social media. If someone
                                                you refer signs up for Rakuten and makes a qualifying purchase, you can both
                                                earn a reward! The purchase requirement and reward amount can vary, but the most
                                                current promotion can always be found on this page.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                                Is there a minimum sales requirement?
                                            </button>
                                        </h2>
                                        <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Rakuten offers cash bonuses to our members for spreading the word about earning Cash Back.
                                                Just send your friend a unique link by text, email or social media. If someone
                                                you refer signs up for Rakuten and makes a qualifying purchase, you can both
                                                earn a reward! The purchase requirement and reward amount can vary, but the most
                                                current promotion can always be found on this page.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                                Can we withdraw the credit as cash?
                                            </button>
                                        </h2>
                                        <div id="collapseNine" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Rakuten offers cash bonuses to our members for spreading the word about earning Cash Back.
                                                Just send your friend a unique link by text, email or social media. If someone
                                                you refer signs up for Rakuten and makes a qualifying purchase, you can both
                                                earn a reward! The purchase requirement and reward amount can vary, but the most
                                                current promotion can always be found on this page.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                                Is there an expiration date to use the Wallet credits earned from a qualified referral?
                                            </button>
                                        </h2>
                                        <div id="collapseTen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Rakuten offers cash bonuses to our members for spreading the word about earning Cash Back.
                                                Just send your friend a unique link by text, email or social media. If someone
                                                you refer signs up for Rakuten and makes a qualifying purchase, you can both
                                                earn a reward! The purchase requirement and reward amount can vary, but the most
                                                current promotion can always be found on this page.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                                                How do I track my earnings?
                                            </button>
                                        </h2>
                                        <div id="collapseEleven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Rakuten offers cash bonuses to our members for spreading the word about earning Cash Back.
                                                Just send your friend a unique link by text, email or social media. If someone
                                                you refer signs up for Rakuten and makes a qualifying purchase, you can both
                                                earn a reward! The purchase requirement and reward amount can vary, but the most
                                                current promotion can always be found on this page.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <footer className="footer_sceond">
        <div className="white_container">
            <div className="abstract_shape_left">
                <img src="/referral/sml-foot-shape.svg" alt="" title="" />
            </div>

            <div className="abstract_shape_right">
                <img src="/referral/foot-round-shape.svg" alt="" title="" />
            </div>

            <div className="container">
                <div className="subscribe_newsletter">
                    <div className="row no-margin full-width">
                        <div className="col-xxl-6 xol-xl-6 col-lg-6 col-md-12 col-sm-12 pl_null">
                            <div className="left_content">
                                <h5>Subscribe to our newsletter</h5>
                                <span>Stay up to date with the latest news, announcements and articles. No spam.</span>
                            </div>
                        </div>
                        <div className="col-xxl-6 xol-xl-6 col-lg-6 col-md-12 col-sm-12 pr_null">
                            <div className="right_content">
                                <form className="row g-3">
                                    <div className="col-auto">
                                        <input type="email" className="form-control" id="" placeholder="Enter your email"/>
                                    </div>
                                    <div className="col-auto">
                                        <button type="submit" className="btn primary default_btn">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="gradient_divider"></div>

                <div className="copyright_content">
                    <span>Copyright &copy; 2023 - 2024 ES Booking. All rights reserved.</span>
                    <ul className="foot_menus">
                        <li><a href="#">Privacy</a></li>
                        <li><span className="pipe_sign">|</span></li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><span className="pipe_sign">|</span></li>
                        <li><a href="#">Cookie preferences</a></li>
                        <li><span className="pipe_sign">|</span></li>
                        <li><span>Do not sell or share any personal information</span></li>
                    </ul>

                    <div id="select_country">
                        <button className="btn btn-secondary choose_region" role="button">
                            <i className="fa fa-globe"></i>
                            <span>Choose Region</span>
                        </button>
                    </div>
                </div>

                <div className="bottom_msg">
                    Easy Slot Booking is not affiliated, associated, authorized, or endorsed by the US Government or any of its subsidiaries.
                </div>
            </div>
        </div>
    </footer>
    </>
    )
}
