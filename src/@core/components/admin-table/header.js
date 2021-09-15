import React from 'react';
/*Hooks*/
import { useTranslation } from 'react-i18next';

/*Components*/
import { Share, FileText, Plus } from 'react-feather';
import {
  Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const HeaderTable = ({
  data,
  hiddenAdd = false,
  hiddenDropdown = false,
  btnAdd,
  onAdd,
  addTitle,
  dropDownTitle,
  children,
  dropDownList,
}) => {
  const { t } = useTranslation();

  // ** Converts table to CSV
  function convertArrayOfObjectsToCSV(array) {
    let result;

    const columnDelimiter = ',';
    const lineDelimiter = '\n';
    const keys = Object.keys(data[0]);

    result = '';
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    array.forEach((item) => {
      let ctr = 0;
      keys.forEach((key) => {
        if (ctr > 0) result += columnDelimiter;

        result += item[key];

        ctr++;
      });
      result += lineDelimiter;
    });

    return result;
  }

  // ** Downloads CSV
  function downloadCSV(array) {
    const link = document.createElement('a');
    let csv = convertArrayOfObjectsToCSV(array);
    if (csv === null) return;

    const filename = 'export.csv';

    if (!csv.match(/^data:text\/csv/i)) {
      csv = `data:text/csv;charset=utf-8,${csv}`;
    }

    link.setAttribute('href', encodeURI(csv));
    link.setAttribute('download', filename);
    link.click();
  }

  return (
    <div className="d-flex mt-md-0 mt-1">
      {children}
      {!hiddenDropdown ? (
        <UncontrolledButtonDropdown>
          <DropdownToggle color="secondary" caret outline>
            <Share size={15} />
            <span className="align-middle ml-50">
              {dropDownTitle || t('CORE:dropdown_title')}
            </span>
          </DropdownToggle>
          <DropdownMenu right>
            {dropDownList?.length &&
              dropDownList.map((item, index) => (
                <DropdownItem
                  key={`dropdown-${index}`}
                  className="w-100"
                  onClick={item.onClick}
                >
                  {item.icon}
                  <span className="align-middle ml-50">{item.title}</span>
                </DropdownItem>
              ))}

            <DropdownItem className="w-100" onClick={() => downloadCSV(data)}>
              <FileText size={15} />
              <span className="align-middle ml-50">CSV</span>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      ) : null}
      {!hiddenAdd ? (
        btnAdd ? (
          btnAdd
        ) : (
          <Button className="ml-2" color="primary" onClick={onAdd}>
            <Plus size={15} />
            <span className="align-middle ml-50">
              {addTitle || t('CORE:add')}
            </span>
          </Button>
        )
      ) : null}
    </div>
  );
};

HeaderTable.defaultProps = {};

export default React.memo(HeaderTable);
