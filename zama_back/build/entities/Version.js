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
exports.Version = void 0;
var typeorm_1 = require("typeorm");
var Version = /** @class */ (function () {
    function Version() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Version.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Version.prototype, "appVersionAnd", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Version.prototype, "appVersionIOS", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Version.prototype, "appMinimumVersion", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Version.prototype, "appLatestVersion", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", String)
    ], Version.prototype, "updateContents", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], Version.prototype, "isTest", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Version.prototype, "createAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Version.prototype, "updateAt", void 0);
    Version = __decorate([
        typeorm_1.Entity()
    ], Version);
    return Version;
}());
exports.Version = Version;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmVyc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbnRpdGllcy9WZXJzaW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1DQU1pQjtBQUdqQjtJQUFBO0lBMkJBLENBQUM7SUF6QkM7UUFEQyxnQ0FBc0IsRUFBRTs7dUNBQ2Q7SUFHWDtRQURDLGdCQUFNLEVBQUU7O2tEQUNhO0lBR3RCO1FBREMsZ0JBQU0sRUFBRTs7a0RBQ2E7SUFHdEI7UUFEQyxnQkFBTSxFQUFFOztzREFDaUI7SUFHMUI7UUFEQyxnQkFBTSxFQUFFOztxREFDZ0I7SUFHekI7UUFEQyxnQkFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzttREFDSjtJQUd2QjtRQURDLGdCQUFNLEVBQUU7OzJDQUNPO0lBR2hCO1FBREMsMEJBQWdCLEVBQUU7a0NBQ1QsSUFBSTs2Q0FBQztJQUdmO1FBREMsMEJBQWdCLEVBQUU7a0NBQ1QsSUFBSTs2Q0FBQztJQTFCSixPQUFPO1FBRG5CLGdCQUFNLEVBQUU7T0FDSSxPQUFPLENBMkJuQjtJQUFELGNBQUM7Q0FBQSxBQTNCRCxJQTJCQztBQTNCWSwwQkFBTyJ9