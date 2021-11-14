import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import HttpException from '../libs/exceptions.libs';

export const handleErrors = (err: HttpException, req:Request, res:Response, next: NextFunction ) => {
  const statusCode = err.statusCode || 500
  const message = err.message || 'Internal error server'
  res.status(statusCode).json(message)
}