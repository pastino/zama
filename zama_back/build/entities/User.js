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
var SleepAudio_1 = require("./SleepAudio");
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
        typeorm_1.OneToMany(function (type) { return SleepAudio_1.SleepAudio; }, function (sleepAudios) { return sleepAudios.creator; }),
        __metadata("design:type", Array)
    ], User.prototype, "makedAudios", void 0);
    __decorate([
        typeorm_1.ManyToMany(function (type) { return SleepAudio_1.SleepAudio; }, function (sleepAudios) { return sleepAudios.id; }, {
            cascade: true,
        }),
        __metadata("design:type", Array)
    ], User.prototype, "sleepAudios", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbnRpdGllcy9Vc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1DQVFpQjtBQUNqQiwyQ0FBMEM7QUFXMUM7SUFBQTtJQTZEQSxDQUFDO0lBM0RDO1FBREMsZ0NBQXNCLEVBQUU7O29DQUNkO0lBR1g7UUFEQyxnQkFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOztzQ0FDZDtJQUdiO1FBREMsZ0JBQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7MENBQ1Y7SUFHakI7UUFEQyxnQkFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzt1Q0FDYjtJQUdkO1FBREMsZ0JBQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7MENBQ1Y7SUFHakI7UUFEQyxnQkFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzt1Q0FDYjtJQUdkO1FBREMsZ0JBQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7eUNBQ1g7SUFHaEI7UUFEQyxnQkFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzswQ0FDVjtJQUdqQjtRQURDLGdCQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O3lDQUNYO0lBR2hCO1FBREMsZ0JBQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7eUNBQ1g7SUFHaEI7UUFEQyxnQkFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOztzREFDRztJQUc5QjtRQURDLGdCQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O3dEQUNLO0lBR2hDO1FBREMsZ0JBQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7b0RBQ0M7SUFHNUI7UUFEQyxnQkFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzt3Q0FDWjtJQU1mO1FBSkMsZ0JBQU0sQ0FBQztZQUNOLElBQUksRUFBRSxNQUFNO1lBQ1osSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUM7U0FDOUQsQ0FBQzs7NkNBQzBDO0lBRzVDO1FBREMsbUJBQVMsQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLHVCQUFVLEVBQVYsQ0FBVSxFQUFFLFVBQUMsV0FBVyxJQUFLLE9BQUEsV0FBVyxDQUFDLE9BQU8sRUFBbkIsQ0FBbUIsQ0FBQzs7NkNBQzVDO0lBSzFCO1FBSEMsb0JBQVUsQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLHVCQUFVLEVBQVYsQ0FBVSxFQUFFLFVBQUMsV0FBVyxJQUFLLE9BQUEsV0FBVyxDQUFDLEVBQUUsRUFBZCxDQUFjLEVBQUU7WUFDakUsT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDOzs2Q0FDd0I7SUFHMUI7UUFEQywwQkFBZ0IsRUFBRTtrQ0FDVCxJQUFJOzBDQUFDO0lBRWY7UUFEQywwQkFBZ0IsRUFBRTtrQ0FDVCxJQUFJOzBDQUFDO0lBNURKLElBQUk7UUFEaEIsZ0JBQU0sRUFBRTtPQUNJLElBQUksQ0E2RGhCO0lBQUQsV0FBQztDQUFBLEFBN0RELElBNkRDO0FBN0RZLG9CQUFJIn0=