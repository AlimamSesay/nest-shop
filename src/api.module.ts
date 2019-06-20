import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { HttpErrorFilter } from './shared/http-error.filter';
import { UserModule } from './user/user.module';
import { CustomerModule } from './customer/customer.module';


@Module({
  imports: [UserModule, CustomerModule],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter,
    }
  ],
  exports: [UserModule],
})
export class ApiModule { }
