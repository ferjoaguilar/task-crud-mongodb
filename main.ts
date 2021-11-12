import express from 'express'
import dotenv from 'dotenv'

const app:express.Application = express()
dotenv.config({ path: '.env'})

app.use(express.json())

app.get('/', (req, res) => {
  res.send('REST working!!!')
})

const main = (port:number = Number(process.env.PORT) || 4000) => {
  try {
    app.listen(port)
  } catch (error) {
    throw new Error(`Express server error ${error}`)   
  }
}

main()