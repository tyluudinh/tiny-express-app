import 'reflect-metadata'; // We need this in order to use srcDecorators

import configs from '@app/configs';

import loader from '@app/loaders';

import Logger from '@app/loaders/logger';

async function startServer() {
  const { expressApp } = await loader();
  expressApp
    .listen(configs.port, () => {
      Logger.info(`
      #################################################
      🛡️  Server listening on port: ${configs.port} 🛡️ at ${new Date().toISOString()}
      #################################################
    `);
    })
    .on('error', err => {
      Logger.error(err);
      process.exit(1);
    });
}

startServer();
