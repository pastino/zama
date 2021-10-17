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
var SignUpByEmail = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var name_1, email_1, password_1, term_1, userRepository_1, user, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                name_1 = req.body.name;
                email_1 = req.body.email;
                password_1 = req.body.password;
                term_1 = req.body.term;
                userRepository_1 = typeorm_1.getRepository(User_1.User);
                return [4 /*yield*/, userRepository_1.findOne({
                        email: email_1,
                    })];
            case 1:
                user = _a.sent();
                if (user) {
                    return [2 /*return*/, res
                            .status(200)
                            .send({ success: false, message: "이미 가입된 이메일입니다." })];
                }
                return [4 /*yield*/, bcryptjs_1.default.genSalt(10, function (err, salt) {
                        bcryptjs_1.default.hash(password_1, salt, function (err, hash) {
                            return __awaiter(this, void 0, void 0, function () {
                                var createUser, token;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, userRepository_1.save({
                                                name: name_1,
                                                email: email_1,
                                                password: hash,
                                                loginMethod: "EMAIL",
                                                serviceTermAgreement: term_1.filter(function (obj) { return obj.title === "서비스 이용약관"; }).check,
                                                privacyPolicyAgreement: term_1.filter(function (obj) { return obj.title === "개인정보 처리방침"; }).check,
                                                marketingAgreement: term_1.filter(function (obj) { return obj.title === "마케팅 수신 동의"; }).check,
                                            })];
                                        case 1:
                                            createUser = _a.sent();
                                            token = utils_1.generateToken(createUser.id);
                                            return [2 /*return*/, res.status(200).send({ success: true, user: createUser, token: token })];
                                    }
                                });
                            });
                        });
                    })];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                e_1 = _a.sent();
                res.status(400).json({ success: false, message: e_1.message });
                throw new Error(e_1);
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.default = SignUpByEmail;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2lnblVwQnlFbWFpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvVXNlci9BdXRoL1NpZ25VcC9TaWduVXBCeUVtYWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsbUNBQXdDO0FBQ3hDLGtEQUFpRDtBQUNqRCwyQ0FBa0Q7QUFDbEQsc0RBQThCO0FBRTlCLElBQU0sYUFBYSxHQUFHLFVBQU8sR0FBWSxFQUFFLEdBQWE7Ozs7OztnQkFFOUMsU0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDckIsVUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDdkIsYUFBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDN0IsU0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFFckIsbUJBQWlCLHVCQUFhLENBQUMsV0FBSSxDQUFDLENBQUM7Z0JBRVoscUJBQU0sZ0JBQWMsQ0FBQyxPQUFPLENBQUM7d0JBQzFELEtBQUssU0FBQTtxQkFDTixDQUFDLEVBQUE7O2dCQUZJLElBQUksR0FBcUIsU0FFN0I7Z0JBRUYsSUFBSSxJQUFJLEVBQUU7b0JBQ1Isc0JBQU8sR0FBRzs2QkFDUCxNQUFNLENBQUMsR0FBRyxDQUFDOzZCQUNYLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLENBQUMsRUFBQztpQkFDeEQ7Z0JBRUQscUJBQU0sa0JBQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLFVBQVUsR0FBRyxFQUFFLElBQUk7d0JBQzFDLGtCQUFNLENBQUMsSUFBSSxDQUFDLFVBQVEsRUFBRSxJQUFJLEVBQUUsVUFBZ0IsR0FBRyxFQUFFLElBQUk7Ozs7O2dEQUNoQyxxQkFBTSxnQkFBYyxDQUFDLElBQUksQ0FBQztnREFDM0MsSUFBSSxRQUFBO2dEQUNKLEtBQUssU0FBQTtnREFDTCxRQUFRLEVBQUUsSUFBSTtnREFDZCxXQUFXLEVBQUUsT0FBTztnREFDcEIsb0JBQW9CLEVBQUUsTUFBSSxDQUFDLE1BQU0sQ0FDL0IsVUFBQyxHQUFRLElBQUssT0FBQSxHQUFHLENBQUMsS0FBSyxLQUFLLFVBQVUsRUFBeEIsQ0FBd0IsQ0FDdkMsQ0FBQyxLQUFLO2dEQUNQLHNCQUFzQixFQUFFLE1BQUksQ0FBQyxNQUFNLENBQ2pDLFVBQUMsR0FBUSxJQUFLLE9BQUEsR0FBRyxDQUFDLEtBQUssS0FBSyxXQUFXLEVBQXpCLENBQXlCLENBQ3hDLENBQUMsS0FBSztnREFDUCxrQkFBa0IsRUFBRSxNQUFJLENBQUMsTUFBTSxDQUM3QixVQUFDLEdBQVEsSUFBSyxPQUFBLEdBQUcsQ0FBQyxLQUFLLEtBQUssV0FBVyxFQUF6QixDQUF5QixDQUN4QyxDQUFDLEtBQUs7NkNBQ1IsQ0FBQyxFQUFBOzs0Q0FkSSxVQUFVLEdBQUcsU0FjakI7NENBRUksS0FBSyxHQUFHLHFCQUFhLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDOzRDQUMzQyxzQkFBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLEVBQUM7Ozs7eUJBQ3pFLENBQUMsQ0FBQztvQkFDTCxDQUFDLENBQUMsRUFBQTs7Z0JBckJGLFNBcUJFLENBQUM7Ozs7Z0JBRUgsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztnQkFDN0QsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFDLENBQUMsQ0FBQzs7OztLQUV0QixDQUFDO0FBRUYsa0JBQWUsYUFBYSxDQUFDIn0=