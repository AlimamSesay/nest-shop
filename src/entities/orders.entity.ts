import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";

@Entity("orders")
@Index("idx_orders_customer_id", ["customer_id",])
@Index("idx_orders_shipping_id", ["shipping_id",])
@Index("idx_orders_tax_id", ["tax_id",])
export class OrdersEntity {

    @PrimaryGeneratedColumn({
        type: "int",
        name: "order_id"
    })
    order_id: number;


    @Column("decimal", {
        nullable: false,
        default: () => "'0.00'",
        scale: 2,
        name: "total_amount"
    })
    total_amount: string;


    @Column("datetime", {
        nullable: false,
        name: "created_on"
    })
    created_on: Date;


    @Column("datetime", {
        nullable: true,
        name: "shipped_on"
    })
    shipped_on: Date | null;


    @Column("int", {
        nullable: false,
        default: () => "'0'",
        name: "status"
    })
    status: number;


    @Column("varchar", {
        nullable: true,
        name: "comments"
    })
    comments: string | null;


    @Column("int", {
        nullable: true,
        name: "customer_id"
    })
    customer_id: number | null;


    @Column("varchar", {
        nullable: true,
        length: 50,
        name: "auth_code"
    })
    auth_code: string | null;


    @Column("varchar", {
        nullable: true,
        length: 50,
        name: "reference"
    })
    reference: string | null;


    @Column("int", {
        nullable: true,
        name: "shipping_id"
    })
    shipping_id: number | null;


    @Column("int", {
        nullable: true,
        name: "tax_id"
    })
    tax_id: number | null;

}
