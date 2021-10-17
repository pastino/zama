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
exports.SolutionAnalysis = void 0;
var typeorm_1 = require("typeorm");
var SolutionAnalysis = /** @class */ (function () {
    function SolutionAnalysis() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], SolutionAnalysis.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], SolutionAnalysis.prototype, "userId", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], SolutionAnalysis.prototype, "purpose", void 0);
    __decorate([
        typeorm_1.Column({
            type: "enum",
            enum: ["SignUp"],
        }),
        __metadata("design:type", Object)
    ], SolutionAnalysis.prototype, "category", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], SolutionAnalysis.prototype, "createAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], SolutionAnalysis.prototype, "updateAt", void 0);
    SolutionAnalysis = __decorate([
        typeorm_1.Entity()
    ], SolutionAnalysis);
    return SolutionAnalysis;
}());
exports.SolutionAnalysis = SolutionAnalysis;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU29sdXRpb25BbmFseXNpcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbnRpdGllcy9Tb2x1dGlvbkFuYWx5c2lzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1DQU1pQjtBQUtqQjtJQUFBO0lBb0JBLENBQUM7SUFsQkM7UUFEQyxnQ0FBc0IsRUFBRTs7Z0RBQ2Q7SUFHWDtRQURDLGdCQUFNLEVBQUU7O29EQUNNO0lBR2Y7UUFEQyxnQkFBTSxFQUFFOztxREFDTztJQU1oQjtRQUpDLGdCQUFNLENBQUM7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQztTQUNqQixDQUFDOztzREFDb0M7SUFHdEM7UUFEQywwQkFBZ0IsRUFBRTtrQ0FDVCxJQUFJO3NEQUFDO0lBRWY7UUFEQywwQkFBZ0IsRUFBRTtrQ0FDVCxJQUFJO3NEQUFDO0lBbkJKLGdCQUFnQjtRQUQ1QixnQkFBTSxFQUFFO09BQ0ksZ0JBQWdCLENBb0I1QjtJQUFELHVCQUFDO0NBQUEsQUFwQkQsSUFvQkM7QUFwQlksNENBQWdCIn0=