import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate, OneToOne } from "typeorm";
import { Bios } from "./bios.entity";
import { getRounds, hashSync } from "bcryptjs";

@Entity('users')
class User {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string

    @Column('bytea', { nullable: true }) 
    photo: Buffer

    //essa propriedade é para ter acesso as informações da bios
    @OneToOne(() => Bios, (bios) => bios.user, {cascade: true})
    bios: Bios[]

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        const isHashPassword = getRounds(this.password)

        if (!isHashPassword) {
            this.password = hashSync(this.password, 10)
        }
    }
}

export { User }