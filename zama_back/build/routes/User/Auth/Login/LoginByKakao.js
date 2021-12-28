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
    var kakaoId, terms, email, nickName, userRepository, userArr, user, savedUser, createUserArr, createUser, token, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                kakaoId = req.body.kakaoId;
                terms = req.body.terms;
                email = req.body.email;
                nickName = req.body.nickname;
                console.log(nickName);
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
                    console.log("term in");
                    return [2 /*return*/, res.status(200).send({ success: true, user: null, token: null })];
                }
                return [4 /*yield*/, userRepository.save({
                        email: email ? email : "",
                        name: nickName ? nickName : "",
                        loginMethod: "KAKAO",
                        kakaoId: kakaoId,
                        serviceTermAgreement: terms.filter(function (obj) { return obj.title === "서비스 이용약관"; }).check,
                        privacyPolicyAgreement: terms.filter(function (obj) { return obj.title === "개인정보 처리방침"; }).check,
                        marketingAgreement: terms.filter(function (obj) { return obj.title === "마케팅 수신 동의"; }).check,
                    })];
            case 2:
                savedUser = _a.sent();
                return [4 /*yield*/, userRepository.find({
                        where: {
                            kakaoId: savedUser.kakaoId,
                        },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5CeUtha2FvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3JvdXRlcy9Vc2VyL0F1dGgvTG9naW4vTG9naW5CeUtha2FvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxtQ0FBd0M7QUFDeEMsa0RBQWlEO0FBQ2pELDJDQUF5RTtBQUV6RSxJQUFNLFlBQVksR0FBRyxVQUFPLEdBQVksRUFBRSxHQUFhOzs7Ozs7Z0JBRTdDLE9BQU8sR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDM0IsS0FBSyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUN2QixLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ3ZCLFFBQVEsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDaEIsY0FBYyxHQUFHLHVCQUFhLENBQUMsV0FBSSxDQUFDLENBQUM7Z0JBRVAscUJBQU0sY0FBYyxDQUFDLElBQUksQ0FBQzt3QkFDNUQsS0FBSyxFQUFFLEVBQUUsT0FBTyxTQUFBLEVBQUU7d0JBQ2xCLFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQztxQkFDN0IsQ0FBQyxFQUFBOztnQkFISSxPQUFPLEdBQXVCLFNBR2xDO2dCQUVJLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRXhCLElBQUksSUFBSSxFQUFFO29CQUNSLHNCQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDOzRCQUMxQixPQUFPLEVBQUUsSUFBSTs0QkFDYixJQUFJLHdCQUNDLElBQUksS0FDUCxhQUFhLEVBQUUsNkJBQXFCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUN6RDs0QkFDRCxLQUFLLEVBQUUscUJBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO3lCQUM5QixDQUFDLEVBQUM7aUJBQ0o7Z0JBRUQsSUFBSSxDQUFDLEtBQUssRUFBRTtvQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUN2QixzQkFBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQztpQkFDekU7Z0JBRWlCLHFCQUFNLGNBQWMsQ0FBQyxJQUFJLENBQUM7d0JBQzFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTt3QkFDekIsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO3dCQUM5QixXQUFXLEVBQUUsT0FBTzt3QkFDcEIsT0FBTyxTQUFBO3dCQUNQLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxNQUFNLENBQ2hDLFVBQUMsR0FBUSxJQUFLLE9BQUEsR0FBRyxDQUFDLEtBQUssS0FBSyxVQUFVLEVBQXhCLENBQXdCLENBQ3ZDLENBQUMsS0FBSzt3QkFDUCxzQkFBc0IsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUNsQyxVQUFDLEdBQVEsSUFBSyxPQUFBLEdBQUcsQ0FBQyxLQUFLLEtBQUssV0FBVyxFQUF6QixDQUF5QixDQUN4QyxDQUFDLEtBQUs7d0JBQ1Asa0JBQWtCLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FDOUIsVUFBQyxHQUFRLElBQUssT0FBQSxHQUFHLENBQUMsS0FBSyxLQUFLLFdBQVcsRUFBekIsQ0FBeUIsQ0FDeEMsQ0FBQyxLQUFLO3FCQUNSLENBQUMsRUFBQTs7Z0JBZEksU0FBUyxHQUFHLFNBY2hCO2dCQUV3QyxxQkFBTSxjQUFjLENBQUMsSUFBSSxDQUFDO3dCQUNsRSxLQUFLLEVBQUU7NEJBQ0wsT0FBTyxFQUFFLFNBQVMsQ0FBQyxPQUFPO3lCQUMzQjt3QkFDRCxTQUFTLEVBQUUsQ0FBQyxlQUFlLENBQUM7cUJBQzdCLENBQUMsRUFBQTs7Z0JBTEksYUFBYSxHQUF1QixTQUt4QztnQkFFSSxVQUFVLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5QixLQUFLLEdBQUcscUJBQWEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBRTNDLHNCQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsRUFBQzs7O2dCQUV4RSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEdBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2dCQUM3RCxNQUFNLElBQUksS0FBSyxDQUFDLEdBQUMsQ0FBQyxDQUFDOzs7O0tBRXRCLENBQUM7QUFFRixrQkFBZSxZQUFZLENBQUMifQ==