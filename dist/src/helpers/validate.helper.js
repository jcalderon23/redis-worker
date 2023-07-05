"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateResult = exports.validateResponsePila = void 0;
const express_validator_1 = require("express-validator");
const validateResult = (req, res, next) => {
    try {
        (0, express_validator_1.validationResult)(req).throw();
        return next();
    }
    catch (error) {
        res.status(403);
        res.send({ errors: error.array() });
    }
};
exports.validateResult = validateResult;
const validateResponsePila = (response, service) => {
    var _a, _b, _c, _d, _e;
    let errors = [];
    if (((_a = response === null || response === void 0 ? void 0 : response["mensajes"]) === null || _a === void 0 ? void 0 : _a.length) > 0) {
        errors = response === null || response === void 0 ? void 0 : response["mensajes"];
    }
    else {
        if ((response === null || response === void 0 ? void 0 : response["message"]) && (response === null || response === void 0 ? void 0 : response["status"]) !== 200)
            throw new Error(response.message);
        else
            errors = (_b = response === null || response === void 0 ? void 0 : response["data"]) === null || _b === void 0 ? void 0 : _b["mensajes"];
    }
    const message = response === null || response === void 0 ? void 0 : response["data"];
    switch (service) {
        case "PILA":
            if (((_c = errors === null || errors === void 0 ? void 0 : errors[0]) === null || _c === void 0 ? void 0 : _c.Texto) === "El token no es válido.") {
                return { status: 200, message: "AUTHENTICATE_AGAIN" };
            }
            else {
                if (errors === null || errors === void 0 ? void 0 : errors[0])
                    throw new Error((_d = errors === null || errors === void 0 ? void 0 : errors[0]) === null || _d === void 0 ? void 0 : _d.Texto);
            }
            break;
        case "TOKEN":
            if (response["status"] === 412)
                throw new Error((_e = errors === null || errors === void 0 ? void 0 : errors[0]) === null || _e === void 0 ? void 0 : _e.Texto);
            return response.message["token"];
    }
    return { status: 200, message: message };
};
exports.validateResponsePila = validateResponsePila;
//# sourceMappingURL=validate.helper.js.map