// ** Third Party Components
import classnames from 'classnames';

// ** Styles
import 'animate.css/animate.css';

const LayoutWrapper = (props) => {
  // ** Props
  const { children, wrapperClass } = props;

  return (
    <div
      className={classnames('app-content content overflow-hidden', {
        [wrapperClass]: wrapperClass,
      })}
    >
      <div>{children}</div>
    </div>
  );
};

export default LayoutWrapper;
