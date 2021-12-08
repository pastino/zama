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
exports.User = void 0;
var typeorm_1 = require("typeorm");
var AudioBasketMapping_1 = require("./AudioBasketMapping");
var SleepAudio_1 = require("./SleepAudio");
var Subscription_1 = require("./Subscription");
var User = /** @class */ (function () {
    function User() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], User.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", String)
    ], User.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", String)
    ], User.prototype, "phoneNum", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", String)
    ], User.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", String)
    ], User.prototype, "password", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", Number)
    ], User.prototype, "birth", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", String)
    ], User.prototype, "kakaoId", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", String)
    ], User.prototype, "googleId", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", String)
    ], User.prototype, "naverId", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", String)
    ], User.prototype, "appleId", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", Boolean)
    ], User.prototype, "serviceTermAgreement", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", Boolean)
    ], User.prototype, "privacyPolicyAgreement", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", Boolean)
    ], User.prototype, "marketingAgreement", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", String)
    ], User.prototype, "avatar", void 0);
    __decorate([
        typeorm_1.Column({
            type: "enum",
            enum: ["EMAIL", "KAKAO", "GOOGLE", "NAVER", "APPLE", "PHONE"],
        }),
        __metadata("design:type", Object)
    ], User.prototype, "loginMethod", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Subscription_1.Subscription; }, function (subscriptions) { return subscriptions.user; }),
        __metadata("design:type", Array)
    ], User.prototype, "subscriptions", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return SleepAudio_1.SleepAudio; }, function (sleepAudios) { return sleepAudios.creator; }),
        __metadata("design:type", Array)
    ], User.prototype, "makedAudios", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return AudioBasketMapping_1.AudioBasketMapping; }, function (audioBasketMappings) { return audioBasketMappings.audio; }),
        __metadata("design:type", Array)
    ], User.prototype, "inBasketAudios", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], User.prototype, "createAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], User.prototype, "updateAt", void 0);
    User = __decorate([
        typeorm_1.Entity()
    ], User);
    return User;
}());
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbnRpdGllcy9Vc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1DQU9pQjtBQUNqQiwyREFBMEQ7QUFDMUQsMkNBQTBDO0FBQzFDLCtDQUE4QztBQVc5QztJQUFBO0lBaUVBLENBQUM7SUEvREM7UUFEQyxnQ0FBc0IsRUFBRTs7b0NBQ2Q7SUFHWDtRQURDLGdCQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O3NDQUNkO0lBR2I7UUFEQyxnQkFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzswQ0FDVjtJQUdqQjtRQURDLGdCQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O3VDQUNiO0lBR2Q7UUFEQyxnQkFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzswQ0FDVjtJQUdqQjtRQURDLGdCQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O3VDQUNiO0lBR2Q7UUFEQyxnQkFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzt5Q0FDWDtJQUdoQjtRQURDLGdCQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7OzBDQUNWO0lBR2pCO1FBREMsZ0JBQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7eUNBQ1g7SUFHaEI7UUFEQyxnQkFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzt5Q0FDWDtJQUdoQjtRQURDLGdCQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O3NEQUNHO0lBRzlCO1FBREMsZ0JBQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7d0RBQ0s7SUFHaEM7UUFEQyxnQkFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOztvREFDQztJQUc1QjtRQURDLGdCQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O3dDQUNaO0lBTWY7UUFKQyxnQkFBTSxDQUFDO1lBQ04sSUFBSSxFQUFFLE1BQU07WUFDWixJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQztTQUM5RCxDQUFDOzs2Q0FDMEM7SUFHNUM7UUFEQyxtQkFBUyxDQUFDLGNBQU0sT0FBQSwyQkFBWSxFQUFaLENBQVksRUFBRSxVQUFDLGFBQWEsSUFBSyxPQUFBLGFBQWEsQ0FBQyxJQUFJLEVBQWxCLENBQWtCLENBQUM7OytDQUN2QztJQUc5QjtRQURDLG1CQUFTLENBQUMsY0FBTSxPQUFBLHVCQUFVLEVBQVYsQ0FBVSxFQUFFLFVBQUMsV0FBVyxJQUFLLE9BQUEsV0FBVyxDQUFDLE9BQU8sRUFBbkIsQ0FBbUIsQ0FBQzs7NkNBQ3hDO0lBTTFCO1FBSkMsbUJBQVMsQ0FDUixjQUFNLE9BQUEsdUNBQWtCLEVBQWxCLENBQWtCLEVBQ3hCLFVBQUMsbUJBQW1CLElBQUssT0FBQSxtQkFBbUIsQ0FBQyxLQUFLLEVBQXpCLENBQXlCLENBQ25EOztnREFDNEI7SUFHN0I7UUFEQywwQkFBZ0IsRUFBRTtrQ0FDVCxJQUFJOzBDQUFDO0lBRWY7UUFEQywwQkFBZ0IsRUFBRTtrQ0FDVCxJQUFJOzBDQUFDO0lBaEVKLElBQUk7UUFEaEIsZ0JBQU0sRUFBRTtPQUNJLElBQUksQ0FpRWhCO0lBQUQsV0FBQztDQUFBLEFBakVELElBaUVDO0FBakVZLG9CQUFJIn0=