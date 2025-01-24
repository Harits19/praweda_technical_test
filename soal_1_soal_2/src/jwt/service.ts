import jwt from "jsonwebtoken"
import { ENV } from "../env/constant";
import { JwtContext } from "./model";

const secret = ENV.JWT_SECRET;


export function Encode(data: Omit<JwtContext, 'iat'>) {


  const iat = Math.floor(Date.now() / 1000) - 30
  const body: JwtContext = {
    iat,
    ...data,
  }
  const token = jwt.sign(body, secret);

  return token;
}

export function Verify(token: string) {

  jwt.verify(token, secret);
}