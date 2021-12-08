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
exports.AudioBasketMapping = void 0;
var typeorm_1 = require("typeorm");
var SleepAudio_1 = require("./SleepAudio");
var User_1 = require("./User");
var AudioBasketMapping = /** @class */ (function () {
    function AudioBasketMapping() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], AudioBasketMapping.prototype, "id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return SleepAudio_1.SleepAudio; }, function (sleepAudio) { return sleepAudio.inBasketUsers; }),
        __metadata("design:type", SleepAudio_1.SleepAudio)
    ], AudioBasketMapping.prototype, "audio", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return User_1.User; }, function (user) { return user.inBasketAudios; }),
        __metadata("design:type", User_1.User)
    ], AudioBasketMapping.prototype, "user", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], AudioBasketMapping.prototype, "createAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], AudioBasketMapping.prototype, "updateAt", void 0);
    AudioBasketMapping = __decorate([
        typeorm_1.Entity()
    ], AudioBasketMapping);
    return AudioBasketMapping;
}());
exports.AudioBasketMapping = AudioBasketMapping;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXVkaW9CYXNrZXRNYXBwaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2VudGl0aWVzL0F1ZGlvQmFza2V0TWFwcGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtQ0FNaUI7QUFDakIsMkNBQTBDO0FBQzFDLCtCQUE4QjtBQUc5QjtJQUFBO0lBZUEsQ0FBQztJQWJDO1FBREMsZ0NBQXNCLEVBQUU7O2tEQUNkO0lBR1g7UUFEQyxtQkFBUyxDQUFDLGNBQU0sT0FBQSx1QkFBVSxFQUFWLENBQVUsRUFBRSxVQUFDLFVBQVUsSUFBSyxPQUFBLFVBQVUsQ0FBQyxhQUFhLEVBQXhCLENBQXdCLENBQUM7a0NBQy9ELHVCQUFVO3FEQUFDO0lBR2xCO1FBREMsbUJBQVMsQ0FBQyxjQUFNLE9BQUEsV0FBSSxFQUFKLENBQUksRUFBRSxVQUFDLElBQUksSUFBSyxPQUFBLElBQUksQ0FBQyxjQUFjLEVBQW5CLENBQW1CLENBQUM7a0NBQy9DLFdBQUk7b0RBQUM7SUFHWDtRQURDLDBCQUFnQixFQUFFO2tDQUNULElBQUk7d0RBQUM7SUFHZjtRQURDLDBCQUFnQixFQUFFO2tDQUNULElBQUk7d0RBQUM7SUFkSixrQkFBa0I7UUFEOUIsZ0JBQU0sRUFBRTtPQUNJLGtCQUFrQixDQWU5QjtJQUFELHlCQUFDO0NBQUEsQUFmRCxJQWVDO0FBZlksZ0RBQWtCIn0=