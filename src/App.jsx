import React from 'react';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
import NotFoundPage from './pages/NotFoundPage';
import AllProperties from './pages/AllProperties';
import AddProperty from './pages/AddProperty';
import Sales from './pages/Sales';
import AddSale from './pages/AddSale';
import EditSale from './pages/EditSale';
import Sale, { saleLoader } from './pages/Sale';
import Register from './pages/Register';
import Login from './pages/Login';

const App = () => {
  //add sales
  const addSale = async (newSale) => {
    const res = await fetch('/api/sales', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newSale),
    });
    return;
  };

  //delete sale
  const deleteSale = async (id) => {
    const res = await fetch(`/api/sales/${id}`, {
      method: 'DELETE',
    });
    return;
  };
  //update sales
  const updateSale = async (sale) => {
    console.log('hi', sale);
    const res = await fetch(`/api/sales/${sale.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sale),
    });
    return;
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/properties' element={<AllProperties />} />
        <Route path='/add-property' element={<AddProperty />} />
        <Route path='/sales' element={<Sales deleteSale={deleteSale} />} />
        <Route path='/sales/:id' element={<Sale />} loader={saleLoader} />
        <Route
          path='/add-sale'
          element={<AddSale addSalesSubmit={addSale} />}
        />
        <Route
          path='/edit-sale/:id'
          element={<EditSale updateSalesSubmit={updateSale} />}
          loader={saleLoader}
        />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
