import React from 'react';

const Hero = () => {
  return (
    <div className=' z-20 flex flex-col items-center justify-center h-full text-center text-white'>
      {' '}
      <div className='flex justify-center items-center gap-8 relative'>
        <div className=''>
          {' '}
          <h2 className='text-4xl md:text-6xl font-extrabold'>
            Stunning Beachfront Villa
          </h2>
          <p className='text-lg md:text-2xl mt-4'>
            Location: <span className='font-medium'>Malibu, California</span>
          </p>
          <p className='text-lg md:text-2xl mt-2'>
            Price: <span className='font-bold'>$2,500,000</span>
          </p>
          <button className='mt-6 bg-primary px-6 py-3 text-lg rounded-lg  text-black hover:bg-opacity-80 transition'>
            Schedule a Visit
          </button>
        </div>
        <div className='border-2 border-primary p-4 rounded w-full lg:w-6/12 text-start '>
          <h2 className=''>GET IN TOUCH</h2>
          <form action='' className='my-6'>
            {' '}
            <div className='mb-4'>
              <label className='block  font-bold mb-2'>Email</label>
              <input
                type='email'
                id='email'
                name='email'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='eg. example@gmail.com'
                required
              />
            </div>
            <div className='mb-4'>
              <label className='block  font-bold mb-2'>Phone Number</label>
              <input
                type='phone'
                id='phone'
                name='phone'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='eg. example@gmail.com'
                required
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
