"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Administrator_1 = require("../../../entities/Administrator");
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var CreateAdmin = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var args, id_1, password_1, superFlag_1, administratorRepository_1;
    return __generator(this, function (_a) {
        try {
            args = req.body;
            id_1 = args.id;
            password_1 = args.password;
            superFlag_1 = args.super;
            administratorRepository_1 = typeorm_1.getRepository(Administrator_1.Administrator);
            bcryptjs_1.default.genSalt(10, function (err, salt) {
                bcryptjs_1.default.hash(password_1, salt, function (err, hash) {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, administratorRepository_1.save({
                                        administratorId: id_1,
                                        password: hash,
                                        super: superFlag_1,
                                    })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                });
            });
            return [2 /*return*/, res.status(200).send({ success: true })];
        }
        catch (e) {
            console.log(e);
        }
        return [2 /*return*/];
    });
}); };
exports.default = CreateAdmin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JlYXRlQWRtaW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvcm91dGVzL2FkbWluL2F1dGgvQ3JlYXRlQWRtaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxtQ0FBd0M7QUFDeEMsaUVBQWdFO0FBQ2hFLHNEQUE4QjtBQUU5QixJQUFNLFdBQVcsR0FBRyxVQUFPLEdBQVksRUFBRSxHQUFhOzs7UUFDcEQsSUFBSTtZQUNJLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBRWhCLE9BQUssSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNiLGFBQVcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUN6QixjQUFZLElBQUksQ0FBQyxLQUFLLENBQUM7WUFFdkIsNEJBQTBCLHVCQUFhLENBQUMsNkJBQWEsQ0FBQyxDQUFDO1lBQzdELGtCQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxVQUFVLEdBQUcsRUFBRSxJQUFJO2dCQUNwQyxrQkFBTSxDQUFDLElBQUksQ0FBQyxVQUFRLEVBQUUsSUFBSSxFQUFFLFVBQWdCLEdBQUcsRUFBRSxJQUFJOzs7O3dDQUNuRCxxQkFBTSx5QkFBdUIsQ0FBQyxJQUFJLENBQUM7d0NBQ2pDLGVBQWUsRUFBRSxJQUFFO3dDQUNuQixRQUFRLEVBQUUsSUFBSTt3Q0FDZCxLQUFLLEVBQUUsV0FBUztxQ0FDakIsQ0FBQyxFQUFBOztvQ0FKRixTQUlFLENBQUM7Ozs7O2lCQUNKLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1lBRUgsc0JBQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQztTQUNoRDtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNoQjs7O0tBQ0YsQ0FBQztBQUVGLGtCQUFlLFdBQVcsQ0FBQyJ9