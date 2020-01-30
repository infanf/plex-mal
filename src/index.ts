import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { logger } from './core/logger';

logger.info(`Starting up`);
logger.info(`NODE_ENV=${process.env.NODE_ENV}`, `LOG_LEVEL=${process.env.LOG_LEVEL}`);

(async () => {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
})().catch(err => {
  logger.error(`Fatal error during startup`, err);
  process.exit(1);
});
