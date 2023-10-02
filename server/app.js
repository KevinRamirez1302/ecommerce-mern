import express from 'express'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
const app = express()
const PORT = process.env.PORT ?? 3000
import authRoutes from './Routes/auth.route.js'
import productRoutes from './Routes/product.route.js'
import { dbInfo } from './config.js'

app.use(express.json())
app.use(cookieParser())
app.use(authRoutes)
app.use(productRoutes)

mongoose.connect(
  `mongodb+srv://${dbInfo.user}:${dbInfo.password}@cluster0.xg7o66k.mongodb.net/${dbInfo.dbname}?retryWrites=true&w=majority`
)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
