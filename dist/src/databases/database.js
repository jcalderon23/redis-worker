"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const traceability_entity_1 = require("@entities/traceability.entity");
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mongodb",
    url: process.env.MONGO_URL,
    database: process.env.DATABASE + process.env.ENVIROMENT,
    useNewUrlParser: true,
    synchronize: true,
    logging: true,
    ssl: process.env.SSL == "true",
    entities: [traceability_entity_1.Traceability],
});
//# sourceMappingURL=database.js.map