import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm('Are you sure you want to log out?');
    if (confirmLogout) {
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      toast.success('Logged out successfully!');
      navigate('/');
    }
  };

  return (
    <button
      onClick={handleLogout}
      className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700'
    >
      Logout
    </button>
  );
};

export default Logout;
