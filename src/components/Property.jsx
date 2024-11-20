import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Property = ({ property }) => {
  return (
    <div className='max-w-lg bg-white shadow-md overflow-hidden'>
      {/* Image Section */}
      <div className='relative'>
        <img
          src={`/images/img_1.jpg`} // Replace with your image path
          alt='Property'
          className='w-full h-64 object-cover'
        />
        {/* Status Badge */}
        {property.status === 'Sold' || property.status === 'sold' ? (
          <>
            {' '}
            <span className='absolute top-2 left-2 bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded'>
              {property.status}
            </span>
          </>
        ) : (
          <>
            {' '}
            <span className='absolute top-2 left-2 bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded'>
              {property.status}
            </span>
          </>
        )}

        {/* Heart Icon */}
        <div className='absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-lg'>
          <FaHeart className='text-red-600 cursor-pointer' size={20} />
        </div>
      </div>

      {/* Body Section */}
      <div className='p-4'>
        <h2 className='text-lg font-semibold text-gray-800'>
          625 S. Berendo St
        </h2>
        <p className='text-gray-600'>
          625 S. Berendo St Unit 607, Los Angeles, CA 90005
        </p>
        <p className='text-gray-800 font-bold mt-2 text-lg'>
          ${property.price}
        </p>
        <div className='mt-3 flex flex-wrap gap-2'>
          <div className='text-sm text-gray-700'>
            <span className='font-bold'>Beds:</span> 2 +
          </div>
          <div className='text-sm text-gray-700'>
            <span className='font-bold'>Baths:</span> 2
          </div>
          <div className='text-sm text-gray-700'>
            <span className='font-bold'>SQ FT:</span> 7,000
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
