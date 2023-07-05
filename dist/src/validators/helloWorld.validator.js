"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateContributor = void 0;
const validate_helper_1 = require("@helpers/validate.helper");
const express_validator_1 = require("express-validator");
exports.validateContributor = [
    (0, express_validator_1.header)("employer-id").exists().isString(),
    (0, express_validator_1.check)("documentType").exists().isString(),
    (0, express_validator_1.check)("documentNumber").exists().isString(),
    (req, res, next) => {
        (0, validate_helper_1.validateResult)(req, res, next);
    },
];
//# sourceMappingURL=helloWorld.validator.js.map