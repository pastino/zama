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
exports.Notice = void 0;
var typeorm_1 = require("typeorm");
var Notice = /** @class */ (function () {
    function Notice() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Notice.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Notice.prototype, "title", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", String)
    ], Notice.prototype, "imageUrl", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", String)
    ], Notice.prototype, "contents", void 0);
    __decorate([
        typeorm_1.Column({ default: true }),
        __metadata("design:type", Boolean)
    ], Notice.prototype, "isVisible", void 0);
    __decorate([
        typeorm_1.Column({ default: false }),
        __metadata("design:type", Boolean)
    ], Notice.prototype, "isHomeNotice", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Notice.prototype, "createAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Notice.prototype, "updateAt", void 0);
    Notice = __decorate([
        typeorm_1.Entity()
    ], Notice);
    return Notice;
}());
exports.Notice = Notice;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2VudGl0aWVzL05vdGljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtQ0FNaUI7QUFHakI7SUFBQTtJQXVCQSxDQUFDO0lBckJDO1FBREMsZ0NBQXNCLEVBQUU7O3NDQUNkO0lBR1g7UUFEQyxnQkFBTSxFQUFFOzt5Q0FDSztJQUdkO1FBREMsZ0JBQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7NENBQ1Y7SUFHakI7UUFEQyxnQkFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzs0Q0FDVjtJQUdqQjtRQURDLGdCQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7a0NBQ2YsT0FBTzs2Q0FBQztJQUduQjtRQURDLGdCQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUM7a0NBQ2IsT0FBTztnREFBQztJQUd0QjtRQURDLDBCQUFnQixFQUFFO2tDQUNULElBQUk7NENBQUM7SUFFZjtRQURDLDBCQUFnQixFQUFFO2tDQUNULElBQUk7NENBQUM7SUF0QkosTUFBTTtRQURsQixnQkFBTSxFQUFFO09BQ0ksTUFBTSxDQXVCbEI7SUFBRCxhQUFDO0NBQUEsQUF2QkQsSUF1QkM7QUF2Qlksd0JBQU0ifQ==