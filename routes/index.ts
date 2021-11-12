import express from 'express'
import taksRoute from './task.route'


const routerApi = (app:express.Application) => {
  const router = express.Router()
  app.use('/api/v1', router)
  router.use('/tasks', taksRoute)
}

export default routerApi