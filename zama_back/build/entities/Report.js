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
exports.Report = void 0;
var typeorm_1 = require("typeorm");
var Report = /** @class */ (function () {
    function Report() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Report.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Report.prototype, "userId", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Report.prototype, "reason", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Report.prototype, "createAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Report.prototype, "updateAt", void 0);
    Report = __decorate([
        typeorm_1.Entity()
    ], Report);
    return Report;
}());
exports.Report = Report;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwb3J0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2VudGl0aWVzL1JlcG9ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtQ0FNaUI7QUFHakI7SUFBQTtJQWNBLENBQUM7SUFaQztRQURDLGdDQUFzQixFQUFFOztzQ0FDZDtJQUdYO1FBREMsZ0JBQU0sRUFBRTs7MENBQ007SUFHZjtRQURDLGdCQUFNLEVBQUU7OzBDQUNNO0lBR2Y7UUFEQywwQkFBZ0IsRUFBRTtrQ0FDVCxJQUFJOzRDQUFDO0lBRWY7UUFEQywwQkFBZ0IsRUFBRTtrQ0FDVCxJQUFJOzRDQUFDO0lBYkosTUFBTTtRQURsQixnQkFBTSxFQUFFO09BQ0ksTUFBTSxDQWNsQjtJQUFELGFBQUM7Q0FBQSxBQWRELElBY0M7QUFkWSx3QkFBTSJ9