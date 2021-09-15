import React from 'react';
import { Button, Spinner } from 'reactstrap';
import classnames from 'classnames';

export default ({ children, loading, block, onClick, ...rest }) => (
  <Button
    {...rest}
    block={block}
    onClick={loading ? () => {} : onClick}
    className={classnames({
      'flex-center justify-content-center': true,
      [rest.className || '']: true,
    })}
  >
    <span>{children}</span>&nbsp;
    <Spinner
      className={classnames({
        'position-relative': true,
        visible: loading,
        invisible: !loading,
      })}
      size="sm"
    />
  </Button>
);
