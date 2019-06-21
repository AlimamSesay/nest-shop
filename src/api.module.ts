import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { HttpErrorFilter } from './shared/http-error.filter';
import { UserModule } from './user/user.module';
import { CustomerModule } from './customer/customer.module';
import { ProductModule } from './product/product.module';


@Module({
  imports: [UserModule, CustomerModule, ProductModule],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter,
    }
  ],
  exports: [UserModule],
})
export class ApiModule { }
