import { Resolver, Query, Args } from '@nestjs/graphql';
import { Shipping } from './shipping';
import { ShippingService } from './shipping.service';

@Resolver('Shipping')
export class ShippingResolver {
    constructor(private shippingService: ShippingService) { }

    @Query(returns => [Shipping])
    async shippings(@Args('page') page: number) {
        return await this.shippingService.showAll(page);
    }

    @Query(returns => Shipping)
    async shipping(@Args('id') id: number) {
        return await this.shippingService.read(id);
    }
}
