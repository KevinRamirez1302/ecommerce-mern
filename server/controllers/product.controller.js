import { productModel } from '../models/product.js'

export const getProduct = async (req, res) => {
  await productModel.find().then((err, result) => {
    if (err) {
      res.json(err)
    } else {
      res.json(result)
    }
  })
}

export const getbyidProduct = async (req, res) => {
  const id = req.params.id
  const product = await productModel.find({ id: id })
  res.json(product)
}
