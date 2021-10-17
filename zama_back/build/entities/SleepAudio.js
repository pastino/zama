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
var Category_1 = require("./Category");
var Types_1 = require("./Types");
var User_1 = require("./User");
// export const DivisionEnum = ["Song", "Story", "ASMR"];
// export type category =
var SleepAudio = /** @class */ (function () {
    function SleepAudio() {
        this.recoFlag = true;
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
        typeorm_1.Column("boolean", { default: true }),
        __metadata("design:type", Boolean)
    ], SleepAudio.prototype, "recoFlag", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return User_1.User; }, function (user) { return user.sleepAudios; }),
        __metadata("design:type", User_1.User)
    ], SleepAudio.prototype, "creator", void 0);
    __decorate([
        typeorm_1.ManyToMany(function (type) { return User_1.User; }, function (users) { return users.id; }, {
            cascade: true,
        }),
        __metadata("design:type", Array)
    ], SleepAudio.prototype, "users", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2xlZXBBdWRpby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbnRpdGllcy9TbGVlcEF1ZGlvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1DQVNpQjtBQUNqQix1Q0FBc0M7QUFDdEMsaUNBQWlEO0FBQ2pELCtCQUE4QjtBQUU5Qix5REFBeUQ7QUFDekQseUJBQXlCO0FBR3pCO0lBQUE7UUEyQkUsYUFBUSxHQUFZLElBQUksQ0FBQztJQWUzQixDQUFDO0lBeENDO1FBREMsZ0NBQXNCLEVBQUU7OzBDQUNkO0lBR1g7UUFEQyxnQkFBTSxFQUFFOzs2Q0FDSztJQUdkO1FBREMsZ0JBQU0sRUFBRTs7NENBQ0k7SUFNYjtRQUpDLGdCQUFNLENBQUM7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLElBQUksRUFBRSxvQkFBWTtTQUNuQixDQUFDOztnREFDb0M7SUFJdEM7UUFGQyxvQkFBVSxDQUFDLGNBQU0sT0FBQSxtQkFBUSxFQUFSLENBQVEsRUFBRSxVQUFDLFFBQVEsSUFBSyxPQUFBLFFBQVEsQ0FBQyxXQUFXLEVBQXBCLENBQW9CLENBQUM7UUFDOUQsbUJBQVMsRUFBRTs7a0RBQ1c7SUFHdkI7UUFEQyxnQkFBTSxFQUFFOztpREFDUztJQUdsQjtRQURDLGdCQUFNLEVBQUU7OzRDQUNJO0lBR2I7UUFEQyxnQkFBTSxDQUFDLFNBQVMsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQzs7Z0RBQ1o7SUFHekI7UUFEQyxtQkFBUyxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsV0FBSSxFQUFKLENBQUksRUFBRSxVQUFDLElBQUksSUFBSyxPQUFBLElBQUksQ0FBQyxXQUFXLEVBQWhCLENBQWdCLENBQUM7a0NBQzdDLFdBQUk7K0NBQUM7SUFLZDtRQUhDLG9CQUFVLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxXQUFJLEVBQUosQ0FBSSxFQUFFLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxDQUFDLEVBQUUsRUFBUixDQUFRLEVBQUU7WUFDL0MsT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDOzs2Q0FDWTtJQUdkO1FBREMsMEJBQWdCLEVBQUU7a0NBQ1QsSUFBSTtnREFBQztJQUdmO1FBREMsMEJBQWdCLEVBQUU7a0NBQ1QsSUFBSTtnREFBQztJQXpDSixVQUFVO1FBRHRCLGdCQUFNLEVBQUU7T0FDSSxVQUFVLENBMEN0QjtJQUFELGlCQUFDO0NBQUEsQUExQ0QsSUEwQ0M7QUExQ1ksZ0NBQVUifQ==