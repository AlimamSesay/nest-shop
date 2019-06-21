import { Module } from '@nestjs/common';
import { ShippingController } from './shipping.controller';
import { ShippingService } from './shipping.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShippingEntity } from 'src/entities';

@Module({
  imports: [TypeOrmModule.forFeature([ShippingEntity])],
  controllers: [ShippingController],
  providers: [ShippingService]
})
export class ShippingModule { }
