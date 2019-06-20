import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("department",{schema:"shop" } )
export class department {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"department_id"
        })
    department_id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:100,
        name:"name"
        })
    name:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:1000,
        name:"description"
        })
    description:string | null;
        
}
