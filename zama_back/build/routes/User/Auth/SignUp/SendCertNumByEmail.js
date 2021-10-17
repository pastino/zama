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
var utils_1 = require("../../../../utils");
var SendCertNumByEmail = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var email, certNum, certEmailRepository, existingEmail, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 6, , 7]);
                email = req.body.email;
                certNum = utils_1.generateSecret(6);
                certEmailRepository = typeorm_1.getRepository(CertEmail_1.CertEmail);
                return [4 /*yield*/, certEmailRepository.findOne({
                        email: email,
                    })];
            case 1:
                existingEmail = _a.sent();
                if (!existingEmail) return [3 /*break*/, 3];
                return [4 /*yield*/, certEmailRepository.update({
                        id: existingEmail === null || existingEmail === void 0 ? void 0 : existingEmail.id,
                    }, { certNum: certNum })];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3: return [4 /*yield*/, certEmailRepository.save({
                    email: email,
                    certNum: certNum,
                })];
            case 4:
                _a.sent();
                _a.label = 5;
            case 5:
                utils_1.sendSecretMail(certNum, email);
                return [2 /*return*/, res.status(200).send({ success: true })];
            case 6:
                e_1 = _a.sent();
                res.status(400).json({ success: false, message: e_1.message });
                throw new Error(e_1);
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.default = SendCertNumByEmail;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VuZENlcnROdW1CeUVtYWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3JvdXRlcy9Vc2VyL0F1dGgvU2lnblVwL1NlbmRDZXJ0TnVtQnlFbWFpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLG1DQUF3QztBQUN4Qyw0REFBMkQ7QUFDM0QsMkNBQW1FO0FBRW5FLElBQU0sa0JBQWtCLEdBQUcsVUFBTyxHQUFZLEVBQUUsR0FBYTs7Ozs7O2dCQUVuRCxLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ3ZCLE9BQU8sR0FBRyxzQkFBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixtQkFBbUIsR0FBRyx1QkFBYSxDQUFDLHFCQUFTLENBQUMsQ0FBQztnQkFDL0IscUJBQU0sbUJBQW1CLENBQUMsT0FBTyxDQUFDO3dCQUN0RCxLQUFLLE9BQUE7cUJBQ04sQ0FBQyxFQUFBOztnQkFGSSxhQUFhLEdBQUcsU0FFcEI7cUJBQ0UsYUFBYSxFQUFiLHdCQUFhO2dCQUNmLHFCQUFNLG1CQUFtQixDQUFDLE1BQU0sQ0FDOUI7d0JBQ0UsRUFBRSxFQUFFLGFBQWEsYUFBYixhQUFhLHVCQUFiLGFBQWEsQ0FBRSxFQUFFO3FCQUN0QixFQUNELEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FDWixFQUFBOztnQkFMRCxTQUtDLENBQUM7O29CQUVGLHFCQUFNLG1CQUFtQixDQUFDLElBQUksQ0FBQztvQkFDN0IsS0FBSyxPQUFBO29CQUNMLE9BQU8sU0FBQTtpQkFDUixDQUFDLEVBQUE7O2dCQUhGLFNBR0UsQ0FBQzs7O2dCQUVMLHNCQUFjLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUMvQixzQkFBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFDOzs7Z0JBRS9DLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsR0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7Z0JBQzdELE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBQyxDQUFDLENBQUM7Ozs7S0FFdEIsQ0FBQztBQUVGLGtCQUFlLGtCQUFrQixDQUFDIn0=