import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";


@Entity("review")
@Index("idx_review_customer_id", ["customer_id",])
@Index("idx_review_product_id", ["product_id",])
export class review {

    @PrimaryGeneratedColumn({
        type: "int",
        name: "review_id"
    })
    review_id: number;


    @Column("int", {
        nullable: false,
        name: "customer_id"
    })
    customer_id: number;


    @Column("int", {
        nullable: false,
        name: "product_id"
    })
    product_id: number;


    @Column("text", {
        nullable: false,
        name: "review"
    })
    review: string;


    @Column("smallint", {
        nullable: false,
        name: "rating"
    })
    rating: number;


    @Column("datetime", {
        nullable: false,
        name: "created_on"
    })
    created_on: Date;

}
