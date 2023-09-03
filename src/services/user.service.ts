import { User } from "../entities/user.entity";
import { userRepository } from "../repositories";
import { TuserResult, TuserUpdate } from "../interfaces/user.interface";

const create = async (payload: User): Promise<User> => {
    const user = userRepository.create(payload)

    await userRepository.save(user)

    return user
}

const read = async (): Promise<User[]> => {
    const users = await userRepository.find({
        relations: {
            bios: true,
            post: true
        }
    })

    return users
}

const update = async (payload: any, updataPayload: any): Promise<User> => {
    const user = await userRepository.save({...payload, ...updataPayload})

    return user
}

const destroy = async (payload: any): Promise<any> => {
    const user = await userRepository.delete(payload)

    return user
}

export default { create, read, update, destroy }