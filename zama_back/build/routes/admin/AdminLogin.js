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
var Administrator_1 = require("../../entities/Administrator");
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var utils_1 = require("../../utils");
var LoginAdmin = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var args, id, password, administratorRepository, administrator, valid, e_1, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 6, , 7]);
                args = req.body;
                id = args.id;
                password = args.password;
                administratorRepository = typeorm_1.getRepository(Administrator_1.Administrator);
                return [4 /*yield*/, administratorRepository.findOne({
                        administratorId: id,
                    })];
            case 1:
                administrator = _a.sent();
                _a.label = 2;
            case 2:
                _a.trys.push([2, 4, , 5]);
                return [4 /*yield*/, bcryptjs_1.default.compare(password, administrator.password)];
            case 3:
                valid = _a.sent();
                if (!valid)
                    return [2 /*return*/, res.status(200).send({ success: false })];
                return [2 /*return*/, res.status(200).send({
                        success: true,
                        token: utils_1.generateToken(administrator.id),
                        administrator: administrator,
                    })];
            case 4:
                e_1 = _a.sent();
                return [2 /*return*/, res.status(200).send({ success: false })];
            case 5: return [3 /*break*/, 7];
            case 6:
                e_2 = _a.sent();
                console.log(e_2);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.default = LoginAdmin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRtaW5Mb2dpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYWRtaW4vQWRtaW5Mb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLG1DQUF3QztBQUN4Qyw4REFBNkQ7QUFDN0Qsc0RBQThCO0FBQzlCLHFDQUE0QztBQUU1QyxJQUFNLFVBQVUsR0FBRyxVQUFPLEdBQVksRUFBRSxHQUFhOzs7Ozs7Z0JBRTNDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO2dCQUVoQixFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztnQkFDYixRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFFekIsdUJBQXVCLEdBQUcsdUJBQWEsQ0FBQyw2QkFBYSxDQUFDLENBQUM7Z0JBRWxDLHFCQUFNLHVCQUF1QixDQUFDLE9BQU8sQ0FBQzt3QkFDL0QsZUFBZSxFQUFFLEVBQUU7cUJBQ3BCLENBQUMsRUFBQTs7Z0JBRkksYUFBYSxHQUFRLFNBRXpCOzs7O2dCQUdjLHFCQUFNLGtCQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUE7O2dCQUE5RCxLQUFLLEdBQUcsU0FBc0Q7Z0JBQ3BFLElBQUksQ0FBQyxLQUFLO29CQUFFLHNCQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUM7Z0JBRTVELHNCQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO3dCQUMxQixPQUFPLEVBQUUsSUFBSTt3QkFDYixLQUFLLEVBQUUscUJBQWEsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDO3dCQUN0QyxhQUFhLGVBQUE7cUJBQ2QsQ0FBQyxFQUFDOzs7Z0JBRUgsc0JBQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQzs7OztnQkFHbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFDLENBQUMsQ0FBQzs7Ozs7S0FFbEIsQ0FBQztBQUVGLGtCQUFlLFVBQVUsQ0FBQyJ9