"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Traceability = void 0;
const typeorm_1 = require("typeorm");
/**
 * @swagger
 * components:
 *  schemas:
 *    Queues:
 *      type: object
 *      properties:
 *        id:
 *          type: uuid
 *          example: 3898b2a6-4d13-4658-9bd1-1091cc8ee06a
 */
let Traceability = class Traceability extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.ObjectIdColumn)(),
    __metadata("design:type", String)
], Traceability.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Traceability.prototype, "type_operation", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Traceability.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Traceability.prototype, "updated_at", void 0);
Traceability = __decorate([
    (0, typeorm_1.Entity)()
], Traceability);
exports.Traceability = Traceability;
//# sourceMappingURL=traceability.entity.js.map