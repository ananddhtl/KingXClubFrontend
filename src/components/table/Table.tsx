/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import React, { FC, Fragment } from 'react';
// import { RowSubComponent } from '@components/UserDetails';
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  // useAsyncDebounce,
  useFilters,
  useExpanded,
  usePagination,
} from 'react-table';
import { Filter, DefaultColumnFilter } from './filters';

interface ITable {
  columns: any;
  data: any;
  showPagination?: boolean;
  showFilter?: boolean;
  showSortBy?: boolean;
}
export const Table: FC<ITable> = ({
  columns,
  data,
  showPagination = true,
  showFilter = true,
  showSortBy = true,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    state,
    setGlobalFilter,
    page,
    visibleColumns,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
      defaultColumn: { Filter: DefaultColumnFilter },
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    useExpanded,
    usePagination,
  );

  const { globalFilter } = state;

  const generateSortingIndicator = (column: any) => {
    return column.isSorted ? (column.isSortedDesc ? ' ↓' : ' ↑') : ' ↑↓ ';
  };

  //   const debouncedSearchTerm = useAsyncDebounce(globalFilter, 500)

  //   const filteredData = useMemo(
  //     () =>
  //       matchSorter(data, debouncedSearchTerm, {
  //         keys: columns.map((c) => c.accessor),
  //       }),
  //     [data, columns, debouncedSearchTerm]
  //   )

  const onChangeInSelect = (event: any) => {
    setPageSize(Number(event.target.value));
  };

  const onChangeInInput = (event: any) => {
    const page = event.target.value ? Number(event.target.value) - 1 : 0;
    gotoPage(page);
  };

  return (
    <div className='mx-10 my-5'>
      <div className="flex items-center justify-between m-2">
        {showPagination && (
          <div className="font-mono">
            Show
            <select
              title="Select page size"
              className="mx-2 outline-none text-black"
              value={state.pageSize}
              onChange={onChangeInSelect}
            >
              {[10, 20, 30, 40, 50, 100].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
            entries
          </div>
        )}
        <input
          value={globalFilter || ''}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder={'Search over all columns...'}
          className="border text-base border-primary/20 text-orange-500 bg-gray-200 h-10 px-5 rounded-md focus:outline-none"
        />
      </div>
      <div className="overflow-scroll scrollbar mt-10">
        <table className="table-auto" {...getTableProps()}>
          <thead className="border-b border-primary/2 bg-primary/10 ">
            {headerGroups.map((headerGroup, index) => (
              <tr key={index} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, index) => (
                  <th key={index} {...column.getHeaderProps()}>
                    <div
                      className="font-mono text-base font-extralight"
                      {...column.getSortByToggleProps()}
                    >
                      {column.render('Header')}
                      {/* {Show Individual Sorting} */}
                      {showSortBy && (
                        <span
                          className={`${
                            column.disableSortBy ? 'opacity-0' : !column.isSorted && 'opacity-10'
                          }`}
                        >
                          {generateSortingIndicator(column)}
                        </span>
                      )}
                    </div>
                    {/* {Show Individual Filtering} */}
                    {showFilter && <Filter column={column} />}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {page.map((row: any) => {
              prepareRow(row);
              return (
                <Fragment key={row.getRowProps().key}>
                  <tr className="border border-primary/40 hover:bg-primary/5 cursor-pointer font-light text-center">
                    {row.cells.map((cell: any, index) => {
                      return (
                        <td key={index} {...cell.getCellProps()}>
                          {cell.render('Cell')}
                        </td>
                      );
                    })}
                  </tr>
                  {/* {row.isExpanded && (
                    <tr className="">
                      <td colSpan={visibleColumns.length}>
                        <RowSubComponent row={row} />
                      </td>
                    </tr>
                  )} */}
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
      {showPagination && (
        <div className="flex justify-between items-center m-4">
          <div className="flex flex-col">
            <div className="flex gap-5">
              <button
                type="button"
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
                className={`cursor-pointer ${canPreviousPage ? 'opacity-100' : 'opacity-40'}`}
              >
                ◀️◀️
              </button>
              <button
                type="button"
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
                className={`cursor-pointer ${canPreviousPage ? 'opacity-100' : 'opacity-40'}`}
              >
                ◀️
              </button>
              <button
                type="button"
                onClick={() => nextPage()}
                disabled={!canNextPage}
                className={`cursor-pointer ${canNextPage ? 'opacity-100' : 'opacity-40'}`}
              >
                ▶️
              </button>
              <button
                type="button"
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
                className={`cursor-pointer ${canNextPage ? 'opacity-100' : 'opacity-40'}`}
              >
                ▶️▶️
              </button>
            </div>
            <span className="text-base">
              Page{' '}
              <strong className="font-mono">
                {state.pageIndex + 1} of {pageOptions.length}
              </strong>{' '}
            </span>
          </div>
          <span className="text-base">
            Go to page :{' '}
            <input
              title="Go to page"
              type="number"
              min={1}
              max={pageOptions.length}
              defaultValue={state.pageIndex + 1}
              onChange={onChangeInInput}
              className="text-black text-center rounded-md text-sm focus:outline-none"
            />
          </span>
        </div>
      )}
    </div>
  );
};
