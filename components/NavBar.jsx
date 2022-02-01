import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const NavBar = () => {
  const router = useRouter();
  const isActive = (r) => {
    if (r === router.pathname) {
      return ' active';
    } else {
      return '';
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link href="/">
        <a className="navbar-brand">E-commerce</a>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Переключатель навигации">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/cart">
              <a className={'nav-link' + isActive('/cart')}>
                <i className="fas fa-shopping-cart" aria-hidden="true"></i> Корзина
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/login">
              <a className={'nav-link' + isActive('/login')}>
                <i className="fas fa-user" aria-hidden="true"></i> Войти
              </a>
            </Link>
          </li>
          {/* <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              Имя
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="#">
                Профиль
              </a>
              <a className="dropdown-item" href="#">
                Выйти
              </a>
            </div>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
