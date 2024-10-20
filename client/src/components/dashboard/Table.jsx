import React from 'react';

const Table = ({ headings = [], rows = [] }) => {
  console.log(headings, rows, "in table");

  return (
    <table className="min-w-full border">
      <thead>
        <tr className="bg-gray-200">
          {headings.map((heading, index) => (
            <th key={index} className="border px-4 py-2">
              {heading}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.length > 0 ? (
          rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-100">
              {Object.values(row).map((cell, cellIndex) => (
                <td key={cellIndex} className="border px-4 py-2">
                  {cell}
                </td>
              ))}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={headings.length} className="text-center border px-4 py-2">
              No data available
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
