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
var Voucher_1 = require("../../entities/Voucher");
var utils_1 = require("../../utils");
var SendRewardMessage = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, createVoucher, i, j, voucherNum, messagehtml;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                data = [
                    {
                        id: 6962364,
                        name: "김태준",
                        email: "joon500006@gmail.com",
                        phoneNum: "01056843712",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 6962364,
                        name: "김테스",
                        email: "joon500006@gmail.com",
                        phoneNum: "01056843712",
                        tyep: "6개월 구독권 1계정",
                        count: 3,
                    },
                ];
                createVoucher = function () { return __awaiter(void 0, void 0, void 0, function () {
                    var voucherNumber, voucherRepository, e_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                voucherNumber = utils_1.generateVoucherNum();
                                voucherRepository = typeorm_1.getRepository(Voucher_1.Voucher);
                                return [4 /*yield*/, voucherRepository.save({
                                        voucherNumber: voucherNumber,
                                        name: "6Month",
                                    })];
                            case 1:
                                _a.sent();
                                return [2 /*return*/, voucherNumber];
                            case 2:
                                e_1 = _a.sent();
                                throw new Error(e_1);
                            case 3: return [2 /*return*/];
                        }
                    });
                }); };
                i = 0;
                _a.label = 1;
            case 1:
                if (!(i < data.length)) return [3 /*break*/, 6];
                j = 0;
                _a.label = 2;
            case 2:
                if (!(j < data[i].count)) return [3 /*break*/, 5];
                console.log(i, j, data[i]);
                voucherNum = createVoucher();
                messagehtml = "\n      \uC548\uB155\uD558\uC138\uC694! \uC790\uB9C8ZAMA\uC785\uB2C8\uB2E4.<br/>\n      <br/>\n      \uC624\uB7AB\uB3D9\uC548 \uAE30\uB2E4\uB9AC\uC168\uB358 \uC790\uB9C8ZAMA \uC5B4\uD50C\uC774 \uB4DC\uB514\uC5B4 \uC11C\uD3EC\uD2B8\uB2D8\uB4E4\uC744 \uB9CC\uB0A0 \uC900\uBE44\uB97C \uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.<br/>\n      <br/>\n      \uC640\uB514\uC988 \uD06C\uB77C\uC6B0\uB4DC \uD380\uB529\uC73C\uB85C \uC790\uB9C8ZAMA\uC758 \uCCAB\uAC78\uC74C\uC5D0 \uB3D9\uCC38\uD574\uC8FC\uC2E0 \uC5EC\uB7EC\uBD84\uAED8 \uAE4A\uC740 \uAC10\uC0AC\uB97C \uB4DC\uB9BD\uB2C8\uB2E4.<br/>\n      <br/>\n      2022\uB144 1\uC6D4\uBD80\uD130 \uC790\uB9C8ZAMA \uC571\uC5D0\uC11C \uB9AC\uC6CC\uB4DC\uB97C \uC0AC\uC6A9\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.<br/>\n      <br/>\n      \uCC98\uC74C\uC778\uB9CC\uD07C \uBD80\uC871\uD55C \uBD80\uBD84\uC744 \uC810\uAC80\uD558\uAE30 \uC704\uD574 \uD55C\uB2EC\uAC04\uC740 \uD14C\uC2A4\uD2B8 \uAE30\uAC04\uC73C\uB85C \uC11C\uD3EC\uD130\uB2D8\uB4E4\uAED8 \uBB34\uB8CC\uB85C \uC81C\uACF5\uD558\uB824\uACE0 \uD569\uB2C8\uB2E4.<br/>\n      <br/>\n      \uAD6C\uC785\uD574\uC8FC\uC2E0 6\uAC1C\uC6D4 \uACC4\uC815\uAD8C\uC740 7\uAC1C\uC6D4 \uB3D9\uC548 \uC774\uC6A9\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.<br/>\n      <br/>\n      \uC790\uB9C8ZAMA\uB294 \uC7A0\uC774 \uC624\uB294 \uC774\uC57C\uAE30, \uC74C\uC545, \uC18C\uB9AC\uB85C \uC11C\uD3EC\uD130\uB2D8\uC744 \uB450\uADFC\uAC70\uB9AC\uB294 \uB9C8\uC74C\uC73C\uB85C \uCC3E\uC544\uBD59\uACA0\uC2B5\uB2C8\uB2E4.<br/>\n      <br/>\n      \uC790\uB9C8\uCF54\uB9AC\uC544 \uAE40\uC218\uC9C4 \uB4DC\uB9BC.<br/>\n      <br/>\n      \uC544\uB798\uC758 \uCFE0\uD3F0\uBC88\uD638\uB97C zama \uC571\uC5D0\uC11C \uC785\uB825\uD558\uC2DC\uBA74 \uCEE8\uD150\uCE20\uB97C \uC790\uC720\uB86D\uAC8C \uC774\uC6A9\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\n      - \uCFE0\uD3F0\uBC88\uD638: " + voucherNum + "\n\n      \uCFE0\uD3F0\uC0AC\uC6A9 \uBC29\uBC95\n      1. \uD648\uD654\uBA74\uC5D0\uC758 \uC6B0\uCE21 \uBA54\uB274\uBC84\uD2BC \uD074\uB9AD\n      2. \uD504\uB9AC\uBBF8\uC5C4 \uD68C\uC6D0 \uC2E0\uCCAD\uD558\uAE30 \uBC84\uD2BC \uD074\uB9AD\n      3. \"\uB9AC\uC6CC\uB4DC \uC0AC\uC6A9\uD558\uAE30\" \uD074\uB9AD\n      4. \uCFE0\uD3F0\uBC88\uD638 \uC785\uB825 \uD6C4 \uC644\uB8CC\n      ";
                return [4 /*yield*/, utils_1.sendSms({
                        receivers: [data[i].phoneNum],
                        message: messagehtml,
                    })];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4:
                j++;
                return [3 /*break*/, 2];
            case 5:
                i++;
                return [3 /*break*/, 1];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.default = SendRewardMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VuZFJld2FyZE1lc3NhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL2FkbWluL1NlbmRSZXdhcmRNZXNzYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsbUNBQXdDO0FBQ3hDLGtEQUFpRDtBQUNqRCxxQ0FBMEQ7QUFFMUQsSUFBTSxpQkFBaUIsR0FBRyxVQUFPLEdBQVksRUFBRSxHQUFhOzs7OztnQkFvbkJwRCxJQUFJLEdBQUc7b0JBQ1g7d0JBQ0UsRUFBRSxFQUFFLE9BQU87d0JBQ1gsSUFBSSxFQUFFLEtBQUs7d0JBQ1gsS0FBSyxFQUFFLHNCQUFzQjt3QkFDN0IsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLElBQUksRUFBRSxhQUFhO3dCQUNuQixLQUFLLEVBQUUsQ0FBQztxQkFDVDtvQkFDRDt3QkFDRSxFQUFFLEVBQUUsT0FBTzt3QkFDWCxJQUFJLEVBQUUsS0FBSzt3QkFDWCxLQUFLLEVBQUUsc0JBQXNCO3dCQUM3QixRQUFRLEVBQUUsYUFBYTt3QkFDdkIsSUFBSSxFQUFFLGFBQWE7d0JBQ25CLEtBQUssRUFBRSxDQUFDO3FCQUNUO2lCQUNGLENBQUM7Z0JBRUksYUFBYSxHQUFHOzs7Ozs7Z0NBRVosYUFBYSxHQUFHLDBCQUFrQixFQUFFLENBQUM7Z0NBQ3JDLGlCQUFpQixHQUFHLHVCQUFhLENBQUMsaUJBQU8sQ0FBQyxDQUFDO2dDQUNqRCxxQkFBTSxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7d0NBQzNCLGFBQWEsZUFBQTt3Q0FDYixJQUFJLEVBQUUsUUFBUTtxQ0FDZixDQUFDLEVBQUE7O2dDQUhGLFNBR0UsQ0FBQztnQ0FDSCxzQkFBTyxhQUFhLEVBQUM7OztnQ0FFckIsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFDLENBQUMsQ0FBQzs7OztxQkFFdEIsQ0FBQztnQkFFTyxDQUFDLEdBQUcsQ0FBQzs7O3FCQUFFLENBQUEsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUE7Z0JBQ3BCLENBQUMsR0FBRyxDQUFDOzs7cUJBQUUsQ0FBQSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQTtnQkFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixVQUFVLEdBQUcsYUFBYSxFQUFFLENBQUM7Z0JBQzdCLFdBQVcsR0FBRyx3MERBa0JWLFVBQVUsc1lBT25CLENBQUM7Z0JBQ0YscUJBQU0sZUFBTyxDQUFDO3dCQUNaLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7d0JBQzdCLE9BQU8sRUFBRSxXQUFXO3FCQUNyQixDQUFDLEVBQUE7O2dCQUhGLFNBR0UsQ0FBQzs7O2dCQWhDOEIsQ0FBQyxFQUFFLENBQUE7OztnQkFEUCxDQUFDLEVBQUUsQ0FBQTs7Ozs7S0FvQ3JDLENBQUM7QUFFRixrQkFBZSxpQkFBaUIsQ0FBQyJ9