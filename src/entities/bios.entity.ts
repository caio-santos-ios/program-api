import { Entity, PrimaryGeneratedColumn, ManyToMany, Column, OneToOne, JoinColumn } from "typeorm";
import { User } from "./user.entity";

enum Status {
    Feliz = 'feliz',
    Triste = 'triste'
}

@Entity('bios')
class Bios {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({type: 'enum', enum: Status, default: Status.Feliz})
    status: "bem" | "mal"

    @Column()
    descriptionBios: string

    //chave estrangeira, vindo do usuario
    @OneToOne(() => User, (user) => user.bios)
    @JoinColumn()
    user: User
}

export { Bios }