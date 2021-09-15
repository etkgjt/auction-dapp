import './index.scss';

import React, { useState } from 'react';

const ShowMore = ({ content, html, moreLabel, miniLabel, style, width }) => {
  const [more, setMore] = useState('hide');

  const onClickMore = (status) => {
    setMore(status);
  };

  return (
    <div className="show-more" style={style}>
      <div
        className={more === 'full' ? 'panel show' : 'panel hide'}
        style={{ maxWidth: width }}
      >
        {html ? (
          <div dangerouslySetInnerHTML={{ __html: content }} />
        ) : (
          { content }
        )}
      </div>
      <span
        className="btn-click-more"
        onClick={() => onClickMore(more === 'full' ? 'hide' : 'full')}
      >
        {more === 'full' ? miniLabel : moreLabel}
      </span>
    </div>
  );
};

ShowMore.defaultProps = {
  moreLabel: 'See more',
  miniLabel: 'Minimize',
  style: {},
  html: false,
  width: 200,
};

export default ShowMore;
