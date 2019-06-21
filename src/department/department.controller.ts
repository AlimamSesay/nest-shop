import { Controller, Get, Query, Param } from '@nestjs/common';
import { DepartmentService } from './department.service';

@Controller('api/departments')
export class DepartmentController {
    constructor(private departmentService: DepartmentService) { }

    @Get()
    showAllDepartments(@Query('page') page: number) {
        return this.departmentService.showAll(page);
    }

    @Get(':id')
    showOneDepartment(@Param('id') id: number) {
        return this.departmentService.read(id);
    }
}
