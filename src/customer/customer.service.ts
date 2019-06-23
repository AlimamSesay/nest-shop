import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CustomerEntity } from 'src/entities';
import { CustomerDTO } from './customer.dto';

@Injectable()
export class CustomerService {
    constructor(
        @InjectRepository(CustomerEntity)
        private customerRepository: Repository<CustomerEntity>,
    ) { }

    async showAll(page: number = 1) {
        const customers = await this.customerRepository.find({
            take: 25,
            skip: 25 * (page - 1),
        });
        return customers.map(customer => customer.toResponseObject());
    }

    async read(email: string) {
        const customer = await this.customerRepository.findOne({
            where: { email }
        });
        if (!customer) {
            throw new HttpException(
                'No Customer Found',
                HttpStatus.NOT_FOUND,
            );
        }
        return customer.toResponseObject();
    }

    async login(data: Partial<CustomerDTO>) {
        const { email, password } = data;
        const customer = await this.customerRepository.findOne({ where: { email } });
        if (!customer || !(await customer.comparePassword(password))) {
            throw new HttpException(
                'Invalid customer/password',
                HttpStatus.BAD_REQUEST,
            );
        }
        return customer.toResponseObject(true);
    }

    async register(data: CustomerDTO) {
        const { email } = data;
        let customer = await this.customerRepository.findOne({ where: { email } });
        if (customer) {
            throw new HttpException('customer already exists', HttpStatus.BAD_REQUEST);
        }
        customer = await this.customerRepository.create(data);
        await this.customerRepository.save(customer);
        return customer.toResponseObject(true);
    }
}