import { Router } from 'express';
import {
  getProduct,
  getbyidProduct,
  deleteProduct,
  createProduct,
} from '../controllers/product.controller.js';

import { authRequired } from '../Middlewares/validateToken.js';

const router = Router();

router.get('/getProducts', authRequired, getProduct);

router.get('/Products/:id', authRequired, getbyidProduct);

router.post('/createProduct', authRequired, createProduct);

router.delete('/deleteProduct/:id', authRequired, deleteProduct);

export default router;
