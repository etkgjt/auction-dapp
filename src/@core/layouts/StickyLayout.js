// ** React Imports
import { useState, useEffect } from 'react';

// ** Configs
import Navbar from './components/navbar';
import Footer from './components/footer';

const StickyLayout = (props) => {
  // ** Props
  const { children, navbar, footer, menu, currentActiveItem, routerProps } =
    props;

  // ** States
  const [isMounted, setIsMounted] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(false);

  const cleanup = () => {
    setIsMounted(false);
    setNavbarScrolled(false);
  };

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
    <div>
      <Navbar currentActiveItem={currentActiveItem} routerProps={routerProps} />
      {children}
      <Footer />
    </div>
  );
};
export default StickyLayout;
