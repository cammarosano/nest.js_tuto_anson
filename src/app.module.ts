import { Module } from '@nestjs/common';
import { customersModule } from './customers/customers.module';

@Module({
  imports: [customersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
