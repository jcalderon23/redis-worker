"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.RequestClass = exports.HttpMethods = void 0;
const mockAxios_helper_1 = require("@helpers/mockAxios.helper");
const axios_1 = __importDefault(require("axios"));
const dotenv = __importStar(require("dotenv"));
const responseServices_mock_1 = require("../mocks/responseServices.mock");
dotenv.config();
var HttpMethods;
(function (HttpMethods) {
    HttpMethods["GET"] = "GET";
    HttpMethods["PUT"] = "PUT";
    HttpMethods["POST"] = "POST";
    HttpMethods["DELETE"] = "DELETE";
})(HttpMethods = exports.HttpMethods || (exports.HttpMethods = {}));
class RequestClass {
    constructor() {
        this.configMocks = (url) => {
            (0, mockAxios_helper_1.addMock)(url, { data: (0, responseServices_mock_1.responseServicesMock)(url) });
            (0, mockAxios_helper_1.enableMocking)(process.env.NODE_ENV === "test");
        };
    }
    makeRequest(service, method, resource, data, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const urlReports = process.env.URL_REPORTES_PILA;
                const getUrl = {
                    [urlReports]: urlReports,
                };
                const baseUrl = process.env.URL_PILA;
                const url = [urlReports].some((url) => url === service)
                    ? `${getUrl[service]}/${resource}`
                    : `${baseUrl}/${service}/api/${resource}`;
                this.configMocks(url);
                const response = yield (0, axios_1.default)({
                    method,
                    url,
                    data,
                    headers,
                });
                return response.data;
            }
            catch (e) {
                return e.response;
            }
        });
    }
}
exports.RequestClass = RequestClass;
//# sourceMappingURL=request.js.map