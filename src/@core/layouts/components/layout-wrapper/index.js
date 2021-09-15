// ** React Imports
import { Fragment, useEffect } from 'react';

// ** Third Party Components
import classnames from 'classnames';

// ** Store & Actions
import { useSelector, useDispatch } from 'react-redux';
import {
  handleContentWidth,
  handleMenuCollapsed,
  handleMenuHidden,
} from '@store/layout/actions';

// ** Styles
import 'animate.css/animate.css';

const LayoutWrapper = (props) => {
  // ** Props
  const { layout, children, appLayout, wrapperClass, transition, routeMeta } =
    props;

  // ** Store Vars
  const dispatch = useDispatch();

  //** Vars
  const Tag = layout === 'HorizontalLayout' && !appLayout ? 'div' : Fragment;

  // ** Clean Up Function
  const cleanUp = () => {
    if (routeMeta) {
      if (routeMeta.contentWidth) {
        dispatch(handleContentWidth('full'));
      }
      if (routeMeta.menuCollapsed) {
        dispatch(handleMenuCollapsed(!routeMeta.menuCollapsed));
      }
      if (routeMeta.menuHidden) {
        dispatch(handleMenuHidden(!routeMeta.menuHidden));
      }
    }
  };

  // ** ComponentDidMount
  useEffect(() => {
    if (routeMeta) {
      if (routeMeta.contentWidth) {
        dispatch(handleContentWidth(routeMeta.contentWidth));
      }
      if (routeMeta.menuCollapsed) {
        dispatch(handleMenuCollapsed(routeMeta.menuCollapsed));
      }
      if (routeMeta.menuHidden) {
        dispatch(handleMenuHidden(routeMeta.menuHidden));
      }
    }
    return () => cleanUp();
  }, []);

  return (
    <div
      className={classnames('app-content content overflow-hidden', {
        [wrapperClass]: wrapperClass,
      })}
    >
      <div className="content-overlay"></div>
      <div className="header-navbar-shadow" />
      <div>
        <Tag>{children}</Tag>
      </div>
    </div>
  );
};

export default LayoutWrapper;
