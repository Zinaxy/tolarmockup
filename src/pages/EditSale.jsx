import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { toast } from 'react-toastify';

const EditSale = ({ updateSalesSubmit }) => {
  const sale = useLoaderData();
  const { id } = useParams();
  const [userName, setUserName] = useState(sale.user.name);
  const [date, setDate] = useState(sale.date);
  const [userid, setId] = useState(sale.user.id);
  const [phone, setPhone] = useState(sale.user.phone);
  const [address, setAddress] = useState(sale.property.address);
  const [sqrFt, setSqrFt] = useState(sale.property.sq_ft);
  const [city, setCity] = useState(sale.property.city);
  const [price, setPrice] = useState(sale.property.price);
  const [discount, setDiscount] = useState(sale.discount);
  const [amount, setAmount] = useState(sale.amount);

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    const sale = {
      id,
      user: { name: userName, id: userid, phone },
      date,
      property: {
        address,
        city,
        price,
        sqr_ft: sqrFt,
      },
      discount,
      amount,
    };
    updateSalesSubmit(sale);
    toast.success('Sales Updated Successfully');
    return navigate('/sales');
  };
  return (
    <>
      <Navbar isHome={false} />
      <div className='my-40'>
        <section className=''>
          <div className='container m-auto max-w-2xl py-24'>
            <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
              <form onSubmit={submitForm}>
                <h2 className='text-3xl text-center font-semibold mb-6'>
                  New Sale
                </h2>
                <div className='mb-4'>
                  <label className='block text-gray-700 font-bold mb-2'>
                    Customer Name
                  </label>
                  <input
                    type='text'
                    id='userName'
                    name='userName'
                    className='border rounded w-full py-2 px-3 mb-2'
                    placeholder='John Doe'
                    required
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-gray-700 font-bold mb-2'>
                    National ID
                  </label>
                  <input
                    type='text'
                    id='id'
                    name='id'
                    className='border rounded w-full py-2 px-3 mb-2'
                    placeholder='56747474478M66'
                    required
                    value={userid}
                    onChange={(e) => setId(e.target.value)}
                  />
                </div>{' '}
                <div className='mb-4'>
                  <label className='block text-gray-700 font-bold mb-2'>
                    Phone Number
                  </label>
                  <PhoneInput
                    defaultCountry='ZW' // Set the default country
                    value={phone}
                    onChange={setPhone}
                    international // Ensures international format with country code
                    className='border rounded p-2 w-full'
                  />
                </div>{' '}
                <div className='mb-4'>
                  <label className='block text-gray-700 font-bold mb-2'>
                    Date
                  </label>
                  <input
                    type='text'
                    id='date'
                    name='date'
                    className='border rounded w-full py-2 px-3 mb-2'
                    placeholder=''
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>{' '}
                <div className='mb-4'>
                  <label
                    htmlFor='address'
                    className='block text-gray-700 font-bold mb-2'
                  >
                    Address
                  </label>
                  <textarea
                    id='address'
                    name='address'
                    className='border rounded w-full py-2 px-3'
                    rows='4'
                    placeholder=''
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  ></textarea>
                </div>
                <div className='mb-4'>
                  <label className='block text-gray-700 font-bold mb-2'>
                    City
                  </label>
                  <input
                    type='text'
                    id='city'
                    name='city'
                    className='border rounded w-full py-2 px-3 mb-2'
                    placeholder='Gweru'
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-gray-700 font-bold mb-2'>
                    Square Fit
                  </label>
                  <input
                    type='text'
                    id='sqrft'
                    name='sqrft'
                    className='border rounded w-full py-2 px-3 mb-2'
                    placeholder='3000'
                    required
                    value={sqrFt}
                    onChange={(e) => setSqrFt(e.target.value)}
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-gray-700 font-bold mb-2'>
                    Price
                  </label>
                  <input
                    type='text'
                    id='price'
                    name='price'
                    className='border rounded w-full py-2 px-3 mb-2'
                    placeholder='22000'
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-gray-700 font-bold mb-2'>
                    Discount
                  </label>
                  <input
                    type='text'
                    id='discount'
                    name='discount'
                    className='border rounded w-full py-2 px-3 mb-2'
                    placeholder='50'
                    required
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-gray-700 font-bold mb-2'>
                    Amount Payed
                  </label>
                  <input
                    type='text'
                    id='amount'
                    name='amount'
                    className='border rounded w-full py-2 px-3 mb-2'
                    placeholder='50'
                    required
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
                <div>
                  <button
                    className='bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
                    type='submit'
                  >
                    Update sales
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EditSale;
