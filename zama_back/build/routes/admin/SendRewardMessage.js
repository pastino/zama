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
    var data, createVoucher, i, messagehtml, j, voucherNum, messagehtml_1;
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
                    {
                        id: 6962364,
                        name: "김수진",
                        email: "joon500006@gmail.com",
                        phoneNum: "01039497613",
                        tyep: "6개월 구독권 1계정",
                        count: 3,
                    },
                ];
                createVoucher = function () { return __awaiter(void 0, void 0, void 0, function () {
                    var voucherNumber, voucherRepository;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                voucherNumber = utils_1.generateVoucherNum();
                                voucherRepository = typeorm_1.getRepository(Voucher_1.Voucher);
                                return [4 /*yield*/, voucherRepository.save({
                                        voucherNumber: voucherNumber,
                                        name: "6Month",
                                    })];
                            case 1:
                                _a.sent();
                                return [2 /*return*/, voucherNumber];
                        }
                    });
                }); };
                i = 0;
                _a.label = 1;
            case 1:
                if (!(i < data.length)) return [3 /*break*/, 8];
                messagehtml = "\n\uC548\uB155\uD558\uC138\uC694! \uC790\uB9C8ZAMA\uC785\uB2C8\uB2E4.\n\uC624\uB7AB\uB3D9\uC548 \uAE30\uB2E4\uB9AC\uC168\uB358 \uC790\uB9C8ZAMA \uC5B4\uD50C\uC774 \uB4DC\uB514\uC5B4 \uC11C\uD3EC\uD2B8\uB2D8\uB4E4\uC744 \uB9CC\uB0A0 \uC900\uBE44\uB97C \uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\n\uC640\uB514\uC988 \uD06C\uB77C\uC6B0\uB4DC \uD380\uB529\uC73C\uB85C \uC790\uB9C8ZAMA\uC758 \uCCAB\uAC78\uC74C\uC5D0 \uB3D9\uCC38\uD574\uC8FC\uC2E0 \uC5EC\uB7EC\uBD84\uAED8 \uAE4A\uC740 \uAC10\uC0AC\uB97C \uB4DC\uB9BD\uB2C8\uB2E4.\n\n2022\uB144 1\uC6D4\uBD80\uD130 \uC790\uB9C8ZAMA \uC571\uC5D0\uC11C \uB9AC\uC6CC\uB4DC\uB97C \uC0AC\uC6A9\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\n\uCC98\uC74C\uC778\uB9CC\uD07C \uBD80\uC871\uD55C \uBD80\uBD84\uC744 \uC810\uAC80\uD558\uAE30 \uC704\uD574 \uD55C\uB2EC\uAC04\uC740 \uD14C\uC2A4\uD2B8 \uAE30\uAC04\uC73C\uB85C \uC11C\uD3EC\uD130\uB2D8\uB4E4\uAED8 \uBB34\uB8CC\uB85C \uC81C\uACF5\uD558\uB824\uACE0 \uD569\uB2C8\uB2E4.\n\uAD6C\uC785\uD574\uC8FC\uC2E0 6\uAC1C\uC6D4 \uBC14\uC6B0\uCC98\uB97C \uC0AC\uC6A9\uD558\uBA74 7\uAC1C\uC6D4 \uB3D9\uC548 \uC774\uC6A9\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \n\uCFE0\uD3F0\uBC88\uD638\uB294 \uC2E0\uCCAD\uD558\uC2E0 \uC218\uB7C9\uB9CC\uD07C \uBB38\uC790\uB85C \uC804\uB2EC\uB4DC\uB9AC\uACA0\uC2B5\uB2C8\uB2E4.(2022\uB144 1\uC6D4 \uB0B4 \uC0AC\uC6A9)\n\n\uC790\uB9C8ZAMA\uB294 \uC7A0\uC774 \uC624\uB294 \uC774\uC57C\uAE30, \uC74C\uC545, \uC18C\uB9AC\uB85C \uC11C\uD3EC\uD130\uB2D8\uC744 \uB450\uADFC\uAC70\uB9AC\uB294 \uB9C8\uC74C\uC73C\uB85C \uCC3E\uC544\uBD59\uACA0\uC2B5\uB2C8\uB2E4.\n\n\uC790\uB9C8\uCF54\uB9AC\uC544 \uAE40\uC218\uC9C4 \uB4DC\uB9BC.\n\n* \uBCF8 \uC5F0\uB77D\uCC98\uB294 \uAC1C\uBC1C\uC790 \uC5F0\uB77D\uCC98 \uC785\uB2C8\uB2E4.\n\uBB38\uC758\uC0AC\uD56D\uC740 010-3949-7613\uC73C\uB85C \uC5F0\uB77D\uBD80\uD0C1\uB4DC\uB9BD\uB2C8\uB2E4.\n";
                return [4 /*yield*/, utils_1.sendSms({
                        receivers: [data[i].phoneNum],
                        message: messagehtml,
                    })];
            case 2:
                _a.sent();
                j = 0;
                _a.label = 3;
            case 3:
                if (!(j < data[i].count)) return [3 /*break*/, 7];
                console.log(i, j, data[i]);
                return [4 /*yield*/, createVoucher()];
            case 4:
                voucherNum = _a.sent();
                messagehtml_1 = "\n\uC548\uB155\uD558\uC138\uC694! \uC790\uB9C8ZAMA\uC785\uB2C8\uB2E4.\n\n\uC571\uC744 \uB2E4\uC6B4\uBC1B\uC73C\uC2E0 \uD6C4 \uC544\uB798 \uCFE0\uD3F0\uC744 \uC774\uC6A9\uD558\uC5EC \uC0AC\uC6A9 \uBD80\uD0C1\uB4DC\uB9BD\uB2C8\uB2E4. \n\n* \uCFE0\uD3F0 \uC0AC\uC6A9\uBC95 *\n\uC544\uB798\uC758 \uCFE0\uD3F0\uBC88\uD638\uB97C zama \uC571\uC5D0\uC11C \uC785\uB825\uD558\uC2DC\uBA74 \uCEE8\uD150\uCE20\uB97C \uC790\uC720\uB86D\uAC8C \uC774\uC6A9\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\n- \uCFE0\uD3F0\uBC88\uD638: " + voucherNum + "\n\nandroid: https://play.google.com/store/apps/details?id=com.zama_app\nios: https://apps.apple.com/kr/app/zama-sleep/id1599709356\n\n\uCFE0\uD3F0\uC0AC\uC6A9 \uBC29\uBC95\n1. \uD648\uD654\uBA74\uC758 \uC6B0\uCE21 \uBA54\uB274\uBC84\uD2BC \uD074\uB9AD\n2. \uD504\uB9AC\uBBF8\uC5C4 \uD68C\uC6D0 \uC2E0\uCCAD\uD558\uAE30 \uBC84\uD2BC \uD074\uB9AD\n3. \"\uB9AC\uC6CC\uB4DC \uC0AC\uC6A9\uD558\uAE30\" \uD074\uB9AD\n4. \uCFE0\uD3F0\uBC88\uD638 \uC785\uB825 \uD6C4 \uC644\uB8CC\n\n* \uBCF8 \uC5F0\uB77D\uCC98\uB294 \uAC1C\uBC1C\uC790 \uC5F0\uB77D\uCC98 \uC785\uB2C8\uB2E4.\n\uBB38\uC758\uC0AC\uD56D\uC740 010-3949-7613\uC73C\uB85C \uC5F0\uB77D\uBD80\uD0C1\uB4DC\uB9BD\uB2C8\uB2E4.\n  ";
                return [4 /*yield*/, utils_1.sendSms({
                        receivers: [data[i].phoneNum],
                        message: messagehtml_1,
                    })];
            case 5:
                _a.sent();
                _a.label = 6;
            case 6:
                j++;
                return [3 /*break*/, 3];
            case 7:
                i++;
                return [3 /*break*/, 1];
            case 8: return [2 /*return*/, res.status(200).send({
                    success: true,
                })];
        }
    });
}); };
exports.default = SendRewardMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VuZFJld2FyZE1lc3NhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL2FkbWluL1NlbmRSZXdhcmRNZXNzYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsbUNBQXdDO0FBQ3hDLGtEQUFpRDtBQUNqRCxxQ0FBMEQ7QUFFMUQsSUFBTSxpQkFBaUIsR0FBRyxVQUFPLEdBQVksRUFBRSxHQUFhOzs7OztnQkFvbkJwRCxJQUFJLEdBQUc7b0JBQ1g7d0JBQ0UsRUFBRSxFQUFFLE9BQU87d0JBQ1gsSUFBSSxFQUFFLEtBQUs7d0JBQ1gsS0FBSyxFQUFFLHNCQUFzQjt3QkFDN0IsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLElBQUksRUFBRSxhQUFhO3dCQUNuQixLQUFLLEVBQUUsQ0FBQztxQkFDVDtvQkFDRDt3QkFDRSxFQUFFLEVBQUUsT0FBTzt3QkFDWCxJQUFJLEVBQUUsS0FBSzt3QkFDWCxLQUFLLEVBQUUsc0JBQXNCO3dCQUM3QixRQUFRLEVBQUUsYUFBYTt3QkFDdkIsSUFBSSxFQUFFLGFBQWE7d0JBQ25CLEtBQUssRUFBRSxDQUFDO3FCQUNUO29CQUNEO3dCQUNFLEVBQUUsRUFBRSxPQUFPO3dCQUNYLElBQUksRUFBRSxLQUFLO3dCQUNYLEtBQUssRUFBRSxzQkFBc0I7d0JBQzdCLFFBQVEsRUFBRSxhQUFhO3dCQUN2QixJQUFJLEVBQUUsYUFBYTt3QkFDbkIsS0FBSyxFQUFFLENBQUM7cUJBQ1Q7aUJBQ0YsQ0FBQztnQkFFSSxhQUFhLEdBQUc7Ozs7O2dDQUNkLGFBQWEsR0FBRywwQkFBa0IsRUFBRSxDQUFDO2dDQUNyQyxpQkFBaUIsR0FBRyx1QkFBYSxDQUFDLGlCQUFPLENBQUMsQ0FBQztnQ0FDakQscUJBQU0saUJBQWlCLENBQUMsSUFBSSxDQUFDO3dDQUMzQixhQUFhLGVBQUE7d0NBQ2IsSUFBSSxFQUFFLFFBQVE7cUNBQ2YsQ0FBQyxFQUFBOztnQ0FIRixTQUdFLENBQUM7Z0NBQ0gsc0JBQU8sYUFBYSxFQUFDOzs7cUJBQ3RCLENBQUM7Z0JBRU8sQ0FBQyxHQUFHLENBQUM7OztxQkFBRSxDQUFBLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFBO2dCQUN2QixXQUFXLEdBQUcsaXpEQWdCdkIsQ0FBQztnQkFDRSxxQkFBTSxlQUFPLENBQUM7d0JBQ1osU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQzt3QkFDN0IsT0FBTyxFQUFFLFdBQVc7cUJBQ3JCLENBQUMsRUFBQTs7Z0JBSEYsU0FHRSxDQUFDO2dCQUVNLENBQUMsR0FBRyxDQUFDOzs7cUJBQUUsQ0FBQSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQTtnQkFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNSLHFCQUFNLGFBQWEsRUFBRSxFQUFBOztnQkFBbEMsVUFBVSxHQUFHLFNBQXFCO2dCQUNsQyxnQkFBYyx3Z0JBT2hCLFVBQVUsNHFCQWFqQixDQUFDO2dCQUVFLHFCQUFNLGVBQU8sQ0FBQzt3QkFDWixTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO3dCQUM3QixPQUFPLEVBQUUsYUFBVztxQkFDckIsQ0FBQyxFQUFBOztnQkFIRixTQUdFLENBQUM7OztnQkE1QjhCLENBQUMsRUFBRSxDQUFBOzs7Z0JBdkJQLENBQUMsRUFBRSxDQUFBOztvQkF1RHBDLHNCQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUMxQixPQUFPLEVBQUUsSUFBSTtpQkFDZCxDQUFDLEVBQUM7OztLQUNKLENBQUM7QUFFRixrQkFBZSxpQkFBaUIsQ0FBQyJ9