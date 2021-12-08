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
var AudioBasketMapping_1 = require("./AudioBasketMapping");
var Category_1 = require("./Category");
var Types_1 = require("./Types");
var User_1 = require("./User");
var SleepAudio = /** @class */ (function () {
    function SleepAudio() {
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2xlZXBBdWRpby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbnRpdGllcy9TbGVlcEF1ZGlvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1DQVVpQjtBQUNqQiwyREFBMEQ7QUFDMUQsdUNBQXNDO0FBQ3RDLGlDQUFpRDtBQUNqRCwrQkFBOEI7QUFHOUI7SUFBQTtJQXVEQSxDQUFDO0lBckRDO1FBREMsZ0NBQXNCLEVBQUU7OzBDQUNkO0lBR1g7UUFEQyxnQkFBTSxFQUFFOzs2Q0FDSztJQUdkO1FBREMsZ0JBQU0sRUFBRTs7NENBQ0k7SUFNYjtRQUpDLGdCQUFNLENBQUM7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLElBQUksRUFBRSxvQkFBWTtTQUNuQixDQUFDOztnREFDb0M7SUFJdEM7UUFGQyxvQkFBVSxDQUFDLGNBQU0sT0FBQSxtQkFBUSxFQUFSLENBQVEsRUFBRSxVQUFDLFFBQVEsSUFBSyxPQUFBLFFBQVEsQ0FBQyxXQUFXLEVBQXBCLENBQW9CLENBQUM7UUFDOUQsbUJBQVMsRUFBRTs7a0RBQ1c7SUFHdkI7UUFEQyxnQkFBTSxFQUFFOztpREFDUztJQUdsQjtRQURDLGdCQUFNLEVBQUU7OzRDQUNJO0lBR2I7UUFEQyxnQkFBTSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDOztnREFDUjtJQUdsQjtRQURDLGdCQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUM7OzRDQUNiO0lBR2Q7UUFEQyxnQkFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7O21EQUN0QjtJQUdwQjtRQURDLG1CQUFTLENBQUMsY0FBTSxPQUFBLFdBQUksRUFBSixDQUFJLEVBQUUsVUFBQyxJQUFJLElBQUssT0FBQSxJQUFJLENBQUMsV0FBVyxFQUFoQixDQUFnQixDQUFDO2tDQUN6QyxXQUFJOytDQUFDO0lBTWQ7UUFKQyxtQkFBUyxDQUNSLGNBQU0sT0FBQSx1Q0FBa0IsRUFBbEIsQ0FBa0IsRUFDeEIsVUFBQyxtQkFBbUIsSUFBSyxPQUFBLG1CQUFtQixDQUFDLElBQUksRUFBeEIsQ0FBd0IsQ0FDbEQ7O3FEQUNxQjtJQUd0QjtRQURDLGdCQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQzs7K0NBQzFCO0lBR2hCO1FBREMsZ0JBQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDOzs2Q0FDNUI7SUFHZDtRQURDLDBCQUFnQixFQUFFO2tDQUNULElBQUk7Z0RBQUM7SUFHZjtRQURDLDBCQUFnQixFQUFFO2tDQUNULElBQUk7Z0RBQUM7SUF0REosVUFBVTtRQUR0QixnQkFBTSxFQUFFO09BQ0ksVUFBVSxDQXVEdEI7SUFBRCxpQkFBQztDQUFBLEFBdkRELElBdURDO0FBdkRZLGdDQUFVIn0=