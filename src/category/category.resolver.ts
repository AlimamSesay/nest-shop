import { Resolver, Query, Args } from '@nestjs/graphql';
import { Category } from './category';
import { CategoryService } from './category.service';

@Resolver('Category')
export class CategoryResolver {
    constructor(private categoryrService: CategoryService) { }

    @Query(returns => [Category])
    async categories(@Args('page') page: number) {
        return await this.categoryrService.showAll(page);
    }

    @Query(returns => Category)
    async category(@Args('id') id: number) {
        return await this.categoryrService.read(id);
    }
}
