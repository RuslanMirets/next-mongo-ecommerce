import Link from 'next/link';
import React, { useContext } from 'react';
import { addToCart } from '../../store/Actions';
import { DataContext } from '../../store/GlobalState';

const ProductItem = ({ product }) => {
  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;

  const userLink = () => {
    return (
      <>
        <Link href={`product/${product._id}`}>
          <a className="btn btn-info" style={{ marginRight: '5px', flex: 1 }}>
            Подробнее
          </a>
        </Link>
        <button
          className="btn btn-success"
          style={{ marginLeft: '5px', flex: 1 }}
          disabled={product.inStock === 0 ? true : false}
          onClick={() => dispatch(addToCart(product, cart))}>
          Купить
        </button>
      </>
    );
  };

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img className="card-img-top" src={product.images[0].url} alt={product.images[0].url} />
      <div className="card-body">
        <h5 className="card-title text-capitalize" title={product.title}>
          {product.title}
        </h5>
        <div className="row justify-content-between mx-0">
          <h6 className="text-danger">${product.price}</h6>
          {product.inStock > 0 ? (
            <h6 className="text-danger">В наличии: {product.inStock}</h6>
          ) : (
            <h6 className="text-danger">Нет в наличии</h6>
          )}
        </div>
        <p className="card-text" title={product.description}>
          {product.description}
        </p>
        <div className="row justify-content-between mx-0">{userLink()}</div>
      </div>
    </div>
  );
};

export default ProductItem;
