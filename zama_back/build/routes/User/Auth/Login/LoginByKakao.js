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
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var User_1 = require("../../../../entities/User");
var utils_1 = require("../../../../utils");
var LoginByKakao = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var kakaoId, terms, userRepository, user, createUser, token, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                kakaoId = req.body.kakaoId;
                terms = req.body.terms;
                userRepository = typeorm_1.getRepository(User_1.User);
                return [4 /*yield*/, userRepository.findOne({
                        kakaoId: kakaoId,
                    })];
            case 1:
                user = _a.sent();
                if (user) {
                    return [2 /*return*/, res
                            .status(200)
                            .send({ success: true, user: user, token: utils_1.generateToken(user.id) })];
                }
                if (!terms) {
                    return [2 /*return*/, res.status(200).send({ success: true, user: null, token: null })];
                }
                return [4 /*yield*/, userRepository.save({
                        name: "테스트",
                        email: "joon5006@naver.com",
                        loginMethod: "KAKAO",
                        kakaoId: kakaoId,
                        serviceTermAgreement: terms.filter(function (obj) { return obj.title === "서비스 이용약관"; }).check,
                        privacyPolicyAgreement: terms.filter(function (obj) { return obj.title === "개인정보 처리방침"; }).check,
                        marketingAgreement: terms.filter(function (obj) { return obj.title === "마케팅 수신 동의"; }).check,
                    })];
            case 2:
                createUser = _a.sent();
                token = utils_1.generateToken(createUser.id);
                return [2 /*return*/, res.status(200).send({ success: true, user: createUser, token: token })];
            case 3:
                e_1 = _a.sent();
                res.status(400).json({ success: false, message: e_1.message });
                throw new Error(e_1);
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.default = LoginByKakao;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5CeUtha2FvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3JvdXRlcy9Vc2VyL0F1dGgvTG9naW4vTG9naW5CeUtha2FvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsbUNBQXdDO0FBQ3hDLGtEQUFpRDtBQUNqRCwyQ0FBa0Q7QUFFbEQsSUFBTSxZQUFZLEdBQUcsVUFBTyxHQUFZLEVBQUUsR0FBYTs7Ozs7O2dCQUU3QyxPQUFPLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQzNCLEtBQUssR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFFdkIsY0FBYyxHQUFHLHVCQUFhLENBQUMsV0FBSSxDQUFDLENBQUM7Z0JBQ1oscUJBQU0sY0FBYyxDQUFDLE9BQU8sQ0FBQzt3QkFDMUQsT0FBTyxTQUFBO3FCQUNSLENBQUMsRUFBQTs7Z0JBRkksSUFBSSxHQUFxQixTQUU3QjtnQkFFRixJQUFJLElBQUksRUFBRTtvQkFDUixzQkFBTyxHQUFHOzZCQUNQLE1BQU0sQ0FBQyxHQUFHLENBQUM7NkJBQ1gsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLE1BQUEsRUFBRSxLQUFLLEVBQUUscUJBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFDO2lCQUNqRTtnQkFFRCxJQUFJLENBQUMsS0FBSyxFQUFFO29CQUNWLHNCQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFDO2lCQUN6RTtnQkFFa0IscUJBQU0sY0FBYyxDQUFDLElBQUksQ0FBQzt3QkFDM0MsSUFBSSxFQUFFLEtBQUs7d0JBQ1gsS0FBSyxFQUFFLG9CQUFvQjt3QkFDM0IsV0FBVyxFQUFFLE9BQU87d0JBQ3BCLE9BQU8sU0FBQTt3QkFDUCxvQkFBb0IsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUNoQyxVQUFDLEdBQVEsSUFBSyxPQUFBLEdBQUcsQ0FBQyxLQUFLLEtBQUssVUFBVSxFQUF4QixDQUF3QixDQUN2QyxDQUFDLEtBQUs7d0JBQ1Asc0JBQXNCLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FDbEMsVUFBQyxHQUFRLElBQUssT0FBQSxHQUFHLENBQUMsS0FBSyxLQUFLLFdBQVcsRUFBekIsQ0FBeUIsQ0FDeEMsQ0FBQyxLQUFLO3dCQUNQLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxNQUFNLENBQzlCLFVBQUMsR0FBUSxJQUFLLE9BQUEsR0FBRyxDQUFDLEtBQUssS0FBSyxXQUFXLEVBQXpCLENBQXlCLENBQ3hDLENBQUMsS0FBSztxQkFDUixDQUFDLEVBQUE7O2dCQWRJLFVBQVUsR0FBRyxTQWNqQjtnQkFFSSxLQUFLLEdBQUcscUJBQWEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQzNDLHNCQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsRUFBQzs7O2dCQUV4RSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEdBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2dCQUM3RCxNQUFNLElBQUksS0FBSyxDQUFDLEdBQUMsQ0FBQyxDQUFDOzs7O0tBRXRCLENBQUM7QUFFRixrQkFBZSxZQUFZLENBQUMifQ==