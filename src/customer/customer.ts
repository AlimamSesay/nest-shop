import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class Customer {
    @Field(type => ID)
    customer_id: number;

    @Field()
    name: string;

    @Field()
    email: string;

    @Field({ nullable: true })
    address_1?: string

    @Field({ nullable: true })
    address_2?: string

    @Field({ nullable: true })
    city?: string;

    @Field({ nullable: true })
    region?: string;

    @Field({ nullable: true })
    postal_code?: string;

    @Field({ nullable: true })
    country?: string;

    @Field({ defaultValue: 1 })
    shipping_region_id: number;

    @Field({ nullable: true })
    day_phone?: string;

    @Field({ nullable: true })
    eve_phone?: string;

    @Field({ defaultValue: 1 })
    mob_phone?: string;
}