import React, { lazy, useEffect, useState } from 'react';
/*Store state Redux Saga */
import { useDispatch, useSelector } from 'react-redux';

// ** Toast & ThemeColors Context
import { ToastContainer } from 'react-toastify';
import { ThemeContext } from './utility/context/ThemeColors';
import LoadingModal from '@components/LoadingModal';
import BackdropPressable from '@components/BackdropPressable';

//** Load App
const LazyApp = lazy(() => import('./App'));
import FireBaseSetup from './Firebase/setup';
// import ModalRequireLogout from './views/ModalRequireLogout';
import ModalLogout from './views/ModalLogout';

const InitApp = ({ DefaultRoute, listRoutes, listNav }) => {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const setupInitApp = async () => {
      await FireBaseSetup.initApi();
      setLoaded(true);
    };
    setupInitApp().then();
  }, []);

  return (
    <ThemeContext>
      <LazyApp DefaultRoute={DefaultRoute} Routes={listRoutes} Nav={listNav} />
      <LoadingModal />
      {/* <ModalRequireLogout /> */}
      <ModalLogout />
      <BackdropPressable />
      <ToastContainer
        position="top-right"
        autoClose={50000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </ThemeContext>
  );
};
export default InitApp;
