import { Test, TestingModule } from '@nestjs/testing';

import { ScrobbleService } from './scrobble.service';

describe('ScrobbleService', () => {
  let service: ScrobbleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScrobbleService],
    }).compile();

    service = module.get<ScrobbleService>(ScrobbleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
