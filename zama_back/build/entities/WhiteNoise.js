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
exports.WhiteNoise = void 0;
var typeorm_1 = require("typeorm");
var WhiteNoise = /** @class */ (function () {
    function WhiteNoise() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], WhiteNoise.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], WhiteNoise.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], WhiteNoise.prototype, "file", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", String)
    ], WhiteNoise.prototype, "image", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], WhiteNoise.prototype, "createAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], WhiteNoise.prototype, "updateAt", void 0);
    WhiteNoise = __decorate([
        typeorm_1.Entity()
    ], WhiteNoise);
    return WhiteNoise;
}());
exports.WhiteNoise = WhiteNoise;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2hpdGVOb2lzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbnRpdGllcy9XaGl0ZU5vaXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1DQU1pQjtBQUdqQjtJQUFBO0lBa0JBLENBQUM7SUFoQkM7UUFEQyxnQ0FBc0IsRUFBRTs7MENBQ2Q7SUFHWDtRQURDLGdCQUFNLEVBQUU7OzRDQUNJO0lBR2I7UUFEQyxnQkFBTSxFQUFFOzs0Q0FDSTtJQUdiO1FBREMsZ0JBQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7NkNBQ2I7SUFHZDtRQURDLDBCQUFnQixFQUFFO2tDQUNULElBQUk7Z0RBQUM7SUFHZjtRQURDLDBCQUFnQixFQUFFO2tDQUNULElBQUk7Z0RBQUM7SUFqQkosVUFBVTtRQUR0QixnQkFBTSxFQUFFO09BQ0ksVUFBVSxDQWtCdEI7SUFBRCxpQkFBQztDQUFBLEFBbEJELElBa0JDO0FBbEJZLGdDQUFVIn0=