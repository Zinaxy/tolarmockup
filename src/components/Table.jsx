import React from 'react';

const Table = ({ theaders, children }) => {
  return (
    <table className='w-full text-sm text-left rtl:text-right  overflow-scroll'>
      <thead className='text-xs text-dark uppercase bg-gray-50 '>
        <tr>
          {theaders.map((th, index) => (
            <th scope='col' className='px-6 py-3' key={index}>
              {th.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;
