import { Bios } from "../entities/bios.entity";
import { biosRepository } from "../repositories";

const create = async (payload: Bios): Promise<Bios> => {
    const bios = biosRepository.create(payload)

    await biosRepository.save(bios)

    return bios
}

const read = async (): Promise<Bios[]> => {
    const bios = await biosRepository.find({
        relations: {
            user: true
        }
    })

    return bios
}

const update = async (payload: any, updataPayload: any): Promise<Bios> => {
    const bios = await biosRepository.save({...payload, ...updataPayload})

    return bios
}

const destroy = async (payload: any): Promise<any> => {
    const bios = await biosRepository.delete(payload)

    return bios
}

export default { create, read, update, destroy }