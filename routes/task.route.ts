import express, { NextFunction, Request, Response } from 'express'
import Tasks from '../services/task.service'

const router = express.Router()
const service = new Tasks()

router.post('/', async (req:Request, res:Response, next:NextFunction) => {
  try {
    const response = await service.created(req.body)
    return res.status(201).json(response)
  } catch (error) {
    next(error)
  }
})

router.get('/', async (req:Request, res:Response, next:NextFunction)=> {
  try {
    const response = await service.getTasks()
    return res.status(200).json(response)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req:Request, res:Response, next:NextFunction) => {
 try {
  const response = await service.getTask(req.params.id)
  return res.status(200).json(response)
 } catch (error) {
   next(error)
 }
})

router.patch('/:id', async (req:Request, res:Response, next:NextFunction) => {
  try {
    const response = await service.edit(req.params.id, req.body)
    return res.status(200).json(response)
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req:Request, res:Response, next:NextFunction) => {
  try {
    const response = await service.delete(req.params.id)
    return res.status(200).json(response)
  } catch (error) {
    next(error)
  }
})

export default router