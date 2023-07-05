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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessTraceabilityService = void 0;
const traceability_entity_1 = require("@entities/traceability.entity");
class ProcessTraceabilityService {
    ProcessOnQueueTraceabilityInfo(typeOperation) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return {
                    status: 200,
                    message: yield traceability_entity_1.Traceability.create({
                        type_operation: typeOperation,
                    }).save(),
                };
            }
            catch (error) {
                if (error instanceof Error) {
                    console.log(error);
                    return { status: 404, message: error.message };
                }
            }
        });
    }
}
exports.ProcessTraceabilityService = ProcessTraceabilityService;
//# sourceMappingURL=processTraceability.service.js.map