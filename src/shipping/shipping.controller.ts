import { Controller, Get, Query, Param } from '@nestjs/common';
import { ShippingService } from './shipping.service';

@Controller('api/shipping')
export class ShippingController {
    constructor(private shippingService: ShippingService) { }

    @Get()
    showAllProduct(@Query('page') page: number) {
        return this.shippingService.showAll(page);
    }

    @Get(':id')
    showOneProduct(@Param('id') id: number) {
        return this.shippingService.read(id);
    }
}
