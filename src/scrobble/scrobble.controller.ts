import { Controller, Param, Post, UploadedFile } from '@nestjs/common';

import { ScrobbleService } from './scrobble.service';

@Controller('scrobble')
export class ScrobbleController {
  constructor(private readonly scrobbleService: ScrobbleService) {}
  @Post(':authtoken')
  async scrobble(@Param('authtoken') token: string, @UploadedFile() data: unknown) {
    this.scrobbleService.scrobble(data);
  }
}
