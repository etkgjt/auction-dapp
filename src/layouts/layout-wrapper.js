// ** React Imports
import { Fragment, useEffect } from 'react';

// ** Third Party Components
import classnames from 'classnames';

// ** Store & Actions
import { useSelector, useDispatch } from 'react-redux';

// ** Styles
import 'animate.css/animate.css';

const LayoutWrapper = (props) => {
    // ** Props
    const { layout, children, appLayout, wrapperClass, transition, routeMeta } =
        props;


    return (
        <div
            className={classnames('app-content content overflow-hidden', {
                [wrapperClass]: wrapperClass,
            })}
        >
            <div className="content-overlay"></div>
            <div className="header-navbar-shadow" />
            <div>
                {children}
            </div>
        </div>
    );
};

export default LayoutWrapper;
