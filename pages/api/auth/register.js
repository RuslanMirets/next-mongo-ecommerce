import connectDB from '../../../utils/connectDB';
import Users from '../../../models/userModel';
import validation from '../../../utils/validation';
import bcrypt from 'bcrypt';

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case 'POST':
      await register(req, res);
      break;
  }
};

const register = async (req, res) => {
  try {
    const { name, email, password, cf_password } = req.body;

    const errMsg = validation(name, email, password, cf_password);
    if (errMsg) return res.status(400).json({ error: errMsg });

    const user = await Users.findOne({ email });
    if (user) return res.status(400).json({ error: 'Пользователь с таким email уже существует' });

    const passwordHash = await bcrypt.hash(password, 12);

    const newUser = new Users({ name, email, password: passwordHash, cf_password });

    await newUser.save();

    res.json({ msg: 'Успешная регистрация!' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
