"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseApiController = void 0;
class ResponseApiController {
    response(data, res) {
        return res.status(data.status).send(data.message);
    }
}
exports.ResponseApiController = ResponseApiController;
//# sourceMappingURL=responseApi.controller.js.map