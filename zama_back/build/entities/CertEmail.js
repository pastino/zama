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
exports.CertEmail = void 0;
var typeorm_1 = require("typeorm");
var CertEmail = /** @class */ (function () {
    function CertEmail() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], CertEmail.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", String)
    ], CertEmail.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", Number)
    ], CertEmail.prototype, "certNum", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], CertEmail.prototype, "createAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], CertEmail.prototype, "updateAt", void 0);
    CertEmail = __decorate([
        typeorm_1.Entity()
    ], CertEmail);
    return CertEmail;
}());
exports.CertEmail = CertEmail;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2VydEVtYWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2VudGl0aWVzL0NlcnRFbWFpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtQ0FNaUI7QUFHakI7SUFBQTtJQWNBLENBQUM7SUFaQztRQURDLGdDQUFzQixFQUFFOzt5Q0FDZDtJQUdYO1FBREMsZ0JBQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7NENBQ2I7SUFHZDtRQURDLGdCQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7OzhDQUNYO0lBR2hCO1FBREMsMEJBQWdCLEVBQUU7a0NBQ1QsSUFBSTsrQ0FBQztJQUVmO1FBREMsMEJBQWdCLEVBQUU7a0NBQ1QsSUFBSTsrQ0FBQztJQWJKLFNBQVM7UUFEckIsZ0JBQU0sRUFBRTtPQUNJLFNBQVMsQ0FjckI7SUFBRCxnQkFBQztDQUFBLEFBZEQsSUFjQztBQWRZLDhCQUFTIn0=