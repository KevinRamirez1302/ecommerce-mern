import express from 'express'
import mongoose from 'mongoose'
const app = express()
const PORT = process.env.PORT ?? 3000
import { createRequire } from 'node:module'
import { productModel } from '../server/Database/models/product.js'
const require = createRequire(import.meta.url)

mongoose.connect(
  'mongodb+srv://KevinAlexander13:Aka13020303@cluster0.xg7o66k.mongodb.net/SellAll?retryWrites=true&w=majority'
)

const data = require('./products.json')

app.get('/getProducts', (req, res) => {
  productModel.find().then((err, result) => {
    if (err) {
      res.json(err)
    } else {
      res.json(result)
    }
  })
})

app.get('/Products/:id', (req, res) => {
  const id = req.params.id

  const product = data[0].productos.find((obj) => obj.id === id)
  res.json(product)
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
