import { Router } from "express";
import userService from "../controllers/user.controller";
import { idExisty } from "../middlewares/IdExisty.middleware";
import { userRepository } from "../repositories";

const userRouter = Router()

userRouter.post("", userService.create)
userRouter.get("", userService.read)
userRouter.patch("/:id", idExisty(userRepository), userService.update)
userRouter.delete("/:id", idExisty(userRepository), userService.destroy)

export { userRouter }