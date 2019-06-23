import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { DepartmentEntity } from 'src/entities';
import { Repository } from 'typeorm';
import { DepartmentRO } from './department.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DepartmentService {
    constructor(
        @InjectRepository(DepartmentEntity)
        private departmentRepository: Repository<DepartmentEntity>,
    ) { }

    private departmentToResponseObject(departmen: DepartmentEntity): DepartmentRO {
        const responseObject: any = {
            ...departmen,
        };
        return responseObject;
    }

    async showAll(page: number = 1, newest?: boolean): Promise<DepartmentRO[]> {
        const departments = await this.departmentRepository.find({
            take: 25,
            skip: 25 * (page - 1),
        });
        return departments.map(departmen => this.departmentToResponseObject(departmen));
    }

    async read(id: number): Promise<DepartmentRO> {
        const department = await this.departmentRepository.findOne({
            where: { department_id: id },
        });

        if (!department) {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }
        return this.departmentToResponseObject(department);
    }
}
