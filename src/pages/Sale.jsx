import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Sale = () => {
  const { id } = useParams();
  const sale = useLoaderData();
  return <div>Sale{sale.date}</div>;
};
const saleLoader = async ({ params }) => {
  const res = await fetch(`/api/sales/${params.id}`);
  const data = await res.json();
  return data;
};
export { Sale as default, saleLoader };
