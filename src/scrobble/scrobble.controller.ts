import { Body, Controller, Param, Post, Put } from '@nestjs/common';

import { ScrobbleService } from './scrobble.service';

@Controller('scrobble')
export class ScrobbleController {
  constructor(private readonly scrobbleService: ScrobbleService) {}
  @Post(':authtoken')
  async scrobble(@Param('authtoken') token: string, @Body() data: unknown) {
    this.scrobbleService.scrobble(data);
  }
  @Put(':authtoken')
  async scrobblePut(@Param('authtoken') token: string, @Body() data: unknown) {
    this.scrobbleService.scrobble(data);
  }
}
