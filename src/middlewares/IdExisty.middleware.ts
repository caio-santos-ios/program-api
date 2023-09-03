import { NextFunction, Request, Response } from "express";

const idExisty: any = (repository: any) => async (request: Request, response: Response, next: NextFunction) => {
    const payload = await repository.findOne({
        where: {
            id: Number(request.params.id)
        }
    })
        
    if(!payload) return
    
    response.locals.entity = payload

    return next()
}

export { idExisty }