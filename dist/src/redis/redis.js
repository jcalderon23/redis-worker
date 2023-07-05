"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bull_1 = __importDefault(require("bull"));
const REDIS_URL = process.env.REDIS_URL || "redis://127.0.0.1:6379";
const REDIS_QUEUE = process.env.REDIS_QUEUE || "Test";
const Queue = new bull_1.default(REDIS_QUEUE, REDIS_URL);
exports.default = Queue;
//# sourceMappingURL=redis.js.map