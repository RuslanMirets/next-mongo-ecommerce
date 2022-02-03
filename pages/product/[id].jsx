import Head from 'next/head';
import React, { useState } from 'react';
import { getData } from '../../utils/fetchData';

const DetailProduct = (props) => {
  const [product] = useState(props.product);

  const [tab, setTab] = useState(0);

  const isActive = (index) => {
    if (tab === index) return ' active';
    return '';
  };

  return (
    <div className="row detail-page">
      <Head>
        <title>Информация о продукте</title>
      </Head>

      <div className="col-md-6">
        <img
          className="d-block img-thumbnail rounded mt-4 w-100"
          style={{ height: '350px' }}
          src={product.images[tab].url}
          alt={product.images[tab].url}
        />
        <div className="row mx-0" style={{ cursor: 'pointer' }}>
          {product.images.map((img, index) => (
            <img
              className={`img-thumbnail rounded ${isActive(index)}`}
              style={{ height: '80px', width: '20%' }}
              key={index}
              src={img.url}
              alt={img.url}
              onClick={() => setTab(index)}
            />
          ))}
        </div>
      </div>
      <div className="col-md-6 mt-3">
        <h2 className="text-uppercase">{product.title}</h2>
        <h5 className="text-danger">${product.price}</h5>
        <div className="row mx-0 d-flex justify-content-between">
          {product.inStock > 0 ? (
            <h6 className="text-danger">В наличии: {product.inStock}</h6>
          ) : (
            <h6 className="text-danger">Нет в наличии</h6>
          )}
          <h6 className="text-danger">Продано: {product.sold}</h6>
        </div>
        <div className="my-2">{product.description}</div>
        <div className="my-2">{product.content}</div>
        <button className="btn btn-dark d-block my-3 px-5" type="button">
          Купить
        </button>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params: { id } }) {
  const res = await getData(`product/${id}`);
  return {
    props: { product: res.product },
  };
}

export default DetailProduct;
