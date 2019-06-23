import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class Shipping {
    @Field(type => ID)
    shipping_id: number;

    @Field()
    shipping_type: string;

    @Field()
    shipping_cost: string;

    @Field()
    shipping_region_id: string

}