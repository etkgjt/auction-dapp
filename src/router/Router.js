// ** React Imports
import React, { Suspense, useContext, lazy, useState, useEffect } from 'react';

/*Store state Redux Saga */
import { useSelector } from 'react-redux';

// ** Utils
import { useLayout } from '@hooks/useLayout';
import { AbilityContext } from '@src/utility/context/Can';
import { useRouterTransition } from '@hooks/useRouterTransition';

// ** Custom Components
// import Spinner from '@components/spinner/Loading-spinner' // Uncomment if your require content fallback
import LayoutWrapper from '@layouts/components/layout-wrapper';

// ** Router Components
import {
  BrowserRouter as AppRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

// ** Layouts
import BlankLayout from '@layouts/BlankLayout';
import VerticalLayout from '@src/layouts/VerticalLayout';
import HorizontalLayout from '@src/layouts/HorizontalLayout';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';

const Router = ({ Routes }) => {
  // ** Hooks
  const [layout, setLayout] = useLayout();
  const [transition, setTransition] = useRouterTransition();
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

  // ** ACL Ability Context
  const ability = useContext(AbilityContext);

  // ** Default Layout
  const DefaultLayout =
    layout === 'horizontal' ? 'HorizontalLayout' : 'VerticalLayout';

  // ** All of the available layouts
  const Layouts = { BlankLayout, VerticalLayout, HorizontalLayout };

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

  /**
   ** Final Route Component Checks for Login & User Role and then redirects to the route
   */
  const FinalRoute = (props) => {
    const route = props.route;
    let action, resource;

    // ** Assign vars based on route meta
    if (route.meta) {
      action = route.meta.action ? route.meta.action : null;
      resource = route.meta.resource ? route.meta.resource : null;
    }

    if (
      (!accessToken && route.meta === undefined) ||
      (!accessToken &&
        route.meta &&
        !route.meta.authRoute &&
        !route.meta.publicRoute)
    ) {
      /**
       ** If user is not Logged in & route meta is undefined
       ** OR
       ** If user is not Logged in & route.meta.authRoute, !route.meta.publicRoute are undefined
       ** Then redirect user to login
       */

      return <Redirect to="/login" />;
    } else if (route.meta && route.meta.authRoute && accessToken) {
      // ** If route has meta and authRole and user is Logged in then redirect user to home page (DefaultRoute)
      return <Redirect to="/" />;
    } else if (accessToken && !ability.can(action || 'read', resource)) {
      // ** If user is Logged in and doesn't have ability to visit the page redirect the user to Not Authorized
      return <Redirect to="/misc/not-authorized" />;
    } else {
      // ** If none of the above render component
      return <route.component {...props} />;
    }
  };

  // ** Return Route to Render
  const ResolveRoutes = () => {
    return Object.keys(Layouts).map((layout, index) => {
      // ** Convert Layout parameter to Layout Component
      // ? Note: make sure to keep layout and component name equal

      const LayoutTag = Layouts[layout];

      // ** Get Routes and Paths of the Layout
      const { LayoutRoutes, LayoutPaths } = LayoutRoutesAndPaths(layout);

      // ** We have freedom to display different layout for different route
      // ** We have made LayoutTag dynamic based on layout, we can also replace it with the only layout component,
      // ** that we want to implement like VerticalLayout or HorizontalLayout
      // ** We segregated all the routes based on the layouts and Resolved all those routes inside layouts

      // ** RouterProps to pass them to Layouts
      const routerProps = {};

      return (
        <Route path={LayoutPaths} key={index}>
          <LayoutTag
            routerProps={routerProps}
            layout={layout}
            setLayout={setLayout}
            transition={transition}
            setTransition={setTransition}
            currentActiveItem={currentActiveItem}
          >
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
                            transition={transition}
                            setTransition={setTransition}
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
          </LayoutTag>
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
