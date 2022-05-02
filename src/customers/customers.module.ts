import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { customersController } from './customers.controller';
import { customersService } from './customers.service';
import { CustomerORM } from './typeorm/CustomerORM';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerORM])],
  controllers: [customersController],
  providers: [customersService]
})
export class customersModule {}
