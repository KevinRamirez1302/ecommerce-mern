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
  const { name, price, image, description } = req.body;

  const newProduct = new productModel({
    name,
    description,
    price,
    image,
  });

  await newProduct.save();
  res.send('Product save');
};

export const getbyidProduct = async (req, res) => {
  const id = req.params.id;
  const product = await productModel.findById(id);
  if (!product) res.status(404).json('Document not found');
  res.json(product);
};

export const deleteProduct = async (req, res) => {
  const deleted = await productModel.findByIdAndDelete(req.params.id);

  if (!deleted) return res.status(404).json({ message: 'Product not found' });

  return res.status(203);
};
