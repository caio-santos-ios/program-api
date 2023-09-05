import { User } from "../entities/user.entity";
import { userRepository } from "../repositories";
import { TuserResult, TuserUpdate } from "../interfaces/user.interface";
import * as fs from 'fs/promises';

const create = async (payload: User): Promise<User> => {
    const photoBuffer = await fs.readFile(payload.photo);

    payload.photo = photoBuffer

    const user = userRepository.create(payload)

    await userRepository.save(user)

    return user
}

const read = async (): Promise<User[]> => {
    const users = await userRepository.find()

    return users
}

const retrive = async (id: string): Promise<User> => {
    const user = await userRepository.findOne({
        relations: {
            bios: true
        },
        where: {
            id: Number(id)
        }
    })

    return user!
}

const update = async (payload: any, updataPayload: any): Promise<User> => {
    const user = await userRepository.save({...payload, ...updataPayload})

    return user
}

const destroy = async (payload: any): Promise<any> => {
    const user = await userRepository.delete(payload)

    return user
}

export default { create, read, retrive, update, destroy }