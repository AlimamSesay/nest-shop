import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";


@Entity("tax")
export class tax {

    @PrimaryGeneratedColumn({
        type: "int",
        name: "tax_id"
    })
    tax_id: number;


    @Column("varchar", {
        nullable: false,
        length: 100,
        name: "tax_type"
    })
    tax_type: string;


    @Column("decimal", {
        nullable: false,
        scale: 2,
        name: "tax_percentage"
    })
    tax_percentage: string;

}
