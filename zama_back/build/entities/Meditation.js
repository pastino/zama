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
exports.Meditation = void 0;
var typeorm_1 = require("typeorm");
var User_1 = require("./User");
var Meditation = /** @class */ (function () {
    function Meditation() {
        this.recoFlag = true;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Meditation.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Meditation.prototype, "title", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Meditation.prototype, "time", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Meditation.prototype, "type", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Meditation.prototype, "thumbnail", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Meditation.prototype, "file", void 0);
    __decorate([
        typeorm_1.Column("boolean", { default: true }),
        __metadata("design:type", Boolean)
    ], Meditation.prototype, "recoFlag", void 0);
    __decorate([
        typeorm_1.OneToOne(function (type) { return User_1.User; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", User_1.User)
    ], Meditation.prototype, "user", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Meditation.prototype, "createAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Meditation.prototype, "updateAt", void 0);
    Meditation = __decorate([
        typeorm_1.Entity()
    ], Meditation);
    return Meditation;
}());
exports.Meditation = Meditation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVkaXRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbnRpdGllcy9NZWRpdGF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1DQVFpQjtBQUNqQiwrQkFBOEI7QUFHOUI7SUFBQTtRQW9CRSxhQUFRLEdBQVksSUFBSSxDQUFDO0lBVzNCLENBQUM7SUE3QkM7UUFEQyxnQ0FBc0IsRUFBRTs7MENBQ2Q7SUFHWDtRQURDLGdCQUFNLEVBQUU7OzZDQUNLO0lBR2Q7UUFEQyxnQkFBTSxFQUFFOzs0Q0FDSTtJQUdiO1FBREMsZ0JBQU0sRUFBRTs7NENBQ0k7SUFHYjtRQURDLGdCQUFNLEVBQUU7O2lEQUNTO0lBR2xCO1FBREMsZ0JBQU0sRUFBRTs7NENBQ0k7SUFHYjtRQURDLGdCQUFNLENBQUMsU0FBUyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDOztnREFDWjtJQUl6QjtRQUZDLGtCQUFRLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxXQUFJLEVBQUosQ0FBSSxDQUFDO1FBQ3hCLG9CQUFVLEVBQUU7a0NBQ1AsV0FBSTs0Q0FBQztJQUdYO1FBREMsMEJBQWdCLEVBQUU7a0NBQ1QsSUFBSTtnREFBQztJQUdmO1FBREMsMEJBQWdCLEVBQUU7a0NBQ1QsSUFBSTtnREFBQztJQTlCSixVQUFVO1FBRHRCLGdCQUFNLEVBQUU7T0FDSSxVQUFVLENBK0J0QjtJQUFELGlCQUFDO0NBQUEsQUEvQkQsSUErQkM7QUEvQlksZ0NBQVUifQ==