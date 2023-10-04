import { Router } from 'express'
import { authRequired } from '../Middlewares/validateToken.js'
import {
  getTask,
  getTaskById,
  TaskDelete,
  updateTask,
  createTask
} from '../controllers/task.controller.js'
const router = Router()

router.get('/tasks', authRequired, getTask)
router.get('/tasks:id', authRequired, getTaskById)
router.post('/tasks', authRequired, createTask)
router.delete('/tasks:id', authRequired, TaskDelete)
router.put('/tasks:id', authRequired, updateTask)

export default router
