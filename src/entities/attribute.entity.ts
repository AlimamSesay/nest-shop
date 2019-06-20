import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("attribute",{schema:"shop" } )
export class attribute {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"attribute_id"
        })
    attribute_id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:100,
        name:"name"
        })
    name:string;
        
}
