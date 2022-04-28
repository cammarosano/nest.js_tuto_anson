import { Test, TestingModule } from '@nestjs/testing';
import { customersService } from './customers.service';

describe('customersService', () => {
  let service: customersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [customersService],
    }).compile();

    service = module.get<customersService>(customersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
