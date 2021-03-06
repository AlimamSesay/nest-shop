import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { HttpErrorFilter } from './shared/http-error.filter';
import { CustomerModule } from './customer/customer.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { DepartmentModule } from './department/department.module';
import { OrderModule } from './order/order.module';
import { ShippingModule } from './shipping/shipping.module';



@Module({
  imports: [CustomerModule, ProductModule, CategoryModule, DepartmentModule, OrderModule, ShippingModule],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter,
    },
  ],
  exports: [],
})
export class ApiModule { }
