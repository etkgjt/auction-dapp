import Fallback from './fallback-spinner';
import Loading from './loading-spinner';
import TableLoading from './table-spinner';

const Spinner = ({ type }) => {
  switch (type) {
    case 'fallback':
      return <Fallback />;
    case 'table':
      return <TableLoading />;
    default:
      return <Loading />;
  }
};

export default Spinner;
