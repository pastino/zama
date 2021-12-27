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
exports.Administrator = void 0;
var typeorm_1 = require("typeorm");
var Administrator = /** @class */ (function () {
    function Administrator() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Administrator.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Administrator.prototype, "administratorId", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Administrator.prototype, "password", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], Administrator.prototype, "super", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Administrator.prototype, "createAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Administrator.prototype, "updateAt", void 0);
    Administrator = __decorate([
        typeorm_1.Entity()
    ], Administrator);
    return Administrator;
}());
exports.Administrator = Administrator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRtaW5pc3RyYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbnRpdGllcy9BZG1pbmlzdHJhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1DQU1pQjtBQUdqQjtJQUFBO0lBaUJBLENBQUM7SUFmQztRQURDLGdDQUFzQixFQUFFOzs2Q0FDZDtJQUdYO1FBREMsZ0JBQU0sRUFBRTs7MERBQ2U7SUFHeEI7UUFEQyxnQkFBTSxFQUFFOzttREFDUTtJQUdqQjtRQURDLGdCQUFNLEVBQUU7O2dEQUNNO0lBR2Y7UUFEQywwQkFBZ0IsRUFBRTtrQ0FDVCxJQUFJO21EQUFDO0lBRWY7UUFEQywwQkFBZ0IsRUFBRTtrQ0FDVCxJQUFJO21EQUFDO0lBaEJKLGFBQWE7UUFEekIsZ0JBQU0sRUFBRTtPQUNJLGFBQWEsQ0FpQnpCO0lBQUQsb0JBQUM7Q0FBQSxBQWpCRCxJQWlCQztBQWpCWSxzQ0FBYSJ9