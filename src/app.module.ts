import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { customersModule } from './customers/customers.module';
import { CustomerORM } from './customers/typeorm/CustomerORM';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'postgres',
      entities: [CustomerORM],
      synchronize: true // do not use in production!
    }),
    customersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
