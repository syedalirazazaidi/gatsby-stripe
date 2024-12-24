import React from 'react';
import HeroSection from './hero_section';
import PartnerSection from './partner_section';
import WhyesBooking from './why_esbooking';
import LandingAboutus from './landing_about_us';
import OurFeatures from './our_features';
import OnboardingExp from './onboarding_exp';
import DownloadComponent from './download_component';
import EmailNewsletter from './email_newsletter';
import LandingChooseus from './landing_choose_us';
import TestimonialSection from './testimonial_section';

export default function Booking() {
  return (
    <div>
      <HeroSection />
      <PartnerSection />
      <WhyesBooking />
      <LandingAboutus />
      <LandingChooseus />
      <OurFeatures />
      <OnboardingExp />
      <TestimonialSection />
      <DownloadComponent />
      <EmailNewsletter />
    </div>
  );
}
