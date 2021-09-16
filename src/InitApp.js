import React, { lazy, useEffect, useState } from 'react';
/*Store state Redux Saga */
import { useDispatch } from 'react-redux';

//** Load App
const LazyApp = lazy(() => import('./App'));

const InitApp = ({ DefaultRoute, listRoutes, listNav }) => {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const setupInitApp = async () => {
      setLoaded(true);
    };
    setupInitApp().then();
  }, []);

  console.log('route', listRoutes);

  return (
      <LazyApp DefaultRoute={DefaultRoute} Routes={listRoutes} Nav={listNav} />
  );
};
export default InitApp;
