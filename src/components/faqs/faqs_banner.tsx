import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

export default function Faqsbanner() {
    return (
        <main className="faq_page negativeZIndex">
        <section className="faq_hero d-flex">
            <div className="hero_bg">
                <div className="container">
                    <div className="hero_content d-flex">
                        <h2>Find the answers to all of our most frequently asked questions</h2>
                        <h6>Have questions? We're here to help.</h6>
                        <form name="" action="">
                            <div className="input-group">
                                <span className="input-group-text" id="basic-addon1">
                                    <img src="../assets/images/faq/search_icon.svg"/>
                                </span>
                                <input type="search" className="form-control" placeholder="Search whatever query you have" aria-label="searchFaq" aria-describedby="basic-addon1"/>
                            </div>
                        </form>
                        <div className="popular_tags d-flex">
                            <h6>Popular Tags</h6>
                            <ul className="tags_listing">
                                <li><a href="#">Bookings</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Visa Slot</a></li>
                                <li><a href="#">Extension</a></li>
                                <li><a href="#">API</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="faq_categories">
            <div className="container">
                <div className="row no-margin">
                    <div className="col-xl-4 col-md-12 col-sm-12 pl_null">
                        <div className="left_section">
                            <h1>General FAQ'S</h1>
                            <p>
                                Everything you need to know about the product and how it works. Can't find an answers?
                                Please <a href="#">chat to our friendly team</a>.
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-7 offset-xl-1 col-md-12 col-sm-12 pr_null">
                        <div className="accordion_content">
                            <div className="accordion" id="accordionGeneral">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                            aria-expanded="true" aria-controls="collapseOne">
                                            What's Easy slot booking's Refer-A-Friend program?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionGeneral">
                                        <div className="accordion-body">
                                            Rakuten offers cash bonuses to our members for spreading the word about earning Cash Back.
                                            Just send your friend a unique link by text, email or social media. If someone you refer
                                            signs up for Rakuten and makes a qualifying purchase, you can both earn a reward! The
                                            purchase requirement and reward amount can vary, but the most current promotion can always
                                            be found on this page.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            What do my friends need to do?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionGeneral">
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
                                            When will I receive my bonus?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionGeneral">
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
                                            What does an expired referral mean?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionGeneral">
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
                                            What does a pending referral mean?
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionGeneral">
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
                                            What does a pending referral mean?
                                        </button>
                                    </h2>
                                    <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionGeneral">
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
                                            What does an earned referral mean?
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
                                            Why did I receive a different bonus amount than expected?
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
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row no-margin mt-5 pt-4">
                    <div className="col-xl-4 col-md-12 col-sm-12 pl_null">
                        <div className="left_section">
                            <h1>Billing FAQ'S</h1>
                            <p>
                                Everything you need to know about the product and how it works. Can't find an answers?
                                Please <a href="#">chat to our friendly team</a>.
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-7 offset-xl-1 col-md-12 col-sm-12 pr_null">
                        <div className="accordion_content">
                            <div className="accordion" id="accordionGeneral">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                            aria-expanded="true" aria-controls="collapseOne">
                                            What's Easy slot booking's Refer-A-Friend program?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionGeneral">
                                        <div className="accordion-body">
                                            Rakuten offers cash bonuses to our members for spreading the word about earning Cash Back.
                                            Just send your friend a unique link by text, email or social media. If someone you refer
                                            signs up for Rakuten and makes a qualifying purchase, you can both earn a reward! The
                                            purchase requirement and reward amount can vary, but the most current promotion can always
                                            be found on this page.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            What do my friends need to do?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionGeneral">
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
                                            When will I receive my bonus?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionGeneral">
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
                                            What does an expired referral mean?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionGeneral">
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
                                            What does a pending referral mean?
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionGeneral">
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
                                            What does a pending referral mean?
                                        </button>
                                    </h2>
                                    <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionGeneral">
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
                                            What does an earned referral mean?
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
                                            Why did I receive a different bonus amount than expected?
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
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row no-margin mt-5 pt-4">
                    <div className="col-xl-4 col-md-12 col-sm-12 pl_null">
                        <div className="left_section">
                            <h1>Products FAQ'S</h1>
                            <p>
                                Everything you need to know about the product and how it works. Can't find an answers?
                                Please <a href="#">chat to our friendly team</a>.
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-7 offset-xl-1 col-md-12 col-sm-12 pr_null">
                        <div className="accordion_content">
                            <div className="accordion" id="accordionGeneral">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                            aria-expanded="true" aria-controls="collapseOne">
                                            What's Easy slot booking's Refer-A-Friend program?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionGeneral">
                                        <div className="accordion-body">
                                            Rakuten offers cash bonuses to our members for spreading the word about earning Cash Back.
                                            Just send your friend a unique link by text, email or social media. If someone you refer
                                            signs up for Rakuten and makes a qualifying purchase, you can both earn a reward! The
                                            purchase requirement and reward amount can vary, but the most current promotion can always
                                            be found on this page.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            What do my friends need to do?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionGeneral">
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
                                            When will I receive my bonus?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionGeneral">
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
                                            What does an expired referral mean?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionGeneral">
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
                                            What does a pending referral mean?
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionGeneral">
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
                                            What does a pending referral mean?
                                        </button>
                                    </h2>
                                    <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionGeneral">
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
                                            What does an earned referral mean?
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
                                            Why did I receive a different bonus amount than expected?
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
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row no-margin mt-5">
                    <div className="col-12">
                        <div className="write_us">
                            <span>
                                Couldn't find what you are looking for? Write to <br />us at 
                                <a href="mailto:help@easyslotbooking.com">help@easyslotbooking.com</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="get_in_touch">
            <div className="grey_bg">
                <div className="container">
                    <div className="content_touch">
                        <StaticImage src="../../images/common-img/faq-users.png" alt="" title="" />
                        <h5>Still have questions in your mind ?</h5>
                        <span>Can't find the answer you're looking for? Please chat or connect to our friendly support team.</span>
                        <a href="#" className="btn get_in_touch default_btn primary_border">Get in Touch</a>
                    </div>
                </div>
            </div>
        </section>
    </main>
    )
}
