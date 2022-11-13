import { Middleware, ExpressErrorMiddlewareInterface, HttpError } from 'routing-controllers';

import { Request, Response, NextFunction } from 'express';

@Middleware({ type: 'after' })
export class ErrorMiddleware implements ExpressErrorMiddlewareInterface {
  error(error: any, req: Request, res: Response, next: NextFunction) {

    if (error instanceof HttpError) {
      res.status(error.httpCode)
      .json({
        ...error,
      })
      return;
    }
    next();
  }
}