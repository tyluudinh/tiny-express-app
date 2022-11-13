import 'reflect-metadata';
import { Application, Request, Response } from 'express';
import config from '@app/configs';
import { createExpressServer } from 'routing-controllers';
import { dirname } from 'path';

const appDir = dirname(require.main?.filename as string);

export default (): Application => {

  const app = createExpressServer({
    routePrefix: config.api.prefix,
    classTransformer: true,
    defaultErrorHandler: false,
    controllers: [appDir + '/modules/**/*.controller{.js,.ts}'],
    interceptors: [appDir + '/interceptors/*Interceptor{.js,.ts}'],
    middlewares: [appDir + '/middlewares/*Middleware{.js,.ts}'],
  });

  app.get('/status', (req: Request, res: Response) => {
    res.status(200).send(`Are you ok ok ok, you can clap clap with me in the classroom`);
  });
  app.head('/status', (req: Request, res: Response) => {
    res.status(200).end();
  });

  return app;

};
