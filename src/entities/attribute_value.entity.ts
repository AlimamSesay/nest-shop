import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";


@Entity("attribute_value")
@Index("idx_attribute_value_attribute_id", ["attribute_id",])
export class attribute_value {

    @PrimaryGeneratedColumn({
        type: "int",
        name: "attribute_value_id"
    })
    attribute_value_id: number;


    @Column("int", {
        nullable: false,
        name: "attribute_id"
    })
    attribute_id: number;


    @Column("varchar", {
        nullable: false,
        length: 100,
        name: "value"
    })
    value: string;

}
