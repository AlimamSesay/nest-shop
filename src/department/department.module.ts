import { Module } from '@nestjs/common';
import { DepartmentController } from './department.controller';
import { DepartmentService } from './department.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentEntity } from 'src/entities';
import { DepartmentResolver } from './department.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([DepartmentEntity])],
  controllers: [DepartmentController],
  providers: [DepartmentService, DepartmentResolver]
})
export class DepartmentModule { }
