import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import SalesTable from '../components/SalesTable';
import { useNavigate } from 'react-router-dom';

const Sales = ({ deleteSale }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('authToken');

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  // Render nothing while redirecting to avoid rendering the page for unauthenticated users.
  if (!token) return null;

  return (
    <>
      <Navbar isHome={false} />
      <div className='my-40'>
        <SalesTable deleteSale={deleteSale} />
      </div>
    </>
  );
};

export default Sales;
