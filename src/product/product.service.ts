import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CustomerEntity } from 'src/entities';
import { ProductEntity } from 'src/entities';
import { ProductRO } from './product.dto';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductEntity)
        private productRepository: Repository<ProductEntity>,
        @InjectRepository(CustomerEntity)
        private customerRepository: Repository<CustomerEntity>,
    ) { }

    private productToResponseObject(product: ProductEntity): ProductRO {
        const responseObject: any = {
            ...product,
        };
        console.log('responseObject', responseObject)
        return responseObject;
    }

    async showAll(page: number = 1, newest?: boolean): Promise<ProductRO[]> {
        const products = await this.productRepository.find({
            take: 25,
            skip: 25 * (page - 1),
        });
        console.log('product', products)
        return products.map(product => this.productToResponseObject(product));
    }

    async read(id: number): Promise<ProductRO> {
        const product = await this.productRepository.findOne({
            where: { product_id: id },
        });

        if (!product) {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }
        console.log('product', product)
        return this.productToResponseObject(product);
    }
}
