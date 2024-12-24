import React, { useEffect, useRef, useState } from 'react';

// import MenuContainer from '../MenuContainer'
import { FaBars, FaChevronRight } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';

// import MenuContainer from "../MenuContainer.tsx";
 import './navbar.css';
// import './navbar.scss';
import { StaticImage } from 'gatsby-plugin-image';
import MenuContainer from '../MenuContainer';
import { Link } from 'gatsby';
type NavOption =
  | 'features'
  | 'pricing'
  | 'affiliate'
  | 'support'
  | 'learn'
  | 'contact'
  | 'download';

const Navbar = () => {
  const [selectedNavOption, setSelectedNavOption] = useState<NavOption | null>(
    null
  );
  const [selectedNavOptionPosition, setSelectedNavOptionPosition] = useState<{
    x: number;
  }>({ x: 0 });

  const features = useRef<HTMLParagraphElement>(null);
  const pricing = useRef<HTMLParagraphElement>(null);
  const download = useRef<HTMLParagraphElement>(null);
  const affiliate = useRef<HTMLParagraphElement>(null);
  const support = useRef<HTMLParagraphElement>(null);
  const learn = useRef<HTMLParagraphElement>(null);
  const contact = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const resizeHandler = () => {
      if (selectedNavOption !== null || selectedNavOptionPosition.x !== 0) {
        setSelectedNavOptionPosition({ x: 0 });
        setSelectedNavOption(null);
      }
    };
    document.addEventListener('resize', resizeHandler);

    return () => document.removeEventListener('resize', resizeHandler);
  }, [selectedNavOption, selectedNavOptionPosition.x]);

  const onNavOptionHover = (navItemId: NavOption) => {
    if (selectedNavOption === navItemId) return;

    let navOptionScreenPosition: ClientRect;

    switch (navItemId) {
      case 'features':
        if (features === null || features.current === null) return;
        navOptionScreenPosition = features.current.getBoundingClientRect();
        break;
      case 'pricing':
        if (pricing === null || pricing.current === null) return;
        navOptionScreenPosition = pricing.current.getBoundingClientRect();
        break;
      case 'download':
        if (download === null || download.current === null) return;
        navOptionScreenPosition = download.current.getBoundingClientRect();
        break;
      case 'affiliate':
        if (affiliate === null || affiliate.current === null) return;
        navOptionScreenPosition = affiliate.current.getBoundingClientRect();
        break;

      case 'support':
        if (support === null || support.current === null) return;
        navOptionScreenPosition = support.current.getBoundingClientRect();
        break;

      case 'learn':
        if (learn === null || learn.current === null) return;
        navOptionScreenPosition = learn.current.getBoundingClientRect();
        break;

      case 'contact':
        if (contact === null || contact.current === null) return;
        navOptionScreenPosition = contact.current.getBoundingClientRect();
        break;
      default:
        return;
    }

    setSelectedNavOptionPosition({
      x: navOptionScreenPosition.left + navOptionScreenPosition.width / 2,
    });
    setSelectedNavOption(navItemId);
  };

  const onMouseLeave = () => {
    setSelectedNavOption(null);
    setSelectedNavOptionPosition({ x: 0 });
  };

  const onNavOptionClicked = (navItemId: NavOption) => {
    selectedNavOption !== null ? onMouseLeave() : onNavOptionHover(navItemId);
  };
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const toggleSheet = () => {
    setIsSheetOpen(!isSheetOpen);
    if (!isSheetOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  };
  const [isSheetOpenLinks, setIsisSheetOpenLinks] = useState(false);

  const handleOpenSheet = () => {
    setIsisSheetOpenLinks(true);
  };

  const handleCloseSheet = () => {
    setIsisSheetOpenLinks(false);
  };

  return (
    <header className="header">
      <div className="header_css_container">
        <div>
          <Link to="/">
            <StaticImage
              src="./navbar-icn.svg"
              alt="logo"
              title="navbar"
              layout="constrained"
              style={{ width: '150px' }}
            />
          </Link>
        </div>
        <div className="mobileview">
          <FaBars onClick={toggleSheet} />
        </div>
        {isSheetOpen && (
          <div className="sheet-overlay" onClick={toggleSheet}>
            <div className="sheet-content" onClick={e => e.stopPropagation()}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Link to="/">
                  <StaticImage
                    src="./navbar-icn.svg"
                    alt="logo"
                    title="Instagram"
                    layout="constrained"
                    style={{ width: '150px' }}
                  />
                </Link>
                <div className="mobileview">
                  <FaXmark onClick={toggleSheet} />
                </div>
              </div>
              <div style={{ paddingTop: 60 }}>
                <div className="link-container">
                  <Link to="/" onClick={handleOpenSheet}>
                    <span>Features</span>
                    <FaChevronRight className="arrow-icon" />
                  </Link>
                </div>
                <div className="link-container">
                  <Link to="/about">
                    <span>Pricing</span>
                    <FaChevronRight className="arrow-icon" />
                  </Link>
                </div>
                <div className="link-container">
                  <Link to="/contact">
                    <span>Downloads</span>
                    <FaChevronRight className="arrow-icon" />
                  </Link>
                </div>
                <div className="link-container">
                  <Link to="/contact">
                    <span>Affiliate</span>
                    <FaChevronRight className="arrow-icon" />
                  </Link>
                </div>
                <div className="link-container">
                  <Link to="/contact">
                    <span>Support</span>
                    <FaChevronRight className="arrow-icon" />
                  </Link>
                </div>
                <div className="link-container">
                  <Link to="/contact">
                    <span>Learn</span>
                    <FaChevronRight className="arrow-icon" />
                  </Link>
                  {isSheetOpenLinks && (
                    <SlidingSheet onClose={handleCloseSheet} />
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        <div onMouseLeave={onMouseLeave} className="navigationWrapper">
          <nav className="navigationItems">
            <button
              onMouseEnter={() => onNavOptionHover('features')}
              onClick={() => onNavOptionClicked('features')}
              onFocus={() => onNavOptionHover('features')}
              onTouchStart={() => onNavOptionClicked('features')}
            >
              <Link to="/features">
                {' '}
                <p
                  ref={features}
                  style={{ fontSize: 14, color: 'black', fontWeight: 600 }}
                >
                  Features
                </p>
              </Link>
            </button>

            <button
              onMouseEnter={() => onNavOptionHover('pricing')}
              onClick={() => onNavOptionClicked('pricing')}
              onFocus={() => onNavOptionHover('pricing')}
              onTouchStart={() => onNavOptionClicked('pricing')}
            >
              <Link to="/pricing">
                {' '}
                <p
                  ref={pricing}
                  style={{ fontSize: 14, color: 'black', fontWeight: 600 }}
                >
                  Pricing
                </p>
              </Link>
            </button>

            <button
              onMouseEnter={() => onNavOptionHover('download')}
              onClick={() => onNavOptionClicked('download')}
              onFocus={() => onNavOptionHover('download')}
              onTouchStart={() => onNavOptionClicked('download')}
            >
              <Link to="/download" style={{ marginTop: 3 }}>
                {' '}
                <p
                  ref={download}
                  style={{ fontSize: 14, color: 'black', fontWeight: 600 }}
                >
                  Downloads
                </p>
              </Link>
            </button>

            <button
              onMouseEnter={() => onNavOptionHover('affiliate')}
              onClick={() => onNavOptionClicked('affiliate')}
              onFocus={() => onNavOptionHover('affiliate')}
              onTouchStart={() => onNavOptionClicked('affiliate')}
            >
              {' '}
              <Link to="/affiliate">
                <p
                  ref={affiliate}
                  style={{ fontSize: 14, color: 'black', fontWeight: 600 }}
                >
                  Affiliate
                </p>
              </Link>
            </button>
            <button
              onMouseEnter={() => onNavOptionHover('support')}
              onClick={() => onNavOptionClicked('support')}
              onFocus={() => onNavOptionHover('support')}
              onTouchStart={() => onNavOptionClicked('support')}
            >
              <Link to="/customer-support">
                <p
                  ref={support}
                  style={{ fontSize: 14, color: 'black', fontWeight: 600 }}
                >
                  Support
                </p>
              </Link>
            </button>

            <button
              onMouseEnter={() => onNavOptionHover('learn')}
              onClick={() => onNavOptionClicked('learn')}
              onFocus={() => onNavOptionHover('learn')}
              onTouchStart={() => onNavOptionClicked('learn')}
            >
              <Link to="/learn">
                <p
                  ref={learn}
                  style={{ fontSize: 14, color: 'black', fontWeight: 600 }}
                >
                  Learn
                </p>
              </Link>
            </button>
            <p>|</p>
            <button
              onMouseEnter={() => onNavOptionHover('contact')}
              onClick={() => onNavOptionClicked('contact')}
              onFocus={() => onNavOptionHover('contact')}
              onTouchStart={() => onNavOptionClicked('contact')}
            >
              <Link to="/contact-sales">
                <p
                  ref={contact}
                  style={{
                    fontSize: 14,
                    color: 'black',
                    width: 100,
                    fontWeight: 600,
                  }}
                >
                  Contact Sale
                </p>
              </Link>
            </button>

            <div>
              <button
                style={{
                  backgroundColor: '#0B0016',
                  whiteSpace: 'nowrap',
                  borderRadius: 18,
                  border: 'none',
                  color: '#F9F9FA',
                  marginBottom: 15,
                  fontSize: 14,
                  padding: '7px 12px',
                  fontWeight: 600,
                }}
              >
                Join Now
              </button>
            </div>
          </nav>
          <MenuContainer
            selectedNavOption={selectedNavOption}
            selectedNavOptionPosition={selectedNavOptionPosition}
          />
        </div>
      </div>
    </header>
  );
};

const SlidingSheet = ({ onClose }: any) => {
  return (
    <div className="sliding-sheet">
      <button className="close-button">
        <FaXmark onClick={onClose} />
      </button>
      <div className="sheet-content">
        <h1>Sheet Content</h1>
        <p>This is the content inside the sliding sheet.</p>
      </div>
    </div>
  );
};
export default Navbar;
