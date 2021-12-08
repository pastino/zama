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
exports.Voucher = void 0;
var typeorm_1 = require("typeorm");
var Types_1 = require("./Types");
var User_1 = require("./User");
var Voucher = /** @class */ (function () {
    function Voucher() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Voucher.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Voucher.prototype, "voucherNumber", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return User_1.User; }, function (user) { return user.subscriptions; }),
        __metadata("design:type", User_1.User)
    ], Voucher.prototype, "user", void 0);
    __decorate([
        typeorm_1.Column({
            type: "enum",
            enum: Types_1.SubscriptionEnum,
        }),
        __metadata("design:type", Object)
    ], Voucher.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", Date)
    ], Voucher.prototype, "expiredDate", void 0);
    __decorate([
        typeorm_1.Column({ default: true }),
        __metadata("design:type", Boolean)
    ], Voucher.prototype, "available", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Voucher.prototype, "createAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Voucher.prototype, "updateAt", void 0);
    Voucher = __decorate([
        typeorm_1.Entity()
    ], Voucher);
    return Voucher;
}());
exports.Voucher = Voucher;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVm91Y2hlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbnRpdGllcy9Wb3VjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1DQU9pQjtBQUNqQixpQ0FBNkQ7QUFDN0QsK0JBQThCO0FBRzlCO0lBQUE7SUEyQkEsQ0FBQztJQXpCQztRQURDLGdDQUFzQixFQUFFOzt1Q0FDZDtJQUdYO1FBREMsZ0JBQU0sRUFBRTs7a0RBQ2E7SUFHdEI7UUFEQyxtQkFBUyxDQUFDLGNBQU0sT0FBQSxXQUFJLEVBQUosQ0FBSSxFQUFFLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxDQUFDLGFBQWEsRUFBbEIsQ0FBa0IsQ0FBQztrQ0FDOUMsV0FBSTt5Q0FBQztJQU1YO1FBSkMsZ0JBQU0sQ0FBQztZQUNOLElBQUksRUFBRSxNQUFNO1lBQ1osSUFBSSxFQUFFLHdCQUFnQjtTQUN2QixDQUFDOzt5Q0FDd0M7SUFHMUM7UUFEQyxnQkFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO2tDQUNkLElBQUk7Z0RBQUM7SUFHbEI7UUFEQyxnQkFBTSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDOzs4Q0FDUDtJQUduQjtRQURDLDBCQUFnQixFQUFFO2tDQUNULElBQUk7NkNBQUM7SUFHZjtRQURDLDBCQUFnQixFQUFFO2tDQUNULElBQUk7NkNBQUM7SUExQkosT0FBTztRQURuQixnQkFBTSxFQUFFO09BQ0ksT0FBTyxDQTJCbkI7SUFBRCxjQUFDO0NBQUEsQUEzQkQsSUEyQkM7QUEzQlksMEJBQU8ifQ==