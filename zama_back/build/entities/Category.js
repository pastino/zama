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
exports.Category = void 0;
var typeorm_1 = require("typeorm");
var SleepAudio_1 = require("./SleepAudio");
var Types_1 = require("./Types");
var Category = /** @class */ (function () {
    function Category() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Category.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({
            type: "enum",
            enum: Types_1.DivisionEnum,
        }),
        __metadata("design:type", Object)
    ], Category.prototype, "division", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", String)
    ], Category.prototype, "category", void 0);
    __decorate([
        typeorm_1.ManyToMany(function () { return SleepAudio_1.SleepAudio; }, function (sleepAudio) { return sleepAudio.categories; }),
        __metadata("design:type", Array)
    ], Category.prototype, "sleepAudios", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Category.prototype, "createAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Category.prototype, "updateAt", void 0);
    Category = __decorate([
        typeorm_1.Entity()
    ], Category);
    return Category;
}());
exports.Category = Category;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2F0ZWdvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZW50aXRpZXMvQ2F0ZWdvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbUNBT2lCO0FBQ2pCLDJDQUEwQztBQUMxQyxpQ0FBaUQ7QUFHakQ7SUFBQTtJQXVCQSxDQUFDO0lBckJDO1FBREMsZ0NBQXNCLEVBQUU7O3dDQUNkO0lBTVg7UUFKQyxnQkFBTSxDQUFDO1lBQ04sSUFBSSxFQUFFLE1BQU07WUFDWixJQUFJLEVBQUUsb0JBQVk7U0FDbkIsQ0FBQzs7OENBQ29DO0lBR3RDO1FBREMsZ0JBQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7OENBQ1Y7SUFNakI7UUFKQyxvQkFBVSxDQUNULGNBQU0sT0FBQSx1QkFBVSxFQUFWLENBQVUsRUFDaEIsVUFBQyxVQUFzQixJQUFLLE9BQUEsVUFBVSxDQUFDLFVBQVUsRUFBckIsQ0FBcUIsQ0FDbEQ7O2lEQUN5QjtJQUcxQjtRQURDLDBCQUFnQixFQUFFO2tDQUNULElBQUk7OENBQUM7SUFFZjtRQURDLDBCQUFnQixFQUFFO2tDQUNULElBQUk7OENBQUM7SUF0QkosUUFBUTtRQURwQixnQkFBTSxFQUFFO09BQ0ksUUFBUSxDQXVCcEI7SUFBRCxlQUFDO0NBQUEsQUF2QkQsSUF1QkM7QUF2QlksNEJBQVEifQ==