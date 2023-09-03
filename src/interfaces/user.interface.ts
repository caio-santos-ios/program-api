import { z } from "zod";
import { userUpdateSchema, userResultSchema } from "../schemas/user.schema";

type TuserUpdate = z.infer<typeof userUpdateSchema>
type TuserResult = z.infer<typeof userResultSchema>

export { TuserResult, TuserUpdate }