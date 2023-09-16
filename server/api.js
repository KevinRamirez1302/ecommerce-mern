import express from 'express'
const app = express()
import port from '../port.js'
const { PORT } = port
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)

const data = require('./products.json')

app.get('/', (req, res) => {
  res.json(data)
})

app.get('/Products/:id', (req, res) => {
  const id = req.params.id

  const product = data[0].productos.find((obj) => obj.id === id)
  res.json(product)
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
