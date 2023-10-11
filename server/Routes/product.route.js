import { Router } from 'express'
import {
  getProduct,
  getbyidProduct,
  deleteProduct,
  createProduct
} from '../controllers/product.controller.js'
import { authRequired } from '../Middlewares/validateToken.js'
import { productsChema } from '../schemas/product.schema.js'
import { validateSchema } from '../Middlewares/validator.auth.js'

const router = Router()

router.get('/getProducts', getProduct)

router.get('/Products/:id', getbyidProduct)

router.post('/createProduct',validateSchema(productsChema),createProduct)

router.delete('/deleteProduct/:id', authRequired, deleteProduct)

export default router
