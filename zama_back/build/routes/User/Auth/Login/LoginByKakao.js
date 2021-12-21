"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var User_1 = require("../../../../entities/User");
var utils_1 = require("../../../../utils");
var LoginByKakao = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var kakaoId, terms, userRepository, userArr, user, savedUser, createUserArr, createUser, token, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                kakaoId = req.body.kakaoId;
                terms = req.body.terms;
                userRepository = typeorm_1.getRepository(User_1.User);
                return [4 /*yield*/, userRepository.find({
                        where: { kakaoId: kakaoId },
                        relations: ["subscriptions"],
                    })];
            case 1:
                userArr = _a.sent();
                user = userArr[0];
                if (user) {
                    return [2 /*return*/, res.status(200).send({
                            success: true,
                            user: __assign(__assign({}, user), { subscriptions: utils_1.filteredSubscriptions(user.subscriptions) }),
                            token: utils_1.generateToken(user.id),
                        })];
                }
                if (!terms) {
                    return [2 /*return*/, res.status(200).send({ success: true, user: null, token: null })];
                }
                return [4 /*yield*/, userRepository.save({
                        name: "",
                        email: "",
                        loginMethod: "KAKAO",
                        kakaoId: kakaoId,
                        serviceTermAgreement: terms.filter(function (obj) { return obj.title === "서비스 이용약관"; }).check,
                        privacyPolicyAgreement: terms.filter(function (obj) { return obj.title === "개인정보 처리방침"; }).check,
                        marketingAgreement: terms.filter(function (obj) { return obj.title === "마케팅 수신 동의"; }).check,
                    })];
            case 2:
                savedUser = _a.sent();
                return [4 /*yield*/, userRepository.find({
                        where: { kakaoId: savedUser.kakaoId },
                        relations: ["subscriptions"],
                    })];
            case 3:
                createUserArr = _a.sent();
                createUser = createUserArr[0];
                token = utils_1.generateToken(createUser.id);
                return [2 /*return*/, res.status(200).send({ success: true, user: createUser, token: token })];
            case 4:
                e_1 = _a.sent();
                res.status(400).json({ success: false, message: e_1.message });
                throw new Error(e_1);
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.default = LoginByKakao;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5CeUtha2FvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3JvdXRlcy9Vc2VyL0F1dGgvTG9naW4vTG9naW5CeUtha2FvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxtQ0FBd0M7QUFDeEMsa0RBQWlEO0FBQ2pELDJDQUF5RTtBQUV6RSxJQUFNLFlBQVksR0FBRyxVQUFPLEdBQVksRUFBRSxHQUFhOzs7Ozs7Z0JBRTdDLE9BQU8sR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDM0IsS0FBSyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUV2QixjQUFjLEdBQUcsdUJBQWEsQ0FBQyxXQUFJLENBQUMsQ0FBQztnQkFFUCxxQkFBTSxjQUFjLENBQUMsSUFBSSxDQUFDO3dCQUM1RCxLQUFLLEVBQUUsRUFBRSxPQUFPLFNBQUEsRUFBRTt3QkFDbEIsU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDO3FCQUM3QixDQUFDLEVBQUE7O2dCQUhJLE9BQU8sR0FBdUIsU0FHbEM7Z0JBRUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFeEIsSUFBSSxJQUFJLEVBQUU7b0JBQ1Isc0JBQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7NEJBQzFCLE9BQU8sRUFBRSxJQUFJOzRCQUNiLElBQUksd0JBQ0MsSUFBSSxLQUNQLGFBQWEsRUFBRSw2QkFBcUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQ3pEOzRCQUNELEtBQUssRUFBRSxxQkFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7eUJBQzlCLENBQUMsRUFBQztpQkFDSjtnQkFFRCxJQUFJLENBQUMsS0FBSyxFQUFFO29CQUNWLHNCQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFDO2lCQUN6RTtnQkFFaUIscUJBQU0sY0FBYyxDQUFDLElBQUksQ0FBQzt3QkFDMUMsSUFBSSxFQUFFLEVBQUU7d0JBQ1IsS0FBSyxFQUFFLEVBQUU7d0JBQ1QsV0FBVyxFQUFFLE9BQU87d0JBQ3BCLE9BQU8sU0FBQTt3QkFDUCxvQkFBb0IsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUNoQyxVQUFDLEdBQVEsSUFBSyxPQUFBLEdBQUcsQ0FBQyxLQUFLLEtBQUssVUFBVSxFQUF4QixDQUF3QixDQUN2QyxDQUFDLEtBQUs7d0JBQ1Asc0JBQXNCLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FDbEMsVUFBQyxHQUFRLElBQUssT0FBQSxHQUFHLENBQUMsS0FBSyxLQUFLLFdBQVcsRUFBekIsQ0FBeUIsQ0FDeEMsQ0FBQyxLQUFLO3dCQUNQLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxNQUFNLENBQzlCLFVBQUMsR0FBUSxJQUFLLE9BQUEsR0FBRyxDQUFDLEtBQUssS0FBSyxXQUFXLEVBQXpCLENBQXlCLENBQ3hDLENBQUMsS0FBSztxQkFDUixDQUFDLEVBQUE7O2dCQWRJLFNBQVMsR0FBRyxTQWNoQjtnQkFFd0MscUJBQU0sY0FBYyxDQUFDLElBQUksQ0FBQzt3QkFDbEUsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQyxPQUFPLEVBQUU7d0JBQ3JDLFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQztxQkFDN0IsQ0FBQyxFQUFBOztnQkFISSxhQUFhLEdBQXVCLFNBR3hDO2dCQUVJLFVBQVUsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlCLEtBQUssR0FBRyxxQkFBYSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFFM0Msc0JBQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxFQUFDOzs7Z0JBRXhFLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsR0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7Z0JBQzdELE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBQyxDQUFDLENBQUM7Ozs7S0FFdEIsQ0FBQztBQUVGLGtCQUFlLFlBQVksQ0FBQyJ9