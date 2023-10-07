import { productModel } from '../models/product.js';

export const getProduct = async (req, res) => {
  await productModel.find().then((err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
};

export const createProduct = async (req, res) => {
  console.log(req.body);
};

export const getbyidProduct = async (req, res) => {
  const id = req.params.id;
  const product = await productModel.find({ id: id });
  res.json(product);
};

export const deleteProduct = async (req, res) => {
  const deleted = await productModel.findByIdAndDelete(req.params.id);

  if (!deleted) return res.status(404).json({ message: 'Product not found' });

  return res.status(203);
};
