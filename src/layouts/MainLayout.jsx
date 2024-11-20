import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
  const navigate = useNavigate();
  /*  const token = localStorage.getItem('authToken');
  if (!token) {
    return navigate('/login');
  } */
  return (
    <main className=''>
      <Outlet />
      <ToastContainer />
    </main>
  );
};

export default MainLayout;
