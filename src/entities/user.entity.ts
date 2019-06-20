import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    BeforeInsert,
} from 'typeorm';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

import { UserRO } from 'src/user/user.dto';

@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn()
    created: Date;

    @Column({
        type: 'text',
        unique: true,
    })
    email: string;

    @Column({ length: 50 })
    name: string;

    @Column('text')
    password: string;


    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }

    async comparePassword(attempt: string): Promise<boolean> {
        return await bcrypt.compare(attempt, this.password);
    }

    toResponseObject(showToken: boolean = false): UserRO {
        const { id, name, email, token } = this;
        const responseObject: UserRO = {
            id,
            name,
            email
        };

        if (showToken) {
            responseObject.token = token;
        }

        return responseObject;
    }

    private get token(): string {
        const { id, name, email } = this;

        return jwt.sign(
            {
                id,
                name,
                email,
            },
            process.env.SECRET,
            { expiresIn: '7d' },
        );
    }
}