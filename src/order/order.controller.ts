import { Controller, Get, Query, Param } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('api/orders')
export class OrderController {
    constructor(private orderService: OrderService) { }

    @Get()
    showAllProduct(@Query('page') page: number) {
        return this.orderService.showAll(page);
    }

    @Get(':id')
    showOneProduct(@Param('id') id: number) {
        return this.orderService.read(id);
    }
}
