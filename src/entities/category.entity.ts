import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("category",{schema:"shop" } )
@Index("idx_category_department_id",["department_id",])
export class category {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"category_id"
        })
    category_id:number;
        

    @Column("int",{ 
        nullable:false,
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
