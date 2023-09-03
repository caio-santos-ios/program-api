import { Router } from "express";
import biosController from "../controllers/bios.controller";
import { idExisty } from "../middlewares/IdExisty.middleware";
import { biosRepository } from "../repositories";

const biosRouter = Router()

biosRouter.post("", biosController.create)
biosRouter.get("", biosController.read)
biosRouter.patch("/:id", idExisty(biosRepository), biosController.update)
biosRouter.delete("/:id", idExisty(biosRepository), biosController.destroy)

export { biosRouter }