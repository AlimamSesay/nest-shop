import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";


@Entity("shopping_cart")
@Index("idx_shopping_cart_cart_id", ["cart_id",])
export class shopping_cart {

    @PrimaryGeneratedColumn({
        type: "int",
        name: "item_id"
    })
    item_id: number;


    @Column("varchar", {
        nullable: false,
        length: 32,
        name: "cart_id"
    })
    cart_id: string;


    @Column("int", {
        nullable: false,
        name: "product_id"
    })
    product_id: number;


    @Column("varchar", {
        nullable: false,
        length: 1000,
        name: "attributes"
    })
    attributes: string;


    @Column("int", {
        nullable: false,
        name: "quantity"
    })
    quantity: number;


    @Column("tinyint", {
        nullable: false,
        width: 1,
        default: () => "'1'",
        name: "buy_now"
    })
    buy_now: boolean;


    @Column("datetime", {
        nullable: false,
        name: "added_on"
    })
    added_on: Date;

}
