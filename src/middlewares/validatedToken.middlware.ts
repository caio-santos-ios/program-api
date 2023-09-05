import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

const valitedToken = async (request: Request, response: Response, next: NextFunction) => {
    const auth = request.headers.authorization

    if (!auth) return //("Missing bearer token.", 401);

    const token = auth?.split(" ")[1]

    const decoded = verify(token!, "chavedeseguranca")

    response.locals.decoded = decoded

    return next()
}

export { valitedToken }