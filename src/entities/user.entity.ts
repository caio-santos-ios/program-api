import { Entity, PrimaryGeneratedColumn, ManyToMany, Column, OneToMany, BeforeInsert, BeforeUpdate } from "typeorm";
import { Bios } from "./bios.entity";
import { Post } from "./post.entity";
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

    //essa propriedade é para ter acesso as informações do post
    @OneToMany(() => Post, (post) => post.user)
    post: Post[]

    //essa propriedade é para ter acesso as informações da bios
    @ManyToMany(() => Bios, (bios) => bios.user)
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