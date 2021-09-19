import './index.scss';

import { Link } from 'react-router-dom';

// ** Third Party Components
import Proptypes from 'prop-types';

import { BackIcon } from '@src/assets/svg';

const BreadCrumbs = (props) => {
  // ** Props
  const { breadCrumbs, backTo } = props;

  return (
    <div className="breadcrumb-wrapper">
      <div class="page">
        <div class="page__section">
          {backTo && (
            <div className="breadcrumb-back">
              <Link to={backTo}>
                <BackIcon />
              </Link>
            </div>
          )}
          <nav class="breadcrumb breadcrumb_type" aria-label="Breadcrumb">
            <ol class="breadcrumb__list r-list">
              {breadCrumbs?.length &&
                breadCrumbs.map((item, index) => (
                  <li key={`breadcrumb-${index}`} class="breadcrumb__group">
                    {item.to ? (
                      <Link class="breadcrumb__point r-link" to={item.to}>
                        {item.title}
                      </Link>
                    ) : (
                      <span class="breadcrumb__point" aria-current="page">
                        {item.title}
                      </span>
                    )}
                    {index + 1 < breadCrumbs.length && (
                      <span class="breadcrumb__divider" aria-hidden="true">
                        |
                      </span>
                    )}
                  </li>
                ))}
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default BreadCrumbs;

// ** PropTypes
BreadCrumbs.propTypes = {
  breadCrumbs: Proptypes.array.isRequired,
};
