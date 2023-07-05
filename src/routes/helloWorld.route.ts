import { HelloWorldController } from "@controllers/helloWorld.controller";
import { Application } from "express";

import { urls } from "../constants/urls.constant";

export class HelloWorldRoute {
  private readonly helloWorldController: HelloWorldController;
  constructor() {
    this.helloWorldController = new HelloWorldController();
  }

  public routes(app: Application): void {
    /**
     * @swagger
     * /consult-contributor:
     *   post:
     *     tags: [Contributor]
     *     responses:
     *      201:
     *        description: Return a contributor.
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/ConsultContributor'
     *      401:
     *        $ref: '#/components/responses/Unauthorized'
     *      404:
     *        $ref: '#/components/responses/NotFound'
     *      400:
     *        $ref: '#/components/responses/Error'
     */
    app
      .route(`${urls.base}/hello-world`)
      .get(this.helloWorldController.getHelloWorldMessage);
  }
}
