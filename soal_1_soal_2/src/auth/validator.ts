import zod from "zod";
import { AuthRequest } from "./model";



export function Validate(data: AuthRequest) {

  const AuthRequestSchema = zod.object({
    username: zod.string(),
    password: zod.string()
  })

  const result = AuthRequestSchema.parse(data);


  return result;

}