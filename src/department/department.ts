import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class Department {
    @Field(type => ID)
    department_id: number;

    @Field()
    name: string;

    @Field({ nullable: true })
    description?: string;
}