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
var CertEmail_1 = require("../../../../entities/CertEmail");
var User_1 = require("../../../../entities/User");
var utils_1 = require("../../../../utils");
var SendCertNumToFind = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var email, certNum, certEmailRepository, userRepository, existingEmail, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                email = req.body.email;
                certNum = utils_1.generateSecret(6);
                certEmailRepository = typeorm_1.getRepository(CertEmail_1.CertEmail);
                userRepository = typeorm_1.getRepository(User_1.User);
                return [4 /*yield*/, userRepository.findOne({
                        email: email,
                        loginMethod: "EMAIL",
                    })];
            case 1:
                existingEmail = _a.sent();
                if (!existingEmail) return [3 /*break*/, 3];
                return [4 /*yield*/, certEmailRepository.save({
                        email: email,
                        certNum: certNum,
                    })];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3: return [2 /*return*/, res
                    .status(200)
                    .send({ success: false, message: "가입된 이메일이 아닙니다." })];
            case 4:
                utils_1.sendSecretMailToFind(certNum, email);
                return [2 /*return*/, res.status(200).send({ success: true })];
            case 5:
                e_1 = _a.sent();
                res.status(400).json({ success: false, message: e_1.message });
                throw new Error(e_1);
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.default = SendCertNumToFind;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VuZENlcnROdW1Ub0ZpbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvcm91dGVzL1VzZXIvQXV0aC9GaW5kL1NlbmRDZXJ0TnVtVG9GaW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsbUNBQXdDO0FBQ3hDLDREQUEyRDtBQUMzRCxrREFBaUQ7QUFDakQsMkNBQXlFO0FBRXpFLElBQU0saUJBQWlCLEdBQUcsVUFBTyxHQUFZLEVBQUUsR0FBYTs7Ozs7O2dCQUVsRCxLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ3ZCLE9BQU8sR0FBRyxzQkFBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixtQkFBbUIsR0FBRyx1QkFBYSxDQUFDLHFCQUFTLENBQUMsQ0FBQztnQkFDL0MsY0FBYyxHQUFHLHVCQUFhLENBQUMsV0FBSSxDQUFDLENBQUM7Z0JBRXJCLHFCQUFNLGNBQWMsQ0FBQyxPQUFPLENBQUM7d0JBQ2pELEtBQUssT0FBQTt3QkFDTCxXQUFXLEVBQUUsT0FBTztxQkFDckIsQ0FBQyxFQUFBOztnQkFISSxhQUFhLEdBQUcsU0FHcEI7cUJBQ0UsYUFBYSxFQUFiLHdCQUFhO2dCQUNmLHFCQUFNLG1CQUFtQixDQUFDLElBQUksQ0FBQzt3QkFDN0IsS0FBSyxPQUFBO3dCQUNMLE9BQU8sU0FBQTtxQkFDUixDQUFDLEVBQUE7O2dCQUhGLFNBR0UsQ0FBQzs7b0JBRUgsc0JBQU8sR0FBRztxQkFDUCxNQUFNLENBQUMsR0FBRyxDQUFDO3FCQUNYLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLENBQUMsRUFBQzs7Z0JBR3pELDRCQUFvQixDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDckMsc0JBQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQzs7O2dCQUUvQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEdBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2dCQUM3RCxNQUFNLElBQUksS0FBSyxDQUFDLEdBQUMsQ0FBQyxDQUFDOzs7O0tBRXRCLENBQUM7QUFFRixrQkFBZSxpQkFBaUIsQ0FBQyJ9