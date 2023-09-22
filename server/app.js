import express from 'express'
import mongoose from 'mongoose'
const app = express()
const PORT = process.env.PORT ?? 3000
import { createRequire } from 'node:module'
import { productModel } from './models/product.js'
const require = createRequire(import.meta.url)
import authRoutes from './Routes/auth.route.js'

const user = 'KevinAlexander13'
const password = 'Aka13020303'
const dbname = 'SellAll'

mongoose.connect(
  `mongodb+srv://${user}:${password}@cluster0.xg7o66k.mongodb.net/${dbname}?retryWrites=true&w=majority`
)

app.use(authRoutes)

app.get('/getProducts', async (req, res) => {
  await productModel.find().then((err, result) => {
    if (err) {
      res.json(err)
    } else {
      res.json(result)
    }
  })
})

app.get('/Products/:id', async (req, res) => {
  const id = req.params.id
  const product = await productModel.find({ id: id })
  res.json(product)
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
