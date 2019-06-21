import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { OrdersEntity } from 'src/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderRO } from './order.dto';

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(OrdersEntity)
        private orderRepository: Repository<OrdersEntity>,
    ) { }

    private ordersToResponseObject(departmen: OrdersEntity): OrderRO {
        const responseObject: any = {
            ...departmen,
        };
        console.log('responseObject', responseObject)
        return responseObject;
    }

    async showAll(page: number = 1, newest?: boolean): Promise<OrderRO[]> {
        const orders = await this.orderRepository.find({
            take: 25,
            skip: 25 * (page - 1),
        });
        console.log('orders', orders)
        return orders.map(order => this.ordersToResponseObject(order));
    }

    async read(id: number): Promise<OrderRO> {
        const order = await this.orderRepository.findOne({
            where: { order_id: id },
        });

        if (!order) {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }
        console.log('order', order)
        return this.ordersToResponseObject(order);
    }
}
