import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";


@Entity("product")
@Index("idx_ft_product_name_description", ["name", "description",])
export class ProductEntity {

    @PrimaryGeneratedColumn({
        type: "int",
        name: "product_id"
    })
    product_id: number;


    @Column("varchar", {
        nullable: false,
        length: 100,
        name: "name"
    })
    name: string;


    @Column("varchar", {
        nullable: false,
        length: 1000,
        name: "description"
    })
    description: string;


    @Column("decimal", {
        nullable: false,
        scale: 2,
        name: "price"
    })
    price: string;


    @Column("decimal", {
        nullable: false,
        default: () => "'0.00'",
        scale: 2,
        name: "discounted_price"
    })
    discounted_price: string;


    @Column("varchar", {
        nullable: true,
        length: 150,
        name: "image"
    })
    image: string | null;


    @Column("varchar", {
        nullable: true,
        length: 150,
        name: "image_2"
    })
    image_2: string | null;


    @Column("varchar", {
        nullable: true,
        length: 150,
        name: "thumbnail"
    })
    thumbnail: string | null;


    @Column("smallint", {
        nullable: false,
        default: () => "'0'",
        name: "display"
    })
    display: number;

}
