import { Response } from 'express';
import { ZodError } from 'zod';
import HttpStatusCode from '../http/model/status_code';
import { JsonWebTokenError } from 'jsonwebtoken';



export function HandleApiError(res: Response, error: any) {
  if (error instanceof ZodError || error instanceof JsonWebTokenError) {
    res.json({
      error: error.message,
    }).status(HttpStatusCode.BAD_REQUEST)
    return;
  }


  res.json({
    error: error?.toString(),
  }).status(HttpStatusCode.INTERNAL_SERVER_ERROR);
}