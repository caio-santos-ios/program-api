import { NextFunction, Request, Response } from "express";
import { AppError } from "../error/AppError";

const emailExisty: any = (repository: any) => async (request: Request, response: Response, next: NextFunction) => {
    const payload = await repository.findOne({
        where: {
            email: request.body.email
        }
    })
        
    if(!payload) {

        throw new AppError("Email ou senha incorreto", 401)
    } 

    return next()
}

export { emailExisty }