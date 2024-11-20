import React from 'react';
import navlinks from '../context/navlinks.json';
import { Link, NavLink } from 'react-router-dom';
import Logout from './Logout';

const Navbar = ({ isHome = false }) => {
  const token = localStorage.getItem('authToken');
  let bg, color;

  bg = isHome ? 'bg-transparent' : 'bg-transparent shadow-md border-b';
  color = isHome ? 'text-white' : 'text-gray-800';
  const linkClass = ({ isActive }) =>
    isActive
      ? 'bg-orange-600 text-white rounded-md px-3 py-2 text-sm font-medium'
      : `${color} rounded-md px-3 py-2 text-sm font-medium hover:bg-orange-600`;
  return (
    <nav className={`absolute top-0 left-0 w-full ${bg} z-10`}>
      <div
        className={`container mx-auto flex items-center justify-between p-4 ${color}`}
      >
        <h1 className='text-2xl font-bold'>RealEstate</h1>
        <ul className='flex space-x-6'>
          {navlinks.map((navlink) => (
            <li key={`${navlink.id}`}>
              <NavLink to={navlink.path} className={linkClass}>
                {navlink.name}
              </NavLink>
            </li>
          ))}
          <li className=''>
            {token ? (
              <Logout />
            ) : (
              <Link to='login' className='border px-4 py-2 rounded'>
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
