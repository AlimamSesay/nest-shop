import { Controller, Get, Query, Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('api/products')
export class ProductController {
    constructor(private productService: ProductService) { }

    @Get()
    showAllProduct(@Query('page') page: number) {
        return this.productService.showAll(page);
    }

    @Get(':id')
    showOneProduct(@Param('id') id: number) {
        return this.productService.read(id);
    }
}
