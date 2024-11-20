import React, { useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get('/api/users');
      const user = res.data.find(
        (u) =>
          u.username === formData.username && u.password === formData.password
      );

      if (user) {
        // Generate a token and save it to localStorage
        const token = uuidv4();
        localStorage.setItem('authToken', token);
        localStorage.setItem('user', JSON.stringify(user));
        toast.success('Login successful');
        console.log('Token:', token);
        return navigate('/');
      } else {
        toast.error('Invalid username or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Failed to log in. Try again.');
    }
  };

  return (
    <section className='bg-indigo-50 h-screen'>
      <div className='container m-auto max-w-2xl py-24'>
        <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
          <h2 className='text-xl font-bold mb-4'>Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              name='username'
              placeholder='Username'
              value={formData.username}
              onChange={handleChange}
              required
              className='border p-2 mb-2 w-full'
            />
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={formData.password}
              onChange={handleChange}
              required
              className='border p-2 mb-2 w-full'
            />
            <button
              type='submit'
              className='bg-orange-500 text-white px-4 py-2'
            >
              Login
            </button>
            <Link
              to='/register'
              className='my-3 font-bold text-lg mx-20 hover:underline'
            >
              Not Registered ?
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
