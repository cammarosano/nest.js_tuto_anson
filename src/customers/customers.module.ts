import { Module } from '@nestjs/common';
import { customersController } from './customers.controller';
import { customersService } from './customers.service';

@Module({
  controllers: [customersController],
  providers: [customersService]
})
export class customersModule {}
