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
var User_1 = require("../../../../entities/User");
var utils_1 = require("../../../../utils");
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var LoginByEmail = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var email, password, userRepository, user, valid, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                email = req.body.email;
                password = req.body.password;
                userRepository = typeorm_1.getRepository(User_1.User);
                return [4 /*yield*/, userRepository.findOne({
                        email: email,
                    })];
            case 1:
                user = _a.sent();
                if (!user) {
                    return [2 /*return*/, res
                            .status(200)
                            .send({ success: false, message: "가입된 이메일이 아닙니다." })];
                }
                if ((user === null || user === void 0 ? void 0 : user.loginMethod) !== "EMAIL") {
                    return [2 /*return*/, res.status(200).send({
                            success: false,
                            message: (user === null || user === void 0 ? void 0 : user.loginMethod) + "\uB85C \uAC00\uC785\uB41C \uC774\uBA54\uC77C \uC785\uB2C8\uB2E4",
                        })];
                }
                if (!password) return [3 /*break*/, 3];
                return [4 /*yield*/, bcryptjs_1.default.compare(password, user === null || user === void 0 ? void 0 : user.password)];
            case 2:
                valid = _a.sent();
                if (!valid) {
                    return [2 /*return*/, res.status(200).send({
                            success: false,
                            message: "잘못된 비밀번호 입니다.",
                        })];
                }
                _a.label = 3;
            case 3: return [2 /*return*/, res.status(200).send({
                    success: true,
                    user: user,
                    token: utils_1.generateToken(user.id),
                })];
            case 4:
                e_1 = _a.sent();
                res.status(400).json({ success: false, message: e_1.message });
                throw new Error(e_1);
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.default = LoginByEmail;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5CeUVtYWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3JvdXRlcy9Vc2VyL0F1dGgvTG9naW4vTG9naW5CeUVtYWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsbUNBQXdDO0FBQ3hDLGtEQUFpRDtBQUNqRCwyQ0FBa0Q7QUFDbEQsc0RBQThCO0FBRTlCLElBQU0sWUFBWSxHQUFHLFVBQU8sR0FBWSxFQUFFLEdBQWE7Ozs7OztnQkFFN0MsS0FBSyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUN2QixRQUFRLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBRTdCLGNBQWMsR0FBRyx1QkFBYSxDQUFDLFdBQUksQ0FBQyxDQUFDO2dCQUV6QixxQkFBTSxjQUFjLENBQUMsT0FBTyxDQUFDO3dCQUM3QyxLQUFLLE9BQUE7cUJBQ04sQ0FBQyxFQUFBOztnQkFGSSxJQUFJLEdBQVEsU0FFaEI7Z0JBRUYsSUFBSSxDQUFDLElBQUksRUFBRTtvQkFDVCxzQkFBTyxHQUFHOzZCQUNQLE1BQU0sQ0FBQyxHQUFHLENBQUM7NkJBQ1gsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFDO2lCQUN4RDtnQkFFRCxJQUFJLENBQUEsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLFdBQVcsTUFBSyxPQUFPLEVBQUU7b0JBQ2pDLHNCQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDOzRCQUMxQixPQUFPLEVBQUUsS0FBSzs0QkFDZCxPQUFPLEVBQUUsQ0FBRyxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsV0FBVyxxRUFBZTt5QkFDN0MsQ0FBQyxFQUFDO2lCQUNKO3FCQUVHLFFBQVEsRUFBUix3QkFBUTtnQkFDSSxxQkFBTSxrQkFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLFFBQVEsQ0FBQyxFQUFBOztnQkFBdEQsS0FBSyxHQUFHLFNBQThDO2dCQUM1RCxJQUFJLENBQUMsS0FBSyxFQUFFO29CQUNWLHNCQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDOzRCQUMxQixPQUFPLEVBQUUsS0FBSzs0QkFDZCxPQUFPLEVBQUUsZUFBZTt5QkFDekIsQ0FBQyxFQUFDO2lCQUNKOztvQkFFSCxzQkFBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDMUIsT0FBTyxFQUFFLElBQUk7b0JBQ2IsSUFBSSxNQUFBO29CQUNKLEtBQUssRUFBRSxxQkFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7aUJBQzlCLENBQUMsRUFBQzs7O2dCQUVILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsR0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7Z0JBQzdELE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBQyxDQUFDLENBQUM7Ozs7S0FFdEIsQ0FBQztBQUVGLGtCQUFlLFlBQVksQ0FBQyJ9