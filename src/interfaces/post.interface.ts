import { z } from "zod";
import { postUpdateSchema, postSchema } from "../schemas/post.schema";

type TpostUpdate = z.infer<typeof postUpdateSchema>
type TpostResult = z.infer<typeof postSchema>

export { TpostUpdate, TpostResult }