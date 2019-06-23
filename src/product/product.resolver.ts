import { Resolver, Query, Args } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product } from './product';

@Resolver('Product')
export class ProductResolver {
    constructor(private productService: ProductService) { }

    @Query(returns => [Product])
    async products(@Args('page') page: number) {
        return await this.productService.showAll(page);
    }

    @Query(returns => Product)
    async product(@Args('id') id: number) {
        return await this.productService.read(id);
    }
}
