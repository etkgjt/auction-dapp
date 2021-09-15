// ** React Imports
import React, { Suspense, useContext, lazy, useState, useEffect } from 'react';

/*Store state Redux Saga */
import { useSelector } from 'react-redux';

// ** Custom Components
// import Spinner from '@components/spinner/Loading-spinner' // Uncomment if your require content fallback
import LayoutWrapper from '@layouts/components/layout-wrapper';

// ** Router Components
import { BrowserRouter as AppRouter, Route, Switch } from 'react-router-dom';

// ** Layouts
import BlankLayout from '@layouts/BlankLayout';
import StickyLayout from '@src/layouts/StickyLayout';

import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';

const Router = ({ Routes }) => {
  // ** Hooks
  const { t } = useTranslation();

  const auth = JSON.parse(localStorage.getItem('persist:Auth'));
  let accessToken = auth?.accessToken;
  if (accessToken) {
    accessToken = JSON.parse(accessToken);
  }

  const [defaultRoute, setDefaultRoute] = useState('/');

  useEffect(() => {
    if (!accessToken || accessToken === null) {
      setDefaultRoute('/');
    } else {
      setDefaultRoute('/home');
    }
  }, [JSON.stringify(accessToken)]);

  // ** Default Layout
  const DefaultLayout = 'BlankLayout';

  // ** All of the available layouts
  const Layouts = {
    BlankLayout,
    StickyLayout,
  };

  // ** Current Active Item
  const currentActiveItem = null;

  // ** Return Filtered Array of Routes & Paths
  const LayoutRoutesAndPaths = (layout) => {
    const LayoutRoutes = [];
    const LayoutPaths = [];

    if (Routes) {
      Routes.filter((route) => {
        // ** Checks if Route layout or Default layout matches current layout
        if (
          route.layout === layout ||
          (route.layout === undefined && DefaultLayout === layout)
        ) {
          LayoutRoutes.push(route);
          LayoutPaths.push(route.path);
        }
      });
    }

    return { LayoutRoutes, LayoutPaths };
  };

  const NotAuthorized = lazy(() => import('@src/views/NotAuthorized'));

  // ** Init Error Component
  const Error = lazy(() => import('@src/views/Error'));

  // ** Return Route to Render
  const ResolveRoutes = () => {
    return Object.keys(Layouts).map((layout, index) => {
      const { LayoutRoutes, LayoutPaths } = LayoutRoutesAndPaths(layout);
      const routerProps = {};

      return (
        <Route path={LayoutPaths} key={index}>
          <Switch>
            {LayoutRoutes.map((route) => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  exact={route.exact === true}
                  render={(props) => {
                    // ** Assign props to routerProps
                    Object.assign(routerProps, {
                      ...props,
                      meta: route.meta,
                    });

                    return (
                      <Suspense fallback={null}>
                        {/* Layout Wrapper to add classes based on route's layout, appLayout and className */}
                        <LayoutWrapper
                          layout={DefaultLayout}
                          /* Conditional props */
                          /*eslint-disable */
                          {...(route.appLayout
                            ? {
                                appLayout: route.appLayout,
                              }
                            : {})}
                          {...(route.meta
                            ? {
                                routeMeta: route.meta,
                              }
                            : {})}
                          {...(route.className
                            ? {
                                wrapperClass: route.className,
                              }
                            : {})}
                          /*eslint-enable */
                        >
                          {route.titleI18n || route.title ? (
                            <Helmet>
                              <title>
                                {route.titleI18n
                                  ? t(route.titleI18n)
                                  : route.title}
                              </title>
                            </Helmet>
                          ) : null}
                          <route.component {...props} />
                          {/* <FinalRoute route={route} {...props} /> */}
                        </LayoutWrapper>
                      </Suspense>
                    );
                  }}
                />
              );
            })}
          </Switch>
        </Route>
      );
    });
  };

  return (
    <AppRouter basename={process.env.REACT_APP_BASENAME}>
      <Switch>
        {/* Not Auth Route */}
        <Route
          exact
          path="/not-authorized"
          render={(props) => (
            <Layouts.BlankLayout>
              <NotAuthorized />
            </Layouts.BlankLayout>
          )}
        />
        {ResolveRoutes()}
        {/* NotFound Error page */}
        <Route path="*" component={Error} />/
      </Switch>
    </AppRouter>
  );
};

export default Router;
