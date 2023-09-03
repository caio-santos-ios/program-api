import { z } from "zod";

const userchema = z.object({
    id: z.number().positive().int(),
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
})

const userUpdateSchema = userchema.partial()

const userResultSchema = userchema.omit({password: true})

export { userchema, userUpdateSchema, userResultSchema }