import { Router } from "express";
import { emailExisty } from "../middlewares/EmailExisty.middleware";
import sessionController from "../controllers/session.controller";
import { userRepository } from "../repositories";

const sessionRouter = Router()

sessionRouter.post("", emailExisty(userRepository), sessionController.session)

export { sessionRouter }