import { Injectable } from '@nestjs/common';

import { logger } from '../core/logger';

@Injectable()
export class ScrobbleService {
  async scrobble(data: unknown) {
    logger.info(data);
  }
}
