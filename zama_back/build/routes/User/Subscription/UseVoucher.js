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
var Voucher_1 = require("../../../entities/Voucher");
var Subscription_1 = require("../../../entities/Subscription");
var moment_1 = __importDefault(require("moment"));
var UseVoucher = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, voucherNumber, voucherRepository, existingVoucher, _a, success, message, subscriptionRepository, today, sixMonthLater, thirdMonthLater, oneMonthLater, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 9, , 10]);
                user = req.user;
                voucherNumber = req.body.code;
                voucherRepository = typeorm_1.getRepository(Voucher_1.Voucher);
                return [4 /*yield*/, voucherRepository.findOne({
                        where: { voucherNumber: voucherNumber },
                        relations: ["user"],
                    })];
            case 1:
                existingVoucher = _b.sent();
                _a = validate(res, existingVoucher), success = _a.success, message = _a.message;
                if (!success) {
                    return [2 /*return*/, res.status(200).send({ success: success, message: message })];
                }
                subscriptionRepository = typeorm_1.getRepository(Subscription_1.Subscription);
                today = new Date();
                today.setHours(0, 0, 0, 0);
                if (!((existingVoucher === null || existingVoucher === void 0 ? void 0 : existingVoucher.name) === "6Month")) return [3 /*break*/, 3];
                sixMonthLater = new Date(moment_1.default(today).add(7, "months").format());
                sixMonthLater.setHours(24, 0, 0, 0);
                return [4 /*yield*/, subscriptionRepository.save({
                        user: user,
                        startDate: today,
                        endDate: sixMonthLater,
                        name: "6Month",
                    })];
            case 2:
                _b.sent();
                return [3 /*break*/, 7];
            case 3:
                if (!((existingVoucher === null || existingVoucher === void 0 ? void 0 : existingVoucher.name) === "3Month")) return [3 /*break*/, 5];
                thirdMonthLater = new Date(moment_1.default(today).add(3, "months").format());
                thirdMonthLater.setHours(24, 0, 0, 0);
                return [4 /*yield*/, subscriptionRepository.save({
                        user: user,
                        startDate: today,
                        endDate: thirdMonthLater,
                        name: "3Month",
                    })];
            case 4:
                _b.sent();
                return [3 /*break*/, 7];
            case 5:
                oneMonthLater = new Date(moment_1.default(today).add(1, "months").format());
                oneMonthLater.setHours(24, 0, 0, 0);
                return [4 /*yield*/, subscriptionRepository.save({
                        user: user,
                        startDate: today,
                        endDate: oneMonthLater,
                        name: "1Month",
                    })];
            case 6:
                _b.sent();
                _b.label = 7;
            case 7: return [4 /*yield*/, voucherRepository.update({ id: existingVoucher === null || existingVoucher === void 0 ? void 0 : existingVoucher.id }, { available: false, user: user })];
            case 8:
                _b.sent();
                return [2 /*return*/, res.status(200).send({ success: true })];
            case 9:
                e_1 = _b.sent();
                res.status(400).json({ message: e_1.message });
                throw new Error(e_1);
            case 10: return [2 /*return*/];
        }
    });
}); };
exports.default = UseVoucher;
var validate = function (res, existingVoucher) {
    if (!existingVoucher) {
        return { success: false, message: "번호가 맞지 않습니다." };
    }
    if (existingVoucher === null || existingVoucher === void 0 ? void 0 : existingVoucher.user) {
        return { success: false, message: "이미 사용된 리워드 입니다." };
    }
    if ((existingVoucher === null || existingVoucher === void 0 ? void 0 : existingVoucher.expiredDate) &&
        new Date(moment_1.default(existingVoucher.expiredDate).format("YYYY.MM.DD")).getTime() < new Date().getTime()) {
        return { success: false, message: "유효기간이 만료되었습니다." };
    }
    return { success: true, message: null };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlVm91Y2hlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvVXNlci9TdWJzY3JpcHRpb24vVXNlVm91Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLG1DQUF3QztBQUN4QyxxREFBb0Q7QUFDcEQsK0RBQThEO0FBQzlELGtEQUE0QjtBQUU1QixJQUFNLFVBQVUsR0FBRyxVQUFPLEdBQVksRUFBRSxHQUFhOzs7Ozs7Z0JBRTNDLElBQUksR0FBUSxHQUFHLENBQUMsSUFBSSxDQUFDO2dCQUNyQixhQUFhLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBRTlCLGlCQUFpQixHQUFHLHVCQUFhLENBQUMsaUJBQU8sQ0FBQyxDQUFDO2dCQUVwQixxQkFBTSxpQkFBaUIsQ0FBQyxPQUFPLENBQUM7d0JBQzNELEtBQUssRUFBRSxFQUFFLGFBQWEsZUFBQSxFQUFFO3dCQUN4QixTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUM7cUJBQ3BCLENBQUMsRUFBQTs7Z0JBSEksZUFBZSxHQUFRLFNBRzNCO2dCQUVJLEtBQXVCLFFBQVEsQ0FBQyxHQUFHLEVBQUUsZUFBZSxDQUFDLEVBQW5ELE9BQU8sYUFBQSxFQUFFLE9BQU8sYUFBQSxDQUFvQztnQkFFNUQsSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDWixzQkFBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sU0FBQSxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUMsRUFBQztpQkFDbkQ7Z0JBRUssc0JBQXNCLEdBQUcsdUJBQWEsQ0FBQywyQkFBWSxDQUFDLENBQUM7Z0JBRXJELEtBQUssR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO2dCQUN6QixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3FCQUV2QixDQUFBLENBQUEsZUFBZSxhQUFmLGVBQWUsdUJBQWYsZUFBZSxDQUFFLElBQUksTUFBSyxRQUFRLENBQUEsRUFBbEMsd0JBQWtDO2dCQUM5QixhQUFhLEdBQUcsSUFBSSxJQUFJLENBQUMsZ0JBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7Z0JBQ3hFLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBRXBDLHFCQUFNLHNCQUFzQixDQUFDLElBQUksQ0FBQzt3QkFDaEMsSUFBSSxNQUFBO3dCQUNKLFNBQVMsRUFBRSxLQUFLO3dCQUNoQixPQUFPLEVBQUUsYUFBYTt3QkFDdEIsSUFBSSxFQUFFLFFBQVE7cUJBQ2YsQ0FBQyxFQUFBOztnQkFMRixTQUtFLENBQUM7OztxQkFDTSxDQUFBLENBQUEsZUFBZSxhQUFmLGVBQWUsdUJBQWYsZUFBZSxDQUFFLElBQUksTUFBSyxRQUFRLENBQUEsRUFBbEMsd0JBQWtDO2dCQUNyQyxlQUFlLEdBQUcsSUFBSSxJQUFJLENBQUMsZ0JBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7Z0JBQzFFLGVBQWUsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLHFCQUFNLHNCQUFzQixDQUFDLElBQUksQ0FBQzt3QkFDaEMsSUFBSSxNQUFBO3dCQUNKLFNBQVMsRUFBRSxLQUFLO3dCQUNoQixPQUFPLEVBQUUsZUFBZTt3QkFDeEIsSUFBSSxFQUFFLFFBQVE7cUJBQ2YsQ0FBQyxFQUFBOztnQkFMRixTQUtFLENBQUM7OztnQkFFRyxhQUFhLEdBQUcsSUFBSSxJQUFJLENBQUMsZ0JBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7Z0JBQ3hFLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BDLHFCQUFNLHNCQUFzQixDQUFDLElBQUksQ0FBQzt3QkFDaEMsSUFBSSxNQUFBO3dCQUNKLFNBQVMsRUFBRSxLQUFLO3dCQUNoQixPQUFPLEVBQUUsYUFBYTt3QkFDdEIsSUFBSSxFQUFFLFFBQVE7cUJBQ2YsQ0FBQyxFQUFBOztnQkFMRixTQUtFLENBQUM7O29CQUdMLHFCQUFNLGlCQUFpQixDQUFDLE1BQU0sQ0FDNUIsRUFBRSxFQUFFLEVBQUUsZUFBZSxhQUFmLGVBQWUsdUJBQWYsZUFBZSxDQUFFLEVBQUUsRUFBRSxFQUMzQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsSUFBSSxNQUFBLEVBQUUsQ0FDM0IsRUFBQTs7Z0JBSEQsU0FHQyxDQUFDO2dCQUVGLHNCQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUM7OztnQkFFL0MsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7Z0JBQzdDLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBQyxDQUFDLENBQUM7Ozs7S0FFdEIsQ0FBQztBQUVGLGtCQUFlLFVBQVUsQ0FBQztBQUUxQixJQUFNLFFBQVEsR0FBRyxVQUFDLEdBQWEsRUFBRSxlQUFvQztJQUNuRSxJQUFJLENBQUMsZUFBZSxFQUFFO1FBQ3BCLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsQ0FBQztLQUNwRDtJQUNELElBQUksZUFBZSxhQUFmLGVBQWUsdUJBQWYsZUFBZSxDQUFFLElBQUksRUFBRTtRQUN6QixPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQztLQUN2RDtJQUNELElBQ0UsQ0FBQSxlQUFlLGFBQWYsZUFBZSx1QkFBZixlQUFlLENBQUUsV0FBVztRQUM1QixJQUFJLElBQUksQ0FDTixnQkFBTSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQ3pELENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFDbEM7UUFDQSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQztLQUN0RDtJQUNELE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQztBQUMxQyxDQUFDLENBQUMifQ==