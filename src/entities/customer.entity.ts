import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId, BeforeInsert } from "typeorm";

import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

import { CustomerRO } from 'src/customer/customer.dto';

@Entity("customer")
@Index("idx_customer_email", ["email",], { unique: true })
@Index("idx_customer_shipping_region_id", ["shipping_region_id",])
export class CustomerEntity {

    @PrimaryGeneratedColumn({
        type: "int",
        name: "customer_id"
    })
    customer_id: number;


    @Column("varchar", {
        nullable: false,
        length: 50,
        name: "name"
    })
    name: string;


    @Column("varchar", {
        nullable: false,
        unique: true,
        length: 100,
        name: "email"
    })
    email: string;


    @Column("varchar", {
        nullable: false,
        length: 50,
        name: "password"
    })
    password: string;


    @Column("text", {
        nullable: true,
        name: "credit_card"
    })
    credit_card: string | null;


    @Column("varchar", {
        nullable: true,
        length: 100,
        name: "address_1"
    })
    address_1: string | null;


    @Column("varchar", {
        nullable: true,
        length: 100,
        name: "address_2"
    })
    address_2: string | null;


    @Column("varchar", {
        nullable: true,
        length: 100,
        name: "city"
    })
    city: string | null;


    @Column("varchar", {
        nullable: true,
        length: 100,
        name: "region"
    })
    region: string | null;


    @Column("varchar", {
        nullable: true,
        length: 100,
        name: "postal_code"
    })
    postal_code: string | null;


    @Column("varchar", {
        nullable: true,
        length: 100,
        name: "country"
    })
    country: string | null;


    @Column("int", {
        nullable: false,
        default: () => "'1'",
        name: "shipping_region_id"
    })
    shipping_region_id: number;


    @Column("varchar", {
        nullable: true,
        length: 100,
        name: "day_phone"
    })
    day_phone: string | null;


    @Column("varchar", {
        nullable: true,
        length: 100,
        name: "eve_phone"
    })
    eve_phone: string | null;


    @Column("varchar", {
        nullable: true,
        length: 100,
        name: "mob_phone"
    })
    mob_phone: string | null;


    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }

    async comparePassword(attempt: string): Promise<boolean> {
        return await bcrypt.compare(attempt, this.password);
    }

    toResponseObject(showToken: boolean = false): CustomerRO {
        const { customer_id, name, email, token } = this;
        const responseObject: CustomerRO = {
            customer_id,
            name,
            email
        };

        if (showToken) {
            responseObject.token = token;
        }

        return responseObject;
    }

    private get token(): string {
        const { customer_id, name, email } = this;

        return jwt.sign(
            {
                customer_id,
                name,
                email,
            },
            process.env.SECRET_KEY,
            { expiresIn: '7d' },
        );
    }
}
