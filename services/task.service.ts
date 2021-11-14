import { ObjectId } from 'bson';
import { Itask } from "../interfaces/Itasks.interface";
import database from "../libs/database.libs";
import HttpException from '../libs/exceptions.libs';

class Tasks {
  async created(task:Itask) {
    const insertResult = await (await database('tasks'))
    .insertOne({title: task.title, description:task.description, corelative: task.corelative})
    return insertResult
  }

  async getTasks() {
    const findResult = await (await database('tasks')).find().toArray()
    return findResult
  }

  async getTask(id: string) {
    const params = new ObjectId(id)
    const findResult = await (await database('tasks')).findOne({ _id: params })
    if (findResult === null) {
      throw new HttpException(404, 'Taks not found')
    }
    return findResult
  }

  async edit(id:string, task:Itask) {
    const params = new ObjectId(id)
    const updateResult = await (await database('tasks'))
    .updateOne({_id: params}, {$set: {title: task.title, description: task.description}})
    if (updateResult.upsertedId === null) {
      throw new HttpException(404, 'Taks not found')
    }
    return updateResult
  }

  async delete(id:string) {
    const params = new ObjectId(id)
    const deleteResult = await (await database('tasks')).deleteOne({_id: params})
    if (deleteResult.deletedCount === 0) {
      throw new HttpException(404, 'Task not found')
    }
    return deleteResult
  }
}

export default Tasks