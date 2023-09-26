import { userModel } from '../models/user.model.js'
export const register = (req, res) => {
  res.send('hola')
  console.log(req.body)
}

export const login = (req, res) => res.send('Login')
