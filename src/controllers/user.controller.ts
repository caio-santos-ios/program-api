import userService from "../services/user.service";
import { Request, Response } from "express";

const create = async (request: Request, response: Response): Promise<Response> => {
    const user = await userService.create(request.body)

    return response.status(201).json(user)
}
const read = async (request: Request, response: Response): Promise<Response> => {
    const user = await userService.read()

    return response.status(200).json(user)
}
const update = async (request: Request, response: Response): Promise<Response> => {
    const user = await userService.update(request.body, response.locals.entity)

    return response.status(200).json(user)
}
const destroy = async (request: Request, response: Response): Promise<Response> => {
    const user = await userService.destroy(response.locals.entity)

    return response.status(204).json()
}

export default { create, read, update, destroy }