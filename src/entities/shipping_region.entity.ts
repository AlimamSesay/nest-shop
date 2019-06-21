import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";


@Entity("shipping_region")
export class shipping_region {

    @PrimaryGeneratedColumn({
        type: "int",
        name: "shipping_region_id"
    })
    shipping_region_id: number;


    @Column("varchar", {
        nullable: false,
        length: 100,
        name: "shipping_region"
    })
    shipping_region: string;

}
