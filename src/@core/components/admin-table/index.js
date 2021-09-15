// ** Styles
import '@styles/react/libs/tables/react-dataTable-component.scss';

import React, {
  Fragment,
  useState,
  forwardRef,
  useEffect,
  useRef,
  useCallback,
} from 'react';

/*Hooks*/
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

/*Components*/
import ReactPaginate from 'react-paginate';
import DataTable from 'react-data-table-component';
import { ChevronDown } from 'react-feather';
import {
  Card,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Row,
  Col,
  Alert,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CardBody,
} from 'reactstrap';
import Header from './header';
import { Formik, useFormikContext, Field, Form } from 'formik';
import { Spinner } from '@components';
import {
  BsExclamationDiamondFill,
  BsCheckBox,
  BsFillTrashFill,
} from 'react-icons/bs';
import { toast } from 'react-toastify';

/* Actions */
import {
  get_identity_table_data_action,
  set_default_identity_table_data_action,
  clear_identity_table,
} from '@store/adminTable/actions';

/* Selectors */
import { select_identity_table_dynamic_key } from '@store/adminTable/selectors';
import { create_loading_error_selector } from '@store/loadingError/selectors';

/*Helper*/
import debounce from 'lodash/debounce';
import { removeAccents } from '@utils';

/*Constants*/
import { RETCODE_SUCCESS } from '@configs/contants';

// ** Bootstrap Checkbox Component
const BootstrapCheckbox = forwardRef(({ onClick, ...rest }, ref) => {
  return (
    <div className="custom-control custom-checkbox">
      <input
        type="checkbox"
        className="custom-control-input"
        ref={ref}
        {...rest}
      />
      <label className="custom-control-label" onClick={onClick} />
    </div>
  );
});

const OnChangeFilter = () => {
  const formik = useFormikContext();

  useEffect(() => {
    onChangeFilter();
  }, [formik.values]);

  const onChangeFilter = debounce(
    () => {
      formik.submitForm();
    },
    1000,
    { trailing: true, leading: false, maxWait: 4000 }
  );

  return null;
};

const AdminTable = ({
  defs,
  title,
  searchTitle,
  showCheckbox,
  showPagination,
  showSearch,
  defaultPageSize,
  className,
  searchHolder,
  onSearch,
  defaultDataSource,
  identity,
  dynamicKey,
  dynamicMode,
  defaultPrefixRouteKey,
  refreshKey,
  stillRefreshWhenDataExist = true,
  clearTableAfterChangeRoute = true,
  rowKey = 'id',
  api,
  header,
  advanceFilter,
  initialValuesFilter = {},
  validationSchemaFilter,
  apiDelete,
  afterDeleteSuccess,
  searchKey,
  ...rest
}) => {
  const history = useHistory();
  const { t } = useTranslation();
  const formRef = useRef();

  /* State */
  const [prefixRouteKey] = useState(
    defaultPrefixRouteKey || history.location.pathname.split('/')[1]
  );
  const [selectedRows, setSelectedRow] = useState({});
  const [visibleDelete, setVisibleDelete] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [filter, setFilter] = useState(initialValuesFilter);
  const [data, setData] = useState([]);

  /* Redux */
  const dispatch = useDispatch();

  /*Selector*/
  const loading = useSelector((state) =>
    create_loading_error_selector([`${identity}_GET_IDENTITY_TABLE_DATA`])(
      state.LoadingHandler
    )
  );

  const error = useSelector((state) =>
    create_loading_error_selector([`${identity}_GET_IDENTITY_TABLE_DATA`])(
      state.ErrorsHandler
    )
  );
  /* Identity data */
  let identityData;
  if (dynamicMode) {
    identityData = useSelector(
      select_identity_table_dynamic_key(identity, dynamicKey)
    );
  } else {
    identityData = useSelector((state) => state[identity]);
  }

  const { list = [], pagination } = identityData;

  useEffect(() => {
    setData(list);
  }, [JSON.stringify(list)]);

  useEffect(() => {
    if (Array.isArray(defaultDataSource)) {
      dispatch(
        set_default_identity_table_data_action(identity, defaultDataSource)
      );
    } else {
      const current = 1,
        pageSize = defaultPageSize;
      if (stillRefreshWhenDataExist) {
        getData(current, pageSize, filter);
      } else if (list.length === 0) {
        getData(current, pageSize, filter);
      }
    }

    return () => {
      const { pathname } = history.location;
      console.log('clear');
      if (clearTableAfterChangeRoute && !pathname.includes(prefixRouteKey)) {
        dispatch(clear_identity_table(identity));
      }
    };
  }, [identity, refreshKey, JSON.stringify(defaultDataSource)]);

  const getData = (current, pageSize, filters) => {
    dispatch(
      get_identity_table_data_action(identity, api, current, pageSize, filters)
    );
  };

  // Trigger after delete success
  const refreshDataAfterDelete = useCallback(() => {
    getData(pagination.current, pagination.pageSize, filter);
    setSelectedRow([]);
  }, [pagination.current, pagination.pageSize]);

  const onConfirmDelete = () => {
    setDeleting(true);

    const listIds =
      selectedRows && selectedRows.selectedRows?.map((item) => item.id);
    if (typeof apiDelete === 'function' && listIds.length) {
      apiDelete(listIds)
        .then((res) => {
          setDeleting(false);
          if (res.retCode !== RETCODE_SUCCESS) {
            toast.error(t('CORE:delete_failure'), {
              position: 'top-center',
              autoClose: true,
            });
            return;
          }
          if (afterDeleteSuccess) {
            afterDeleteSuccess(selectedRowKeys);
          }
          refreshDataAfterDelete();
          setVisibleDelete(false);
          toast.success(t('CORE:delete_success'), {
            position: 'top-center',
            autoClose: true,
          });
        })
        .catch((e) => {
          console.log(e);
          toast.success(t('CORE:delete_failure'), {
            position: 'top-center',
            autoClose: true,
          });
          setDeleting(false);
        });
    } else {
      toast.error(t('CORE:api_delete_failed'), {
        position: 'top-center',
        autoClose: true,
      });
    }
  };

  // ** Function to handle Pagination
  const handlePagination = (page) => {
    setCurrentPage(page.selected);
  };

  // ** Custom Pagination
  const CustomPagination = () => {
    return (
      <div>
        <ReactPaginate
          previousLabel={''}
          nextLabel={''}
          breakLabel="..."
          pageCount={list.length / defaultPageSize || 1}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          activeClassName="active"
          forcePage={currentPage !== 0 ? currentPage - 1 : 0}
          onPageChange={(page) => handlePagination(page)}
          pageClassName={'page-item'}
          nextLinkClassName={'page-link'}
          nextClassName={'page-item next'}
          previousClassName={'page-item prev'}
          previousLinkClassName={'page-link'}
          pageLinkClassName={'page-link'}
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName={
            'pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1'
          }
        />
      </div>
    );
  };

  const handleFilter = (filters) => {
    try {
      const current = 1,
        pageSize = defaultPageSize;
      if (JSON.stringify(filter) !== JSON.stringify(filters)) {
        setFilter(filters);
        getData(current, pageSize, filters);
      }
    } catch (err) {
      console.log('error', err);
    }
  };

  const handleSearch = debounce(
    (e) => {
      const valueSearch = e.target.value;
      if (typeof onSearch === 'function') {
        onSearch(valueSearch);
      }
      if (valueSearch) {
        const current = 1,
          pageSize = defaultPageSize;
        getData(current, pageSize, { ...filter, [searchKey]: valueSearch });
      }
    },
    1000,
    { trailing: true, leading: false, maxWait: 4000 }
  );

  const onSelectRows = (rows) => {
    const { selectedCount, selectedRows, allSelected } = rows;
    setSelectedRow({ selectedCount, selectedRows, allSelected });
  };

  const renderDeleteModal = () => {
    return (
      <Modal
        isOpen={visibleDelete}
        toggle={() => setVisibleDelete(false)}
        className="modal-dialog-centered"
        modalClassName="modal-danger"
        key="modal-danger"
      >
        <ModalHeader toggle={() => setVisibleDelete(false)}>
          {t('CORE:MODAL.TITLE.delete', { amount: selectedRows.selectedCount })}
        </ModalHeader>
        <ModalBody>{t('CORE:confirm_mss')}</ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={() => onConfirmDelete()}>
            {t('CORE:delete')}
          </Button>
        </ModalFooter>
      </Modal>
    );
  };

  return (
    <Fragment>
      <Card>
        <CardHeader className="flex-md-row flex-column align-md-items-center align-items-start border-bottom">
          <CardTitle tag="h4">{title}</CardTitle>
          {header && <Header {...header} data={list} />}
        </CardHeader>
        <Row xs="1" sm="1" md="2" lg="2" className="mx-0">
          <Col className="align-items-center mt-1 filter__admin-table">
            {advanceFilter && (
              <Formik
                innerRef={formRef}
                onSubmit={handleFilter}
                validationSchema={validationSchemaFilter}
                initialValues={initialValuesFilter}
                enableReinitialize={true}
              >
                {({
                  handleChange,
                  handleBlur,
                  values,
                  errors,
                  touched,
                  handleSubmit,
                  setFieldValue,
                }) => {
                  return (
                    <Form onSubmit={(e) => e.preventDefault()}>
                      <CardBody>
                        {advanceFilter(
                          handleChange,
                          handleBlur,
                          values,
                          errors,
                          touched,
                          handleSubmit,
                          setFieldValue
                        )}
                      </CardBody>
                      <OnChangeFilter />
                    </Form>
                  );
                }}
              </Formik>
            )}
          </Col>
          <Col className="d-flex align-items-center justify-content-end mt-1">
            {showSearch && (
              <>
                <Label className="mr-1" for="search-input">
                  {searchTitle || t('CORE:search')}
                </Label>
                <Input
                  className="dataTable-filter mb-50"
                  type="text"
                  id="search-input"
                  onChange={handleSearch}
                  placeholder={searchHolder}
                />
              </>
            )}
          </Col>
        </Row>

        {error ? (
          <div className="demo-spacing-0">
            <Alert color="danger">
              <div className="alert-body">
                <BsExclamationDiamondFill size={15} />
                <span className="ml-1">{t('CORE:error_table')}</span>
              </div>
            </Alert>
          </div>
        ) : (
          <>
            {selectedRows.selectedCount > 0 && (
              <div className="demo-spacing-0">
                <Alert
                  color="primary"
                  className="d-flex justify-content-between"
                >
                  <div className="alert-body">
                    <BsCheckBox size={15} />
                    <span className="ml-1">
                      {t('CORE:TABLE.ROW.selected_row_message_value', {
                        value: selectedRows.selectedCount,
                      })}
                    </span>
                  </div>
                  <div className="alert-action">
                    <Button.Ripple
                      className="btn-icon"
                      color="flat-danger"
                      onClick={() => setVisibleDelete(true)}
                    >
                      <BsFillTrashFill size={15} />
                    </Button.Ripple>
                  </div>
                </Alert>
              </div>
            )}
            <DataTable
              noHeader
              data={data}
              pagination={false}
              selectableRows={showCheckbox}
              columns={defs}
              paginationPerPage={defaultPageSize}
              className={`react-dataTable ${className ? className : ''}`}
              sortIcon={<ChevronDown size={10} />}
              paginationDefaultPage={currentPage + 1}
              selectableRowsComponent={BootstrapCheckbox}
              keyField={rowKey}
              onSelectedRowsChange={onSelectRows}
              progressPending={loading || deleting}
              progressComponent={<Spinner type="table" />}
              {...rest}
            />
          </>
        )}

        <CustomPagination />
      </Card>
      {renderDeleteModal()}
    </Fragment>
  );
};

AdminTable.defaultProps = {
  defs: [],
  showCheckbox: true,
  showPagination: true,
  showHeaderAction: true,
  defaultPageSize: 50,
  rowKey: 'id',
  rowKeys: [],
  searchHolder: 'Please input your key',
  showSearch: true,
  header: {},
};

export default React.memo(AdminTable);
