const validation = (name, email, password, cf_password) => {
  if (!name || !email || !password) return 'Заполните все поля';

  if (!validateEmail(email)) return 'Некорректный email';

  if (password.length < 6) return 'Пароль должен быть больше 6 символов';

  if (password !== cf_password) return 'Пароль должен совпадать';
};

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export default validation;
