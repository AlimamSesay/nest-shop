import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";


@Entity("audit")
@Index("idx_audit_order_id", ["order_id",])
export class audit {

    @PrimaryGeneratedColumn({
        type: "int",
        name: "audit_id"
    })
    audit_id: number;


    @Column("int", {
        nullable: false,
        name: "order_id"
    })
    order_id: number;


    @Column("datetime", {
        nullable: false,
        name: "created_on"
    })
    created_on: Date;


    @Column("text", {
        nullable: false,
        name: "message"
    })
    message: string;


    @Column("int", {
        nullable: false,
        name: "code"
    })
    code: number;

}
