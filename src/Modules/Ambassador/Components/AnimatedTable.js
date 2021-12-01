import React, { useState } from "react"
import styled from "styled-components"
import { useTable, useSortBy, useFilters, useColumnOrder } from "react-table"
import { motion, AnimatePresence } from "framer-motion"

// import matchSorter from "match-sorter"

import makeData from "./makeData"
import Auction from "../../../Firebase/Auction"
import moment from "moment"
import { Table } from "reactstrap"
import { useHistory } from "react-router"

const Styles = styled.div`
  padding: 1rem;

  .table-wrap {
    display: block;
    max-width: 100%;
  }
  table {
    border-spacing: 0;
    border: none;
    width: 100%;
    tr > th > div > input {
      border: 1px solid #eaecef;
      font-size: 14px;
      padding: 9px 18px;
      &::placeholder {
        color: #848e9c;
      }
    }
    thead {
      tr:first-child {
        background-color: #fafafa;
      }
      tr {
        td {
          color: #1e2329;
        }
      }
    }
    tbody {
      tr {
        td {
          color: #717a8b;
          &:first-child {
            color: #1e2329;
          }
          &:nth-child(3) {
            color: rgb(3, 166, 109);
          }
          &:nth-child(2) {
            color: #c99400;
          }
        }
      }
    }
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: none;
      border-right: none;
      background: white;
      cursor: pointer;

      :last-child {
        border-right: 0;
      }
    }
  }
`

// Define a default UI for filtering
function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter }
}) {
  const count = preFilteredRows.length

  return (
    <input
      value={filterValue || ""}
      onChange={(e) => {
        setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
      }}
      placeholder={`Tìm kiếm`}
    />
  )
}

function TableCustom({ columns, data, onRowClick = () => {} }) {
  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter
    }),
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    visibleColumns,
    prepareRow,
    setColumnOrder,
    state
  } = useTable(
    {
      columns,
      data,
      defaultColumn
    },
    useColumnOrder,
    useFilters,
    useSortBy
  )

  const spring = React.useMemo(
    () => ({
      type: "spring",
      damping: 50,
      stiffness: 100
    }),
    []
  )

  return (
    <div className="table-wrap">
      <Table hover {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, i) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <motion.th
                  {...column.getHeaderProps({
                    layoutTransition: spring,
                    style: {
                      minWidth: column.minWidth
                    }
                  })}
                >
                  <div {...column.getSortByToggleProps()}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  </div>
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </motion.th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          <AnimatePresence>
            {rows.slice(0, 10).map((row, i) => {
              prepareRow(row)
              return (
                <motion.tr
                  {...row.getRowProps({
                    layoutTransition: spring,
                    exit: { opacity: 0, maxHeight: 0 }
                  })}
                  onClick={() => onRowClick(row)}
                >
                  {row.cells.map((cell, i) => {
                    return (
                      <motion.td
                        {...cell.getCellProps({
                          layoutTransition: spring
                        })}
                      >
                        {cell.render("Cell")}
                      </motion.td>
                    )
                  })}
                </motion.tr>
              )
            })}
          </AnimatePresence>
        </tbody>
      </Table>
    </div>
  )
}

// Define a custom filter filter function!
function filterGreaterThan(rows, id, filterValue) {
  return rows.filter((row) => {
    const rowValue = row.values[id]
    return rowValue >= filterValue
  })
}

// This is an autoRemove method on the filter function that
// when given the new filter value and returns true, the filter
// will be automatically removed. Normally this is just an undefined
// check, but here, we want to remove the filter if it's not a number
filterGreaterThan.autoRemove = (val) => typeof val !== "number"

const DashboardTable = () => {
  const history = useHistory()
  const [dashboardData, setDashboardData] = useState([])

  const columns = React.useMemo(
    () => [
      {
        Header: "Tên",
        accessor: "name"
      },
      {
        Header: "Địa chỉ",
        accessor: "address"
      },
      {
        Header: "Giá bid",
        accessor: "bid_value"
      },
      {
        Header: "Thời gian",
        accessor: "auction_id",
        Cell: ({ cell: { value } }) => (
          <span>{moment(value * 1).format("DD/MM/YYYY HH:mm:SS")}</span>
        )
      }
    ],
    []
  )

  React.useEffect(() => {
    Auction.registerListenDashboardChange((snap) => {
      setDashboardData(Object.values(snap?.val()))
    })
    return () => {
      Auction.unRegisterListenDashboardChange(() => {})
    }
  }, [])

  const onRowClick = React.useCallback((row) => {
    history.push(`/detail/${row?.original?.auction_id}`)
  }, [])

  return (
    <Styles>
      <TableCustom
        onRowClick={onRowClick}
        columns={columns}
        data={dashboardData}
      />
    </Styles>
  )
}

export default DashboardTable
