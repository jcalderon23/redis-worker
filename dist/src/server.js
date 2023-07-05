"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/first */
require("module-alias/register");
require("reflect-metadata");
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
/* import throng from "throng"; */
dotenv_1.default.config();
const helloWorld_route_1 = require("@routes/helloWorld.route");
const database_1 = require("./databases/database");
const processTraceabilityTask_1 = __importDefault(require("./redis/processTraceabilityTask"));
const swaggerOptions_1 = require("./swaggerOptions");
class Server {
    constructor() {
        this.port = process.env.PORT || 3007;
        this.helloWorldRoute = new helloWorld_route_1.HelloWorldRoute();
        this.traceabilityProcess = new processTraceabilityTask_1.default();
        this.app = (0, express_1.default)();
        this.app.set("port", process.env.PORT || "3000");
    }
    routes() {
        this.helloWorldRoute.routes(this.app);
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
    }
    swagger() {
        if (process.env.DEBUG === "true") {
            const swaggerDocument = (0, swagger_jsdoc_1.default)(swaggerOptions_1.options);
            this.app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
        }
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port http://localhost:${this.port}`);
        });
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("Connecting to database...");
                yield database_1.AppDataSource.initialize();
            }
            catch (e) {
                console.log("Error connecting to database: ", e);
            }
        });
    }
    dbClose() {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.AppDataSource.destroy();
        });
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
exports.default = Server;
//# sourceMappingURL=server.js.map