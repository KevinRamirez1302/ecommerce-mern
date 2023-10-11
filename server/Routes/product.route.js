import { Router } from 'express';
import {
  getProduct,
  getbyidProduct,
  deleteProduct,
<<<<<<< HEAD
  createProduct
} from '../controllers/product.controller.js'
import { authRequired } from '../Middlewares/validateToken.js'
=======
  createProduct,
} from '../controllers/product.controller.js';

import { authRequired } from '../Middlewares/validateToken.js';
>>>>>>> e6ad4352465d8f7f900cfdb414516350caf444e2

const router = Router();

router.get('/getProducts', getProduct);

router.get('/Products/:id', getbyidProduct);

router.post('/createProduct', createProduct);

router.delete('/deleteProduct/:id', authRequired, deleteProduct);

export default router;
