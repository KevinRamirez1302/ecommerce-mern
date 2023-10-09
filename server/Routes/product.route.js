import { Router } from 'express';
import {
  getProduct,
  getbyidProduct,
  deleteProduct,
  createProduct,
} from '../controllers/product.controller.js';

import { authRequired } from '../Middlewares/validateToken.js';

const router = Router();

router.get('/getProducts', getProduct);

router.get('/Products/:id', getbyidProduct);

router.post('/createProduct', createProduct);

router.delete('/deleteProduct/:id', authRequired, deleteProduct);

export default router;
