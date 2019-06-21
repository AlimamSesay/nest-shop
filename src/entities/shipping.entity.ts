import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";


@Entity("shipping")
@Index("idx_shipping_shipping_region_id", ["shipping_region_id",])
export class shipping {

    @PrimaryGeneratedColumn({
        type: "int",
        name: "shipping_id"
    })
    shipping_id: number;


    @Column("varchar", {
        nullable: false,
        length: 100,
        name: "shipping_type"
    })
    shipping_type: string;


    @Column("decimal", {
        nullable: false,
        scale: 2,
        name: "shipping_cost"
    })
    shipping_cost: string;


    @Column("int", {
        nullable: false,
        name: "shipping_region_id"
    })
    shipping_region_id: number;

}
