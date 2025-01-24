import { v4 as uuidv4 } from 'uuid';
import express, { Express, Request, Response } from "express";
import * as ecommerce from './ecommerce/service';
import * as auth from './auth/service';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { checkEnv } from './env/constant';


checkEnv();


const app: Express = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(cookieParser())

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

ecommerce.Route(app);
auth.Route(app);


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

