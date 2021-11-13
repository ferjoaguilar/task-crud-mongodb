import {MongoClient} from 'mongodb'
import dotenv from 'dotenv'

dotenv.config({ path: '.env'})

const url:string = process.env.MONGODB as string
const client = new MongoClient(url)
const dbName:string=process.env.DATABASE as string

const database = async (collectionQuery:string) => {
  await client.connect()
  const db = client.db(dbName)
  const collection = db.collection(collectionQuery)
  return collection
}

export default database