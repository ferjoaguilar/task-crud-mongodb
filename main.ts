import express from 'express'
import dotenv from 'dotenv'
import routerApi from './routes'
import { handleDatabaseErrors, handleErrors } from './middlewares/errors.handle'

const app:express.Application = express()
dotenv.config({ path: '.env'})

app.use(express.json())

routerApi(app)


app.use(handleDatabaseErrors)
app.use(handleErrors)

const main = (port:number = Number(process.env.PORT) || 4000) => {
  try {
    app.listen(port)
  } catch (error) {
    throw new Error(`Express server error ${error}`)   
  }
}

main()