import express from "express";
import { Encode, Verify } from "../jwt/service";
import { v4 as uuidv4 } from "uuid";
import { Validate } from "./validator";
import { HandleApiError } from "../error/service";



export function Route(app: express.Express) {

  app.post("/auth", (req, res, next) => {
    try {
      const body = Validate(req.body)


      console.log('auth request body', body);
      const token = Encode({ id: uuidv4(), username: body.username });

      res.cookie('jwt', token, { httpOnly: true });


      res.json({
        access_token: token,
      })
    } catch (error) {

      HandleApiError(res, error)
    }
  });

  app.get("/auth", (req, res, next) => {
    try {
      const token = req.cookies.jwt;
      if (!token) {
        res.sendStatus(401);
        return;
      }

      Verify(token);

      res.json({
        message: "token is valid",
      })


    } catch (error) {
      HandleApiError(res, error);
    }


  })

}