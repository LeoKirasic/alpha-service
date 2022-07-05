import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import OrdersImage from './OrdersImage';

const Orders = () => {
  const navigate = useNavigate();

  const navigateToNewOrder = () => {
    navigate('../new-order');
  };
  return (
    <div className="flex">
      <div className="pt-36 pl-32">
        <div className="flex">
          <Header></Header>
          <button
            className="btn-primary h-9 w-44 ml-[500px] mr-10"
            onClick={navigateToNewOrder}
          >
            Create New Order
          </button>
        </div>
        <p className="font-bold text-2xl pb-1">My Orders</p>
        <p className="text-[#737373]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
        <div className="mt-28 ml-[280px]">
          <p className="text-[#737373]">You have no orders..</p>
          <button
            className="text-[#836048] font-bold text-sm pl-3"
            onClick={navigateToNewOrder}
          >
            Create New Order
          </button>
        </div>
      </div>
      <OrdersImage></OrdersImage>
    </div>
  );
};

export default Orders;
