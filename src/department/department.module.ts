import { Module } from '@nestjs/common';
import { DepartmentController } from './department.controller';
import { DepartmentService } from './department.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentEntity } from 'src/entities';

@Module({
  imports: [TypeOrmModule.forFeature([DepartmentEntity])],
  controllers: [DepartmentController],
  providers: [DepartmentService]
})
export class DepartmentModule { }
