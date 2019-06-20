import { IsNotEmpty } from 'class-validator';

export class CustomerDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}

export class CustomerRO {
  customer_id: number;
  name: string;
  email: string;
  token?: string;
}
