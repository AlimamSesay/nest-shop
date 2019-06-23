import { Resolver, Query, Args } from '@nestjs/graphql';
import { CustomerService } from './customer.service';
import { Customer } from './customer';

@Resolver(of => Customer)
export class CustomerResolver {
    constructor(private customerService: CustomerService) { }

    @Query(returns => [Customer])
    async customers(@Args('page') page: number) {
        return await this.customerService.showAll(page);
    }

    @Query(returns => Customer)
    async customer(@Args('id') id: string) {
        return await this.customerService.read(id);
    }
}
