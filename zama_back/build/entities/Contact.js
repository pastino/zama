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
exports.Contact = void 0;
var typeorm_1 = require("typeorm");
var Contact = /** @class */ (function () {
    function Contact() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Contact.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Contact.prototype, "userId", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Contact.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Contact.prototype, "contents", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Contact.prototype, "createAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Contact.prototype, "updateAt", void 0);
    Contact = __decorate([
        typeorm_1.Entity()
    ], Contact);
    return Contact;
}());
exports.Contact = Contact;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbnRpdGllcy9Db250YWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1DQU1pQjtBQUdqQjtJQUFBO0lBaUJBLENBQUM7SUFmQztRQURDLGdDQUFzQixFQUFFOzt1Q0FDZDtJQUdYO1FBREMsZ0JBQU0sRUFBRTs7MkNBQ007SUFHZjtRQURDLGdCQUFNLEVBQUU7OzBDQUNLO0lBR2Q7UUFEQyxnQkFBTSxFQUFFOzs2Q0FDUTtJQUdqQjtRQURDLDBCQUFnQixFQUFFO2tDQUNULElBQUk7NkNBQUM7SUFFZjtRQURDLDBCQUFnQixFQUFFO2tDQUNULElBQUk7NkNBQUM7SUFoQkosT0FBTztRQURuQixnQkFBTSxFQUFFO09BQ0ksT0FBTyxDQWlCbkI7SUFBRCxjQUFDO0NBQUEsQUFqQkQsSUFpQkM7QUFqQlksMEJBQU8ifQ==