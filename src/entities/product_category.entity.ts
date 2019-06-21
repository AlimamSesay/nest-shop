import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";


@Entity("product_category")
export class product_category {

    @Column("int", {
        nullable: false,
        primary: true,
        name: "product_id"
    })
    product_id: number;


    @Column("int", {
        nullable: false,
        primary: true,
        name: "category_id"
    })
    category_id: number;

}
