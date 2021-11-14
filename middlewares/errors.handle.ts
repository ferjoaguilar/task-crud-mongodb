import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { MongoServerError } from 'mongodb';
import HttpException from '../libs/exceptions.libs';

export const handleErrors = (err: HttpException, req:Request, res:Response, next: NextFunction ) => {
  const statusCode = err.statusCode || 500
  const message = err.message || 'Internal error server'
  res.status(statusCode).json(message)
}

export const handleDatabaseErrors = (err: MongoServerError, req:Request, res:Response, next: NextFunction) => {
  if(err) {
    return res.status(409).json({ message: err.errmsg})
  }
  next()
}