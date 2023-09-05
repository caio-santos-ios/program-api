import { Router } from "express";
import userService from "../controllers/user.controller";
import { idExisty } from "../middlewares/IdExisty.middleware";
import { valitedToken } from "../middlewares/validatedToken.middlware";
import { userRepository } from "../repositories";
import userController from "../controllers/user.controller";

const userRouter = Router()

userRouter.post("", userService.create)
userRouter.get("", userService.read)
userRouter.get("/:id", valitedToken, userController.retrive)
userRouter.patch("/:id", valitedToken, idExisty(userRepository), userService.update)
userRouter.delete("/:id", idExisty(userRepository), userService.destroy)

export { userRouter }