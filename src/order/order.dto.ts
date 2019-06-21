export class OrderRO {
  order_id: number;
  total_amount: string;
  created_on: Date;
  shipped_on?: Date;
  status: number;
  comments?: string;
  customer_id?: number;
  auth_code?: string;
  reference?: string;
  shipping_id?: number;
  tax_id?: number;
}