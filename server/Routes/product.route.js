import { Router } from 'express'
import {
  getProduct,
  getbyidProduct
} from '../controllers/product.controller.js'

const router = Router()

router.get('/getProducts', getProduct)

router.get('/Products/:id', getbyidProduct)

export default router
