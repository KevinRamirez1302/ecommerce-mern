import { Router } from 'express'
import { authRequired } from '../Middlewares/validateToken.js'
const router = Router()

router.get('/tasks', authRequired, (req, res) => res.send('Todo bien'))

export default router
