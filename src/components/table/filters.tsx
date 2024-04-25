import React from 'react';

export const Filter = ({ column }: any) => {
  return <div className="m-2 text-black">{column.canFilter && column.render('Filter')}</div>;
};

export const DefaultColumnFilter = ({ column }: any) => {
  const { filterValue, setFilter, preFilteredRows } = column;
  return (
    <input
      value={filterValue || ''}
      className="bg-white text-base font-light rounded-md px-2 py-1 outline-none"
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
      placeholder={`search (${preFilteredRows.length})`}
    />
  );
};

export const SelectColumnFilter = ({ column }: any) => {
  const { filterValue, setFilter, preFilteredRows, id } = column;
  const options = React.useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row: any) => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);

  return (
    <select
      title="Select a filter"
      id="custom-select"
      className="text-gray-700 text-base font-light rounded-md p-1 outline-none"
      value={filterValue}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
    >
      <option value="">All</option>
      {options.map((option, index) => (
        <option key={index} value={option as string}>
          {new Date(option as string).toLocaleString("default", {
                    month: "long",
                    year: "numeric",
                    day: "2-digit",
                    hour: 'numeric',
                    minute: 'numeric'
                })}
          
        </option>
      ))}
    </select>
  );
};
