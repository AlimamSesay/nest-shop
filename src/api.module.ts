import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { HttpErrorFilter } from './shared/http-error.filter';
import { UserModule } from './user/user.module';
import { CustomerModule } from './customer/customer.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { DepartmentModule } from './department/department.module';


@Module({
  imports: [UserModule, CustomerModule, ProductModule, CategoryModule, DepartmentModule],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter,
    }
  ],
  exports: [UserModule],
})
export class ApiModule { }
