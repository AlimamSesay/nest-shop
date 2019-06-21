import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity, CategoryEntity } from 'src/entities';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerEntity, CategoryEntity])],
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CategoryModule { }
