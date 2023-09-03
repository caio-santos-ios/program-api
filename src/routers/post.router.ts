import { Router } from "express";
import postController from "../controllers/post.controller";
import { idExisty } from "../middlewares/IdExisty.middleware";
import { postRepository } from "../repositories";

const postRouter = Router()

postRouter.post("", postController.create)
postRouter.get("", postController.read)
postRouter.patch("/:id", idExisty(postRepository), postController.update)
postRouter.delete("/:id", idExisty(postRepository), postController.destroy)

export { postRouter }