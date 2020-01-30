import { Module } from '@nestjs/common';

import { ScrobbleController } from './scrobble/scrobble.controller';
import { ScrobbleService } from './scrobble/scrobble.service';

@Module({
  controllers: [ScrobbleController],
  providers: [ScrobbleService],
})
export class AppModule {}
