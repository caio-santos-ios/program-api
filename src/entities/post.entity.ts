import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./user.entity";

@Entity('posts')
class Post {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    description: string

    //chave estrangeira, vindo do usuario
    @ManyToOne(() => User, (user) => user.post)
    user: User
}

export { Post }