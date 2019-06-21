import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { CategoryEntity, CustomerEntity } from 'src/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryRO } from './category.dto';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(CategoryEntity)
        private categoryRepository: Repository<CategoryEntity>,
        @InjectRepository(CustomerEntity)
        private customerRepository: Repository<CustomerEntity>,
    ) { }

    private categoryToResponseObject(category: CategoryEntity): CategoryRO {
        const responseObject: any = {
            ...category,
        };
        console.log('responseObject', responseObject)
        return responseObject;
    }

    async showAll(page: number = 1, newest?: boolean): Promise<CategoryRO[]> {
        const categories = await this.categoryRepository.find({
            take: 25,
            skip: 25 * (page - 1),
        });
        console.log('category', categories)
        return categories.map(category => this.categoryToResponseObject(category));
    }

    async read(id: number): Promise<CategoryRO> {
        const category = await this.categoryRepository.findOne({
            where: { id },
        });

        if (!category) {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }
        console.log('category', category)
        return this.categoryToResponseObject(category);
    }
}
