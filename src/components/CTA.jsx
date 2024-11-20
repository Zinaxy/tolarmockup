import React from 'react';

const CTA = () => {
  return (
    <section className=''>
      <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
        <div className='max-w-screen-md mb-8 lg:mb-16'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold '>
            Designed for your real estate needs
          </h2>
          <p className='text-gray-500 sm:text-xl dark:text-gray-400'>
            Whether you're buying, selling, or investing, our platform provides
            the tools and insights to make informed decisions in land sales and
            acquisitions.
          </p>
        </div>
        <div className='space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0'>
          {/* Listing Management */}
          <div>
            <div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900'>
              <svg
                className='w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M10 2a2 2 0 00-2 2v1H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2V4a2 2 0 00-2-2z'></path>
              </svg>
            </div>
            <h3 className='mb-2 text-xl font-bold dark:text-white'>
              Listing Management
            </h3>
            <p className='text-gray-500 dark:text-gray-400'>
              Manage land listings with ease. Showcase property details, images,
              and pricing to attract potential buyers.
            </p>
          </div>

          {/* Title Deed Verification */}
          <div>
            <div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900'>
              <svg
                className='w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm5 4a1 1 0 100 2 1 1 0 000-2zm-4 8h8v-1H6v1z'></path>
              </svg>
            </div>
            <h3 className='mb-2 text-xl font-bold dark:text-white'>
              Title Deed Verification
            </h3>
            <p className='text-gray-500 dark:text-gray-400'>
              Verify the authenticity of title deeds to ensure secure and
              transparent land transactions.
            </p>
          </div>

          {/* Land Valuation Tools */}
          <div>
            <div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900'>
              <svg
                className='w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM4 7h12v2H4V7zM3 11h14a1 1 0 010 2H3a1 1 0 010-2zM5 15h10v2H5v-2z'></path>
              </svg>
            </div>
            <h3 className='mb-2 text-xl font-bold dark:text-white'>
              Land Valuation Tools
            </h3>
            <p className='text-gray-500 dark:text-gray-400'>
              Access professional tools to assess market value and profitability
              of land investments.
            </p>
          </div>

          {/* Financing Assistance */}
          <div>
            <div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900'>
              <svg
                className='w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M2 10a8 8 0 1016 0A8 8 0 002 10zm9-4a1 1 0 00-2 0v2a1 1 0 00-2 0 1 1 0 002 0V8a1 1 0 002 0zM9 11a1 1 0 112 0v3a1 1 0 01-2 0v-3z'></path>
              </svg>
            </div>
            <h3 className='mb-2 text-xl font-bold dark:text-white'>
              Financing Assistance
            </h3>
            <p className='text-gray-500 dark:text-gray-400'>
              Connect with trusted financial institutions to secure funding for
              land purchases.
            </p>
          </div>

          {/* Land Usage Insights */}
          <div>
            <div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900'>
              <svg
                className='w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M4 3a1 1 0 00-.993.883L3 4v12a1 1 0 00.883.993L4 17h12a1 1 0 00.993-.883L17 16V4a1 1 0 00-.883-.993L16 3H4zm0 2h12v10H4V5z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </div>
            <h3 className='mb-2 text-xl font-bold dark:text-white'>
              Land Usage Insights
            </h3>
            <p className='text-gray-500 dark:text-gray-400'>
              Understand zoning laws, potential uses, and restrictions for each
              property.
            </p>
          </div>

          {/* Document Management */}
          <div>
            <div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900'>
              <svg
                className='w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M5 2a1 1 0 00-1 1v14a1 1 0 001 1h10a1 1 0 001-1V3a1 1 0 00-1-1H5zm2 5h6a1 1 0 100-2H7a1 1 0 100 2zm0 4h6a1 1 0 100-2H7a1 1 0 100 2z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </div>
            <h3 className='mb-2 text-xl font-bold dark:text-white'>
              Document Management
            </h3>
            <p className='text-gray-500 dark:text-gray-400'>
              Store and manage all necessary land documents in one secure
              platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
