import Head from 'next/head';
import React, { useContext } from 'react';
import { DataContext } from '../store/GlobalState';

const Cart = () => {
  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;

  if (cart.length === 0)
    return (
      <h2>
        <img className="img-responsive w-100" src="/empty_cart.jpg" alt="Empty" />
      </h2>
    );

  return (
    <div>
      <Head>
        <title>Корзина</title>
      </Head>
      <h1>Корзина</h1>
    </div>
  );
};

export default Cart;
