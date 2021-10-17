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
exports.SignUpServeyList = void 0;
var typeorm_1 = require("typeorm");
var SignUpServeyList = /** @class */ (function () {
    function SignUpServeyList() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], SignUpServeyList.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], SignUpServeyList.prototype, "purpose", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], SignUpServeyList.prototype, "createAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], SignUpServeyList.prototype, "updateAt", void 0);
    SignUpServeyList = __decorate([
        typeorm_1.Entity()
    ], SignUpServeyList);
    return SignUpServeyList;
}());
exports.SignUpServeyList = SignUpServeyList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2lnblVwU2VydmV5TGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbnRpdGllcy9TaWduVXBTZXJ2ZXlMaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1DQU1pQjtBQUdqQjtJQUFBO0lBV0EsQ0FBQztJQVRDO1FBREMsZ0NBQXNCLEVBQUU7O2dEQUNkO0lBR1g7UUFEQyxnQkFBTSxFQUFFOztxREFDTztJQUdoQjtRQURDLDBCQUFnQixFQUFFO2tDQUNULElBQUk7c0RBQUM7SUFFZjtRQURDLDBCQUFnQixFQUFFO2tDQUNULElBQUk7c0RBQUM7SUFWSixnQkFBZ0I7UUFENUIsZ0JBQU0sRUFBRTtPQUNJLGdCQUFnQixDQVc1QjtJQUFELHVCQUFDO0NBQUEsQUFYRCxJQVdDO0FBWFksNENBQWdCIn0=