import { z } from "zod";
import { biosUpdateSchema, biosSchema } from "../schemas/bios.schema";

type TbiosUpdate = z.infer<typeof biosUpdateSchema>
type TbiosResult = z.infer<typeof biosSchema>

export { TbiosUpdate, TbiosResult }

