import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ProductEntity } from 'src/entities';
import { ProductRO } from './product.dto';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductEntity)
        private productRepository: Repository<ProductEntity>,
    ) { }

    private productToResponseObject(product: ProductEntity): ProductRO {
        const responseObject: any = {
            ...product,
        };
        return responseObject;
    }

    async showAll(page: number = 1, newest?: boolean): Promise<ProductRO[]> {
        const products = await this.productRepository.find({
            take: 25,
            skip: 25 * (page - 1),
        });
        return products.map(product => this.productToResponseObject(product));
    }

    async read(id: number): Promise<ProductRO> {
        const product = await this.productRepository.findOne({
            where: { product_id: id },
        });

        if (!product) {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }
        return this.productToResponseObject(product);
    }
}
