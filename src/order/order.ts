import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class Order {
    @Field(type => ID)
    order_id: number;

    @Field()
    total_amount: string;

    @Field()
    created_on: Date;

    @Field({ defaultValue: 0 })
    status: number;

    @Field({ nullable: true })
    shipped_on?: Date

    @Field({ nullable: true })
    comments?: string

    @Field({ nullable: true })
    customer_id?: number;

    @Field({ nullable: true })
    auth_code?: string

    @Field({ nullable: true })
    reference?: string

    @Field({ nullable: true })
    shipping_id?: number;

    @Field({ nullable: true })
    tax_id?: number;
}