import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { LoggerMiddleware } from './logger.middleware';
import { ScrobbleController } from './scrobble/scrobble.controller';
import { ScrobbleService } from './scrobble/scrobble.service';

@Module({
  controllers: [ScrobbleController],
  providers: [ScrobbleService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('/');
  }
}
