import { AppDataSource } from "./data-source";
import { Bios } from "./entities/bios.entity";
import { Post } from "./entities/post.entity";
import { User } from "./entities/user.entity";

const userRepository = AppDataSource.getRepository(User)
const postRepository = AppDataSource.getRepository(Post)
const biosRepository = AppDataSource.getRepository(Bios)

export { userRepository, postRepository, biosRepository }