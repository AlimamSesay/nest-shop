import {
    Controller,
    Get,
    Post,
    UsePipes,
    Body,
    Query,
    Param,
    UseGuards,
} from '@nestjs/common';

import { ValidationPipe } from '../shared/validation.pipe';
import { AuthGuard } from '../shared/auth.gaurd';
import { CustomerService } from './customer.service';
import { CustomerDTO } from './customer.dto';
import { Customer } from './customer.decorator';

@Controller()
export class CustomerController {
    constructor(private customerService: CustomerService) { }

    @Get('api/customers')
    showAllCustomers(@Query('page') page: number) {
        return this.customerService.showAll(page);
    }

    @Get('api/users/:id')
    showOneCustomer(@Param('id') id: string) {
        return this.customerService.read(id);
    }

    @Get('auth/whoami')
    @UseGuards(new AuthGuard())
    showMe(@Customer('email') email: string) {
        return this.customerService.read(email);
    }

    @Post('auth/login')
    @UsePipes(new ValidationPipe())
    login(@Body() data: Partial<CustomerDTO>) {
        return this.customerService.login(data);
    }

    @Post('auth/register')
    @UsePipes(new ValidationPipe())
    register(@Body() data: CustomerDTO) {
        return this.customerService.register(data);
    }
}