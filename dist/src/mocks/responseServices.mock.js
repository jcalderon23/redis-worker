"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseServicesMock = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const responseServicesMock = (url) => {
    console.log({ url });
};
exports.responseServicesMock = responseServicesMock;
//# sourceMappingURL=responseServices.mock.js.map