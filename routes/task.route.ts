import express, { Request, Response } from 'express'
import Tasks from '../services/task.service'

const router = express.Router()
const service = new Tasks()

router.post('/', async (req:Request, res:Response) => {
  const response = await service.created(req.body)
  return res.status(201).json(response)
})

router.get('/', async (req:Request, res:Response)=> {
  const response = await service.getTasks()
  return res.status(200).json(response)
})

router.get('/:id', async (req:Request, res:Response) => {
  const response = await service.getTask(req.params.id)
  return res.status(200).json(response)
})

router.patch('/:id', async (req:Request, res:Response) => {
  const response = await service.edit(req.params.id, req.body)
  return res.status(200).json(response)
})

router.delete('/:id', async (req:Request, res:Response) => {
  const response = await service.delete(req.params.id)
  return res.status(200).json(response)
})

export default router