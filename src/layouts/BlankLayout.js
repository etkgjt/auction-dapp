// ** React Imports
import { useEffect, useState } from 'react';
import Navbar from '@layouts/components/navbar';
import Footer from '@layouts/components/footer';

const BlankLayout = ({ children, ...rest }) => {

  // ** States
  const [isMounted, setIsMounted] = useState(false);

  //** ComponentDidMount
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="blank-page">
      <div className="app-content content">
        <div className="content-wrapper">
          <div className="content-header">
            <Navbar />
          </div>
          <div className="content-body">{children}</div>
          <div className="content-footer">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlankLayout;
