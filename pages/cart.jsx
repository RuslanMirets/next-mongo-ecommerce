/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import CartItem from '../components/CartItem';
import { DataContext } from '../store/GlobalState';
import { getData } from '../utils/fetchData';

const Cart = () => {
  const { state, dispatch } = useContext(DataContext);
  const { cart, auth } = state;

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.price * item.quantity;
      }, 0);
      setTotal(res);
    };
    getTotal();
  }, [cart]);

  useEffect(() => {
    const cartLocal = JSON.parse(localStorage.getItem('__next__cart'));
    if (cartLocal && cartLocal.length > 0) {
      let newArray = [];
      const updateCart = async () => {
        for (const item of cartLocal) {
          const res = await getData(`product/${item._id}`);
          const { _id, title, images, price, inStock } = res.product;
          if (inStock > 0) {
            newArray.push({
              _id,
              title,
              images,
              price,
              inStock,
              quantity: item.quantity > inStock ? 1 : item.quantity,
            });
          }
        }
        dispatch({ type: 'ADD_CART', payload: newArray });
      };
      updateCart();
    }
  }, [dispatch]);

  if (cart.length === 0)
    return <img className="img-responsive w-100" src="/empty_cart.jpg" alt="Empty" />;

  return (
    <div className="row mx-auto">
      <Head>
        <title>Корзина</title>
      </Head>
      <div className="col-md-8 text-secondary table-responsive my-3">
        <h2 className="text-uppercase">Корзина</h2>
        <table className="table my-3">
          <tbody>
            {cart.map((item) => (
              <CartItem key={item._id} item={item} dispatch={dispatch} cart={cart} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="col-md-4 my-3 text-right text-uppercase text-secondary">
        <form>
          <h2>Доставка</h2>
          <label htmlFor="address">Адрес</label>
          <input className="form-control mb-2" type="text" name="address" id="address" />
          <label htmlFor="mobile">Телефон</label>
          <input className="form-control mb-2" type="text" name="mobile" id="mobile" />
        </form>
        <h3>
          Всего: <span className="text-danger">${total}</span>
        </h3>
        <Link href={auth.user ? '#' : '/login'}>
          <a className="btn btn-dark my-2">Приступить к оплате</a>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
