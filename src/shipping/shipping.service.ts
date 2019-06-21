import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ShippingEntity } from 'src/entities';
import { ShippingRO } from './shipping.dto';

@Injectable()
export class ShippingService {
    constructor(
        @InjectRepository(ShippingEntity)
        private shippingRepository: Repository<ShippingEntity>,
    ) { }

    private shippingToResponseObject(shipping: ShippingEntity): ShippingRO {
        const responseObject: any = {
            ...shipping,
        };
        console.log('responseObject', responseObject)
        return responseObject;
    }

    async showAll(page: number = 1, newest?: boolean): Promise<ShippingRO[]> {
        const shipping = await this.shippingRepository.find({
            take: 25,
            skip: 25 * (page - 1),
        });
        console.log('shipping', shipping)
        return shipping.map(shipping => this.shippingToResponseObject(shipping));
    }

    async read(id: number): Promise<ShippingRO> {
        const shipping = await this.shippingRepository.findOne({
            where: { shipping_id: id },
        });

        if (!shipping) {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }
        console.log('shipping', shipping)
        return this.shippingToResponseObject(shipping);
    }
}
