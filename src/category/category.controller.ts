import { Controller, Get, Query, Param } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('api/categories')
export class CategoryController {
    constructor(private categoryService: CategoryService) { }

    @Get()
    showAllProduct(@Query('page') page: number) {
        return this.categoryService.showAll(page);
    }

    @Get(':id')
    showOneProduct(@Param('id') id: number) {
        return this.categoryService.read(id);
    }
}
