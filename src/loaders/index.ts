import 'reflect-metadata';

import Logger from './logger';
import expressLoader from './express';

export default async () => {
  const expressApp = expressLoader();
  Logger.info('✌️ Express loaded');

  return {
    expressApp
  }
};
