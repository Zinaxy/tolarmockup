import React, { useEffect, useState } from 'react';
import Property from './Property';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Spinner from './Spinner';

const Properties = ({ isHome = false }) => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      const apiUrl = isHome
        ? `/api/properties?_limit=3`
        : `/api/properties?_limit=9`;
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setProperties(data);
      } catch (error) {
        toast.error('error fetching data', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  });
  return (
    <section className='my-8'>
      <div className='container-xl lg:container m-auto'>
        <div className='max-w-screen-md mb-8 lg:mb-16 '>
          <div className='flex justify-between items-center'>
            <div className=''>
              <h2 className='mb-4 text-4xl tracking-tight font-extrabold '>
                What We Offer
              </h2>
              <p className=' sm:text-xl text-gray-400'>
                Whether you're buying, selling, or investing, our platform
                provides the tools and insights to make informed decisions in
                land sales and acquisitions.
              </p>
            </div>
            <div className='flex justify-end '>
              {/* <Link
                to={'/add-property'}
                className='bg-orange-600 text-white font-bold  tracking-wider border border-orange-600 hover:text-black hover:bg-transparent px-4 py-2 rounded-lg shadow'
              >
                ADD NEW
              </Link> */}
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {loading ? (
            <Spinner loading={loading} />
          ) : (
            properties.map((property) => (
              <Property key={property.id} property={property} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Properties;
