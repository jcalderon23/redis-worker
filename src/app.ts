/* eslint-disable import/first */
import dotEnv from "dotenv";

dotEnv.config();

import Server from "./server";

const server = new Server();
server.setUp();
server.listen();
