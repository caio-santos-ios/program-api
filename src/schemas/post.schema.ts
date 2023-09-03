import { z } from "zod";

const postSchema = z.object({
    id: z.number().positive().int(),
    description: z.string()
})

const postUpdateSchema = postSchema.partial()

export { postSchema, postUpdateSchema }