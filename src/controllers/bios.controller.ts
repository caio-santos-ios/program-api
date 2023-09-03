import biosService from "../services/bios.service";
import { Request, Response } from "express";

const create = async (request: Request, response: Response): Promise<Response> => {
    const bios = await biosService.create(request.body)

    return response.status(201).json(bios)
}
const read = async (request: Request, response: Response): Promise<Response> => {
    const bios = await biosService.read()

    return response.status(200).json(bios)
}
const update = async (request: Request, response: Response): Promise<Response> => {
    const bios = await biosService.update(response.locals.entity, request.body)

    return response.status(200).json(bios)
}
const destroy = async (request: Request, response: Response): Promise<Response> => {
    const bios = await biosService.destroy(response.locals.entity)

    return response.status(204).json()
}

export default { create, read, update, destroy }