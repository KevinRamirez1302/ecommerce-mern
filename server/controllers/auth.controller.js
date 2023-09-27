import { userModel } from '../models/user.model.js';
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const newUser = new userModel({
      name,
      email,
      password,
    });

    res.json(newUser);
  } catch (err) {
    res.send(err);
  }
};

export const login = (req, res) => res.send('Login');
