//  import 'bootstrap/dist/css/bootstrap.min.css';

import './src/styles/global.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './src/scss/features/main_features.scss';
import './src/scss/customer_reviews/customer_reviews.scss';
import './src/scss/pricing/main_pricing.scss';
import './src/scss/utility_responsive/main_responsive.scss';
import './src/scss/downloads/main_download.scss';
import './src/scss/contact_sales/main_contact.scss';
import './src/scss/agency_partner/main_agency.scss';
import './src/scss/about_us/main_aboutus.scss';
import './src/scss/footer/main_footer.scss';
import './src/scss/affiliate/main_affiliate.scss';
import './src/scss/learn/main_learn.scss';
import './src/scss/landing/main.landing.scss';
import './src/scss/customer_supports/customer_support.scss';
import './src/scss/error/main_error.scss';

export const onRouteUpdate = ({ location }) => {
  if (location && typeof window !== 'undefined') {
    window.scrollTo(0, 0);
  }
};
