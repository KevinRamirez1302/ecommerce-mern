import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String
})

export const productModel = mongoose.model('Product', productSchema)
