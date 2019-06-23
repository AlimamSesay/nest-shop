import { Resolver, Query, Args } from '@nestjs/graphql';
import { Department } from './department';
import { DepartmentService } from './department.service';

@Resolver('Department')
export class DepartmentResolver {
    constructor(private departmentService: DepartmentService) { }

    @Query(returns => [Department])
    async departments(@Args('page') page: number) {
        return await this.departmentService.showAll(page);
    }

    @Query(returns => Department)
    async department(@Args('id') id: number) {
        return await this.departmentService.read(id);
    }
}
