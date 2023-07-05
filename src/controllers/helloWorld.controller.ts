import { ResponseApiController } from "@controllers/responseApi.controller";
import { HelloWorldService } from "@services/helloWorld.service";
import { Request, Response } from "express";

export class HelloWorldController {
  private HelloWorldService: HelloWorldService;
  private responseApi: ResponseApiController;

  constructor() {
    this.HelloWorldService = new HelloWorldService();
    this.responseApi = new ResponseApiController();
  }

  public getHelloWorldMessage = async (req: Request, res: Response) => {
    console.log({ req });
    const apiStatus = await this.HelloWorldService.getHelloWorldMessage();

    return this.responseApi.response(apiStatus, res);
  };
}
