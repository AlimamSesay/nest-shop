import { Resolver, Query, Args } from '@nestjs/graphql';
import { Order } from './order';
import { OrderService } from './order.service';

@Resolver('Order')
export class OrderResolver {
    constructor(private orderService: OrderService) { }

    @Query(returns => [Order])
    async orders(@Args('page') page: number) {
        return await this.orderService.showAll(page);
    }

    @Query(returns => Order)
    async order(@Args('id') id: number) {
        return await this.orderService.read(id);
    }
}
