import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const Login = () => {
  return (
    <div>
      <Head>
        <title>Авторизация</title>
      </Head>
      <form className="mx-auto my-4" style={{ maxWidth: '500px' }}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Адрес электронной почты</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" className="form-text text-muted">
            Мы никогда никому не передадим Вашу электронную почту.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Пароль</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-dark w-100">
          Войти
        </button>
        <p className="my-2">
          Нет аккаунта?{' '}
          <Link href="/register">
            <a style={{ color: 'crimson' }}>Регистрация</a>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
