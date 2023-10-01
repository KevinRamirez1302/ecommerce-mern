import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  Image: String
})

export const productModel = mongoose.model('Product', productSchema)
