import React from 'react';
import Properties from '../components/Properties';
import Navbar from '../components/Navbar';

const AllProperties = () => {
  return (
    <>
      <Navbar isHome={false} />
      <div className='my-40'>
        <Properties isHome={false} />
      </div>
    </>
  );
};

export default AllProperties;
