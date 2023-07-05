import { Response } from "express";

export class ResponseApiController {
  public response(data, res: Response) {
    return res.status(data.status).send(data.message);
  }
}
