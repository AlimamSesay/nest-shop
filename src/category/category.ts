import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class Category {
    @Field(type => ID)
    category_id: number;

    @Field()
    department_id: number;

    @Field()
    name: string;

    @Field({ nullable: true })
    description?: string;
}