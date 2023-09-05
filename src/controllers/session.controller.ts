import sessionService from "../services/session.service";
import { Request, Response } from "express";

const session = async (request: Request, response: Response): Promise<Response> => {
    const user = await sessionService.session(request.body)
    
    return response.status(200).json(user)
}

export default { session }