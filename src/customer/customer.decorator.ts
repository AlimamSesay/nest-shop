import { createParamDecorator } from '@nestjs/common';

export const Customer = createParamDecorator((data, req) => {
  return data ? req.customer[data] : req.customer;
});
