import { Test, TestingModule } from '@nestjs/testing';
import { customersController } from './customers.controller';

describe('customersController', () => {
  let controller: customersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [customersController],
    }).compile();

    controller = module.get<customersController>(customersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
