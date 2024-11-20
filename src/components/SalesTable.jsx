import React, { useEffect, useState } from 'react';
import Table from './Table';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Spinner from './Spinner';
import TableRow from './TableRow';
import { FaEdit, FaTrash } from 'react-icons/fa';

const SalesTable = ({ deleteSale }) => {
  const theaders = [
    { name: 'id' },
    { name: 'Date' },
    { name: 'Name' },
    { name: 'ID_NO' },
    { name: 'Contact Details' },
    { name: 'Property' },
    { name: 'SQR_FIT' },
    { name: 'Price' },
    { name: 'Discount' },
    { name: 'Total Paid' },
    { name: 'Balance' },
    { name: 'Action' },
  ];
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSales = async () => {
      const apiUrl = '/api/sales';
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setSales(data);
      } catch (error) {
        toast.error('Something went wrong', error);
      } finally {
        setLoading(false);
      }
    };
    fetchSales();
  });

  //delete func
  const navigate = useNavigate();
  const onDeleteClick = (saleId) => {
    const confirm = window.confirm('Are you sure you want to delete this Sale');
    if (!confirm) return;
    deleteSale(saleId);
    toast.success('Sale Deleted Successfully');
    return navigate('/sales');
  };
  return (
    <>
      <section className='my-8'>
        <div className='container-xl lg:container m-auto'>
          <div className='max-w-screen-md mb-8 lg:mb-16 '>
            {' '}
            <div className='max-w-screen-md mb-8 lg:mb-16 '>
              <div className='flex justify-between items-center'>
                <div className=''>
                  <h2 className='mb-4 text-4xl tracking-tight font-extrabold '>
                    Sales
                  </h2>
                </div>
                <div className='flex justify-end '>
                  <Link
                    to={'/add-sale'}
                    className='bg-orange-600 text-white font-bold  tracking-wider border border-orange-600 hover:text-black hover:bg-transparent px-4 py-2 rounded-lg shadow'
                  >
                    ADD NEW
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='shadow-md'>
            <Table theaders={theaders}>
              {loading ? (
                <Spinner loading={loading} />
              ) : (
                sales.map((sale) => (
                  <TableRow key={sale.id}>
                    <td className='px-6 py-4'>{sale.id}</td>
                    <td className='px-6 py-4'>{sale.date}</td>
                    <td className='px-6 py-4'>{sale.user.name}</td>
                    <td className='px-6 py-4'>{sale.user.id}</td>
                    <td className='px-6 py-4'>{sale.user.phone}</td>
                    <td className='px-6 py-4'>
                      {sale.property.address}&nbsp;,&nbsp;{sale.property.city}
                      &nbsp;,&nbsp;{sale.property.state}
                    </td>
                    <td className='px-6 py-4'>{sale.property.sq_ft}</td>
                    <td className='px-6 py-4'>{sale.property.price}</td>
                    <td className='px-6 py-4'>{sale.discount}%</td>
                    <td className='px-6 py-4'>${sale.amount}</td>
                    <td className='px-6 py-4'>
                      $
                      {((sale.property.price - sale.amount) * sale.discount) /
                        100}
                    </td>
                    <td className='px-6 py-4'>
                      <div className='flex justify-center items-center gap-4'>
                        <Link
                          to={`/edit-sale/${sale.id}`}
                          className='text-blue-600'
                        >
                          <FaEdit size={24} />
                        </Link>
                        <button
                          onClick={() => onDeleteClick(sale.id)}
                          className='text-red-600'
                        >
                          <FaTrash size={24} />
                        </button>
                      </div>
                    </td>
                  </TableRow>
                ))
              )}
            </Table>
          </div>
        </div>
      </section>
    </>
  );
};

export default SalesTable;
