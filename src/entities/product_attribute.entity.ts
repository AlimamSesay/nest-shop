import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";


@Entity("product_attribute")
export class product_attribute {

    @Column("int", {
        nullable: false,
        primary: true,
        name: "product_id"
    })
    product_id: number;


    @Column("int", {
        nullable: false,
        primary: true,
        name: "attribute_value_id"
    })
    attribute_value_id: number;

}
