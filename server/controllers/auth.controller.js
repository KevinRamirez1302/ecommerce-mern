import { userModel } from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import { createAccessToken } from '../Libs/jwt.js'

export const register = async (req, res) => {
  const { name, email, password } = req.body
  try {
    const passwordHash = await bcrypt.hash(password, 10)

    const newUser = new userModel({
      name,
      email,
      password: passwordHash
    })

    const saveUser = await newUser.save()
    const token = await createAccessToken({ id: saveUser._id })
    res.cookie('token', token)

    res.json({
      id: saveUser._id,
      name: saveUser.name,
      email: saveUser.email
    })
  } catch (err) {
    res.send(err)
  }
}

export const login = (req, res) => {
  const { email, password } = req.body
}
