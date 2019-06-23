import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity, CustomerEntity } from 'src/entities';
import { ProductResolver } from './product.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerEntity, ProductEntity])],
  controllers: [ProductController],
  providers: [ProductService, ProductResolver]
})
export class ProductModule { }
