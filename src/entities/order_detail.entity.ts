import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("order_detail",{schema:"shop" } )
@Index("idx_order_detail_order_id",["order_id",])
export class order_detail {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"item_id"
        })
    item_id:number;
        

    @Column("int",{ 
        nullable:false,
        name:"order_id"
        })
    order_id:number;
        

    @Column("int",{ 
        nullable:false,
        name:"product_id"
        })
    product_id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:1000,
        name:"attributes"
        })
    attributes:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:100,
        name:"product_name"
        })
    product_name:string;
        

    @Column("int",{ 
        nullable:false,
        name:"quantity"
        })
    quantity:number;
        

    @Column("decimal",{ 
        nullable:false,
        scale:2,
        name:"unit_cost"
        })
    unit_cost:string;
        
}
