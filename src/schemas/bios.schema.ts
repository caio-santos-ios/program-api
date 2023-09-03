import { z } from "zod";

const biosSchema = z.object({
    id: z.number().positive().int(),
    status: z.enum(["feliz", "triste"]),
    descriptionBios: z.string()
})

const biosUpdateSchema = biosSchema.partial()

export { biosSchema, biosUpdateSchema }