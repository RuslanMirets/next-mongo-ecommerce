import { createContext, useEffect, useReducer } from 'react';
import { getData } from '../utils/fetchData';
import reducers from './Reducers';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const initialState = { notify: {}, auth: {}, cart: [] };
  const [state, dispatch] = useReducer(reducers, initialState);
  const { cart } = state;

  useEffect(() => {
    const firstLogin = localStorage.getItem('firstLogin');
    if (firstLogin) {
      getData('auth/accessToken').then((res) => {
        if (res.error) return localStorage.removeItem('firstLogin');
        dispatch({
          type: 'AUTH',
          payload: {
            token: res.access_token,
            user: res.user,
          },
        });
      });
    }
  }, []);

  useEffect(() => {
    const __next__cart = JSON.parse(localStorage.getItem('__next__cart'));
    if (__next__cart) dispatch({ type: 'ADD_CART', payload: __next__cart });
  }, []);

  useEffect(() => {
    localStorage.setItem('__next__cart', JSON.stringify(cart));
  }, [cart]);

  return <DataContext.Provider value={{ state, dispatch }}>{children}</DataContext.Provider>;
};
