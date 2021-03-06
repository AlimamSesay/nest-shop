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
    ) { }

    private categoryToResponseObject(category: CategoryEntity): CategoryRO {
        const responseObject: any = {
            ...category,
        };
        return responseObject;
    }

    async showAll(page: number = 1, newest?: boolean): Promise<CategoryRO[]> {
        const categories = await this.categoryRepository.find({
            take: 25,
            skip: 25 * (page - 1),
        });
        return categories.map(category => this.categoryToResponseObject(category));
    }

    async read(id: number): Promise<CategoryRO> {
        const category = await this.categoryRepository.findOne({
            where: { category_id: id },
        });

        if (!category) {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }
        return this.categoryToResponseObject(category);
    }
}
