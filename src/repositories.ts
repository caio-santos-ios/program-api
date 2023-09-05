import { AppDataSource } from "./data-source";
import { Bios } from "./entities/bios.entity";
import { User } from "./entities/user.entity";

const userRepository = AppDataSource.getRepository(User)
const biosRepository = AppDataSource.getRepository(Bios)

export { userRepository, biosRepository }