import express from 'express';
import { CheckoutRequest } from './model';
import HttpStatusCode from '../http/model/status_code';


export function Route(app: express.Express) {


  app.post("/checkout", (req, res, next) => {
    try {
      const { price, voucher } = req.body as CheckoutRequest;

      if (!price) {
        res.json("field price is required").status(HttpStatusCode.BAD_REQUEST);
        return;
      }

      let pointReceived = 0;
      let finalPrice = price;

      if (voucher && voucher >= 50 && price >= 5000000) {
        const discountPrice = price * 50 / 100;

        pointReceived = discountPrice * 2 / 100;

        finalPrice = price - discountPrice;

      }



      res.json({
        final_price: finalPrice,
        point_received: pointReceived,
      });
    } catch (error) {

      res.json({
        error: error?.toString(),
      }).status(500);

    }
  })
}