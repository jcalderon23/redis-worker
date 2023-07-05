/* eslint-disable import/first */
import "module-alias/register";
import "reflect-metadata";

import cors from "cors";
import dotEnv from "dotenv";
import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
/* import throng from "throng"; */

dotEnv.config();

import { HelloWorldRoute } from "@routes/helloWorld.route";

import { AppDataSource } from "./databases/database";
import TraceabilityProcess from "./redis/processTraceabilityTask";
import { options } from "./swaggerOptions";

class Server {
  public app: express.Application;
  private port = process.env.PORT || 3007;

  private helloWorldRoute = new HelloWorldRoute();
  private traceabilityProcess = new TraceabilityProcess();

  constructor() {
    this.app = express();
    this.app.set("port", process.env.PORT || "3000");
  }

  routes() {
    this.helloWorldRoute.routes(this.app);
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  swagger() {
    if (process.env.DEBUG === "true") {
      const swaggerDocument = swaggerJSDoc(options);
      this.app.use(
        "/api-docs",
        swaggerUi.serve,
        swaggerUi.setup(swaggerDocument)
      );
    }
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(
        `Example app listening on port http://localhost:${this.port}`
      );
    });
  }

  async dbConnection() {
    try {
      console.log("Connecting to database...");
      await AppDataSource.initialize();
    } catch (e) {
      console.log("Error connecting to database: ", e);
    }
  }

  async dbClose() {
    await AppDataSource.destroy();
  }

  setUp() {
    this.dbConnection().then(() => {
      console.log("Database connected");
      this.middlewares();
      this.routes();
      this.swagger();
      this.traceabilityProcess.processQueue();
    });
  }
}

export default Server;
