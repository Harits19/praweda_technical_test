import dotenv from "dotenv";
import path from "path";
import { ENVModel } from "./model";



const dotenvPath = path.resolve(__dirname, '../../.env');
dotenv.config({ path: dotenvPath });

export const envTemp: Partial<ENVModel> = {
  JWT_SECRET: process.env.JWT_SECRET,
}

export const ENV = envTemp as ENVModel;


export function checkEnv() {
  for (const [key, value] of Object.entries(envTemp)) {
    if (!value) {
      throw new Error(`empty value on key ${key}`);
    }
  }
}