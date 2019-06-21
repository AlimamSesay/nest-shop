import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersEntity } from 'src/entities';

@Module({
  imports: [TypeOrmModule.forFeature([OrdersEntity])],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule { }
