import express from 'express'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import { Db } from 'mongodb'
import cors from 'cors'
const app = express()
const PORT = process.env.PORT ?? 3000
import authRoutes from './Routes/auth.route.js'
import taskRoutes from './Routes/tasks.route.js'
import productRoutes from './Routes/product.route.js'
import { connnectDB } from './Db.js'

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(taskRoutes)
app.use(authRoutes)
app.use(productRoutes)

connnectDB()
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
