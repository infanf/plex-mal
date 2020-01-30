import { Test, TestingModule } from '@nestjs/testing';

import { ScrobbleController } from './scrobble.controller';

describe('Scrobble Controller', () => {
  let controller: ScrobbleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScrobbleController],
    }).compile();

    controller = module.get<ScrobbleController>(ScrobbleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
