import { Traceability } from "@entities/traceability.entity";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mongodb",
  url: process.env.MONGO_URL,
  database: process.env.DATABASE + process.env.ENVIROMENT,
  useNewUrlParser: true,
  synchronize: true,
  logging: true,
  ssl: process.env.SSL == "true",
  entities: [Traceability],
});
