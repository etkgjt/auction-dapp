// ** React Imports
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// ** Third Party Components
import classnames from 'classnames';
import { ArrowUp } from 'react-feather';
import ScrollToTop from 'react-scroll-up';
import { Navbar, NavItem, Button } from 'reactstrap';

// ** Configs
import themeConfig from '@configs/themeConfig';
import FooterComponent from './components/footer';

const StickyLayout = (props) => {
  // ** Props
  const { children, navbar, footer, menu, currentActiveItem, routerProps } =
    props;

  const [navbarScrolled, setNavbarScrolled] = useState(false);

  //** ComponentDidMount
  useEffect(() => {
    setIsMounted(true);
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 65 && navbarScrolled === false) {
        setNavbarScrolled(true);
      }
      if (window.pageYOffset < 65) {
        setNavbarScrolled(false);
      }
    });
    return () => cleanup();
  }, []);

  return (
    <div
      className={classnames(
        `wrapper horizontal-layout horizontal-menu navbar-sticky footer-static menu-expanded`
      )}
    >
      <Navbar
        expand="lg"
        className={classnames(
          `header-navbar-fill navbar-fixed align-items-center navbar-shadow navbar-brand-center`,
          {
            'navbar-scrolled': navbarScrolled,
          }
        )}
      >
        <div className="navbar-container d-flex content">
          <div className="d-flex align-items-center">
            <Link to="/" className="navbar-brand">
              <span className="brand-logo">
                <img src={themeConfig.app.appLogoImage} alt="logo" />
              </span>
            </Link>
          </div>
        </div>
      </Navbar>

      {children}

      <footer className={classnames(`footer-light footer-fixed`)}>
        <FooterComponent footerClasses={footerClasses} />
      </footer>

      {themeConfig.layout.scrollTop === true ? (
        <div className="scroll-to-top">
          <ScrollToTop showUnder={300} style={{ bottom: '5%' }}>
            <Button className="btn-icon" color="primary">
              <ArrowUp size={14} />
            </Button>
          </ScrollToTop>
        </div>
      ) : null}
    </div>
  );
};
export default StickyLayout;
