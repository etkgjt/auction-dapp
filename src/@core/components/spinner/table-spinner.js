import './index.scss';

const TableLoading = () => {
  return (
    <div className="fallback-spinner">
      <div className="bg-spin" />
      <div className="loading">
        <div className="effect-1 effects"></div>
        <div className="effect-2 effects"></div>
        <div className="effect-3 effects"></div>
      </div>
    </div>
  );
};

export default TableLoading;
