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
exports.DeepSleep = void 0;
var typeorm_1 = require("typeorm");
var User_1 = require("./User");
var DeepSleep = /** @class */ (function () {
    function DeepSleep() {
        this.recoFlag = true;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], DeepSleep.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], DeepSleep.prototype, "title", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], DeepSleep.prototype, "time", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], DeepSleep.prototype, "type", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], DeepSleep.prototype, "thumbnail", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], DeepSleep.prototype, "file", void 0);
    __decorate([
        typeorm_1.Column("boolean", { default: true }),
        __metadata("design:type", Boolean)
    ], DeepSleep.prototype, "recoFlag", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return User_1.User; }, function (user) { return user.id; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", User_1.User)
    ], DeepSleep.prototype, "user", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], DeepSleep.prototype, "createAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], DeepSleep.prototype, "updateAt", void 0);
    DeepSleep = __decorate([
        typeorm_1.Entity()
    ], DeepSleep);
    return DeepSleep;
}());
exports.DeepSleep = DeepSleep;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVlcFNsZWVwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2VudGl0aWVzL0RlZXBTbGVlcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtQ0FRaUI7QUFDakIsK0JBQThCO0FBRzlCO0lBQUE7UUFvQkUsYUFBUSxHQUFZLElBQUksQ0FBQztJQVczQixDQUFDO0lBN0JDO1FBREMsZ0NBQXNCLEVBQUU7O3lDQUNkO0lBR1g7UUFEQyxnQkFBTSxFQUFFOzs0Q0FDSztJQUdkO1FBREMsZ0JBQU0sRUFBRTs7MkNBQ0k7SUFHYjtRQURDLGdCQUFNLEVBQUU7OzJDQUNJO0lBR2I7UUFEQyxnQkFBTSxFQUFFOztnREFDUztJQUdsQjtRQURDLGdCQUFNLEVBQUU7OzJDQUNJO0lBR2I7UUFEQyxnQkFBTSxDQUFDLFNBQVMsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQzs7K0NBQ1o7SUFJekI7UUFGQyxtQkFBUyxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsV0FBSSxFQUFKLENBQUksRUFBRSxVQUFDLElBQUksSUFBSyxPQUFBLElBQUksQ0FBQyxFQUFFLEVBQVAsQ0FBTyxDQUFDO1FBQzVDLG9CQUFVLEVBQUU7a0NBQ1AsV0FBSTsyQ0FBQztJQUdYO1FBREMsMEJBQWdCLEVBQUU7a0NBQ1QsSUFBSTsrQ0FBQztJQUdmO1FBREMsMEJBQWdCLEVBQUU7a0NBQ1QsSUFBSTsrQ0FBQztJQTlCSixTQUFTO1FBRHJCLGdCQUFNLEVBQUU7T0FDSSxTQUFTLENBK0JyQjtJQUFELGdCQUFDO0NBQUEsQUEvQkQsSUErQkM7QUEvQlksOEJBQVMifQ==