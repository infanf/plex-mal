import { Controller, Param, Post, Request } from '@nestjs/common';
import * as Busboy from 'busboy';
import { Request as Req } from 'express';
import { inspect } from 'util';

import { ScrobbleService } from './scrobble.service';

@Controller('scrobble')
export class ScrobbleController {
  constructor(private readonly scrobbleService: ScrobbleService) {}
  @Post(':authtoken')
  async scrobble(@Param('authtoken') token: string, @Request() req: Req) {
    const busboy = new Busboy({ headers: req.headers });
    busboy.on('field', (fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) => {
      this.scrobbleService.scrobble(inspect(val));
    });
    req.pipe(busboy);
  }
}
