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
exports.SleepAudio = void 0;
var typeorm_1 = require("typeorm");
var utils_1 = require("../utils");
var AudioBasketMapping_1 = require("./AudioBasketMapping");
var Category_1 = require("./Category");
var Types_1 = require("./Types");
var User_1 = require("./User");
var SleepAudio = /** @class */ (function () {
    function SleepAudio() {
    }
    SleepAudio.prototype.setColor = function () {
        this.color = utils_1.getSongColor(this.id);
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], SleepAudio.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], SleepAudio.prototype, "title", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], SleepAudio.prototype, "time", void 0);
    __decorate([
        typeorm_1.Column({
            type: "enum",
            enum: Types_1.DivisionEnum,
        }),
        __metadata("design:type", Object)
    ], SleepAudio.prototype, "division", void 0);
    __decorate([
        typeorm_1.ManyToMany(function () { return Category_1.Category; }, function (category) { return category.sleepAudios; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], SleepAudio.prototype, "categories", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], SleepAudio.prototype, "thumbnail", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], SleepAudio.prototype, "file", void 0);
    __decorate([
        typeorm_1.Column({ default: true }),
        __metadata("design:type", Boolean)
    ], SleepAudio.prototype, "recoFlag", void 0);
    __decorate([
        typeorm_1.Column({ default: false }),
        __metadata("design:type", Boolean)
    ], SleepAudio.prototype, "free", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true, default: null }),
        __metadata("design:type", String)
    ], SleepAudio.prototype, "voiceGender", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return User_1.User; }, function (user) { return user.makedAudios; }),
        __metadata("design:type", User_1.User)
    ], SleepAudio.prototype, "creator", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return AudioBasketMapping_1.AudioBasketMapping; }, function (audioBasketMappings) { return audioBasketMappings.user; }),
        __metadata("design:type", Array)
    ], SleepAudio.prototype, "inBasketUsers", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true, default: null }),
        __metadata("design:type", String)
    ], SleepAudio.prototype, "history", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true, default: null }),
        __metadata("design:type", Number)
    ], SleepAudio.prototype, "order", void 0);
    __decorate([
        typeorm_1.AfterLoad(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SleepAudio.prototype, "setColor", null);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], SleepAudio.prototype, "createAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], SleepAudio.prototype, "updateAt", void 0);
    SleepAudio = __decorate([
        typeorm_1.Entity()
    ], SleepAudio);
    return SleepAudio;
}());
exports.SleepAudio = SleepAudio;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2xlZXBBdWRpby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbnRpdGllcy9TbGVlcEF1ZGlvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1DQVdpQjtBQUNqQixrQ0FBd0M7QUFDeEMsMkRBQTBEO0FBQzFELHVDQUFzQztBQUN0QyxpQ0FBaUQ7QUFDakQsK0JBQThCO0FBRzlCO0lBQUE7SUE4REEsQ0FBQztJQVRRLDZCQUFRLEdBQWY7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLG9CQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFyREQ7UUFEQyxnQ0FBc0IsRUFBRTs7MENBQ2Q7SUFHWDtRQURDLGdCQUFNLEVBQUU7OzZDQUNLO0lBR2Q7UUFEQyxnQkFBTSxFQUFFOzs0Q0FDSTtJQU1iO1FBSkMsZ0JBQU0sQ0FBQztZQUNOLElBQUksRUFBRSxNQUFNO1lBQ1osSUFBSSxFQUFFLG9CQUFZO1NBQ25CLENBQUM7O2dEQUNvQztJQUl0QztRQUZDLG9CQUFVLENBQUMsY0FBTSxPQUFBLG1CQUFRLEVBQVIsQ0FBUSxFQUFFLFVBQUMsUUFBUSxJQUFLLE9BQUEsUUFBUSxDQUFDLFdBQVcsRUFBcEIsQ0FBb0IsQ0FBQztRQUM5RCxtQkFBUyxFQUFFOztrREFDVztJQUd2QjtRQURDLGdCQUFNLEVBQUU7O2lEQUNTO0lBR2xCO1FBREMsZ0JBQU0sRUFBRTs7NENBQ0k7SUFHYjtRQURDLGdCQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7O2dEQUNSO0lBR2xCO1FBREMsZ0JBQU0sQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQzs7NENBQ2I7SUFHZDtRQURDLGdCQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQzs7bURBQ3RCO0lBR3BCO1FBREMsbUJBQVMsQ0FBQyxjQUFNLE9BQUEsV0FBSSxFQUFKLENBQUksRUFBRSxVQUFDLElBQUksSUFBSyxPQUFBLElBQUksQ0FBQyxXQUFXLEVBQWhCLENBQWdCLENBQUM7a0NBQ3pDLFdBQUk7K0NBQUM7SUFNZDtRQUpDLG1CQUFTLENBQ1IsY0FBTSxPQUFBLHVDQUFrQixFQUFsQixDQUFrQixFQUN4QixVQUFDLG1CQUFtQixJQUFLLE9BQUEsbUJBQW1CLENBQUMsSUFBSSxFQUF4QixDQUF3QixDQUNsRDs7cURBQ3FCO0lBR3RCO1FBREMsZ0JBQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDOzsrQ0FDMUI7SUFHaEI7UUFEQyxnQkFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7OzZDQUM1QjtJQUtkO1FBREMsbUJBQVMsRUFBRTs7Ozs4Q0FHWDtJQUdEO1FBREMsMEJBQWdCLEVBQUU7a0NBQ1QsSUFBSTtnREFBQztJQUdmO1FBREMsMEJBQWdCLEVBQUU7a0NBQ1QsSUFBSTtnREFBQztJQTdESixVQUFVO1FBRHRCLGdCQUFNLEVBQUU7T0FDSSxVQUFVLENBOER0QjtJQUFELGlCQUFDO0NBQUEsQUE5REQsSUE4REM7QUE5RFksZ0NBQVUifQ==