import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class Product {
    @Field(type => ID)
    product_id: number;

    @Field()
    name: string;

    @Field()
    description: string;

    @Field()
    price: string;

    @Field()
    discounted_price: string;

    @Field({ defaultValue: 0 })
    display: number;

    @Field({ nullable: true })
    image?: string;

    @Field({ nullable: true })
    image_2?: string;

    @Field({ nullable: true })
    thumbnail: string;
}