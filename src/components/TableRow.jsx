import React from 'react';

const TableRow = ({ children }) => {
  return (
    <tr className='odd:bg-white  even:bg-gray-50  border-b '>{children}</tr>
  );
};

export default TableRow;
