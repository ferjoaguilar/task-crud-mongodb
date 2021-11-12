import express, { Request, Response } from 'express'

const router = express.Router()

router.get('/', (req:Request, res:Response) => {
  res.send('Tasks running...')
})

export default router