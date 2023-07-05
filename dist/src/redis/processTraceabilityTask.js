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
const processTraceability_service_1 = require("@services/processTraceability.service");
const redis_1 = __importDefault(require("./redis"));
class ProcessTraceabilityTask {
    constructor() {
        this.processTraceabilityService = new processTraceability_service_1.ProcessTraceabilityService();
    }
    sleep(ms) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => setTimeout(resolve, ms));
        });
    }
    processQueue() {
        console.log("Inicio del proceso: ", new Date());
        redis_1.default.process(2, (job) => __awaiter(this, void 0, void 0, function* () {
            let progress = 0;
            while (progress < 100) {
                yield this.sleep(50);
                progress += 1;
                job.progress(progress);
            }
            const newTraceability = yield this.processTraceabilityService.ProcessOnQueueTraceabilityInfo("Creación");
            console.log("Nuevo registro", {
                newTraceability,
                jobId: job.id,
            }, job.data);
            return { newTraceability };
        }));
    }
}
exports.default = ProcessTraceabilityTask;
//# sourceMappingURL=processTraceabilityTask.js.map