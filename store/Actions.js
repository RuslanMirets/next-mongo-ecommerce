export const ACTIONS = {
  NOTIFY: 'NOTIFY',
  AUTH: 'AUTH',
  ADD_CART: 'ADD_CART',
};

export const addToCart = (product, cart) => {
  if (product.inStock === 0)
    return { type: 'NOTIFY', payload: { error: 'Продукта нет в наличии' } };

  const check = cart.every((item) => {
    return item._id !== product._id;
  });

  if (!check) return { type: 'NOTIFY', payload: { error: 'Продукт уже был добавлен в корзину' } };

  return { type: 'ADD_CART', payload: [...cart, { ...product, quantity: 1 }] };
};
