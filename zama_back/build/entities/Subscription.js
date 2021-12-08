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
exports.Subscription = void 0;
var typeorm_1 = require("typeorm");
var Types_1 = require("./Types");
var User_1 = require("./User");
var Subscription = /** @class */ (function () {
    function Subscription() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Subscription.prototype, "id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return User_1.User; }, function (user) { return user.subscriptions; }),
        __metadata("design:type", User_1.User)
    ], Subscription.prototype, "user", void 0);
    __decorate([
        typeorm_1.Column({
            type: "enum",
            enum: Types_1.SubscriptionEnum,
        }),
        __metadata("design:type", Object)
    ], Subscription.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", Date)
    ], Subscription.prototype, "startDate", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", Date)
    ], Subscription.prototype, "endDate", void 0);
    __decorate([
        typeorm_1.Column({ default: true }),
        __metadata("design:type", String)
    ], Subscription.prototype, "extraInfo", void 0);
    __decorate([
        typeorm_1.Column({ default: true }),
        __metadata("design:type", Boolean)
    ], Subscription.prototype, "available", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Subscription.prototype, "createAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Subscription.prototype, "updateAt", void 0);
    Subscription = __decorate([
        typeorm_1.Entity()
    ], Subscription);
    return Subscription;
}());
exports.Subscription = Subscription;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3Vic2NyaXB0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2VudGl0aWVzL1N1YnNjcmlwdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtQ0FPaUI7QUFDakIsaUNBQTZEO0FBQzdELCtCQUE4QjtBQUc5QjtJQUFBO0lBOEJBLENBQUM7SUE1QkM7UUFEQyxnQ0FBc0IsRUFBRTs7NENBQ2Q7SUFHWDtRQURDLG1CQUFTLENBQUMsY0FBTSxPQUFBLFdBQUksRUFBSixDQUFJLEVBQUUsVUFBQyxJQUFJLElBQUssT0FBQSxJQUFJLENBQUMsYUFBYSxFQUFsQixDQUFrQixDQUFDO2tDQUM5QyxXQUFJOzhDQUFDO0lBTVg7UUFKQyxnQkFBTSxDQUFDO1lBQ04sSUFBSSxFQUFFLE1BQU07WUFDWixJQUFJLEVBQUUsd0JBQWdCO1NBQ3ZCLENBQUM7OzhDQUN3QztJQUcxQztRQURDLGdCQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7a0NBQ2hCLElBQUk7bURBQUM7SUFHaEI7UUFEQyxnQkFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO2tDQUNsQixJQUFJO2lEQUFDO0lBR2Q7UUFEQyxnQkFBTSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDOzttREFDUjtJQUdsQjtRQURDLGdCQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7O21EQUNQO0lBR25CO1FBREMsMEJBQWdCLEVBQUU7a0NBQ1QsSUFBSTtrREFBQztJQUdmO1FBREMsMEJBQWdCLEVBQUU7a0NBQ1QsSUFBSTtrREFBQztJQTdCSixZQUFZO1FBRHhCLGdCQUFNLEVBQUU7T0FDSSxZQUFZLENBOEJ4QjtJQUFELG1CQUFDO0NBQUEsQUE5QkQsSUE4QkM7QUE5Qlksb0NBQVkifQ==