import postService from "../services/post.service";
import { Request, Response } from "express";

const create = async (request: Request, response: Response): Promise<Response> => {
    const post = await postService.create(request.body)

    return response.status(201).json(post)
}
const read = async (request: Request, response: Response): Promise<Response> => {
    const post = await postService.read()

    return response.status(200).json(post)
}
const update = async (request: Request, response: Response): Promise<Response> => {
    const post = await postService.update(response.locals.entity, request.body)

    return response.status(200).json(post)
}
const destroy = async (request: Request, response: Response): Promise<Response> => {
    const post = await postService.destroy(response.locals.entity)

    return response.status(204).json()
}

export default { create, read, update, destroy }