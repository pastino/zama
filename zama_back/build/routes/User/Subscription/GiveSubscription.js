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
var Subscription_1 = require("../../../entities/Subscription");
var moment_1 = __importDefault(require("moment"));
var utils_1 = require("../../../utils");
var GiveSubscription = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, subscriptionRepository, today, oneMonthLater, subscriptions, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                user = req.user;
                subscriptionRepository = typeorm_1.getRepository(Subscription_1.Subscription);
                today = new Date();
                today.setHours(0, 0, 0, 0);
                oneMonthLater = new Date(moment_1.default(today).add(1, "months").format());
                oneMonthLater.setHours(24, 0, 0, 0);
                return [4 /*yield*/, subscriptionRepository.save({
                        user: user,
                        startDate: today,
                        endDate: oneMonthLater,
                        name: "1Month",
                    })];
            case 1:
                _a.sent();
                return [4 /*yield*/, subscriptionRepository.find({
                        where: { user: user },
                    })];
            case 2:
                subscriptions = _a.sent();
                return [2 /*return*/, res.status(200).send({
                        success: true,
                        subscriptions: utils_1.filteredSubscriptions(subscriptions),
                    })];
            case 3:
                e_1 = _a.sent();
                res.status(400).json({ message: e_1.message });
                throw new Error(e_1);
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.default = GiveSubscription;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2l2ZVN1YnNjcmlwdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvVXNlci9TdWJzY3JpcHRpb24vR2l2ZVN1YnNjcmlwdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLG1DQUF3QztBQUN4QywrREFBOEQ7QUFDOUQsa0RBQTRCO0FBQzVCLHdDQUF1RDtBQUV2RCxJQUFNLGdCQUFnQixHQUFHLFVBQU8sR0FBWSxFQUFFLEdBQWE7Ozs7OztnQkFFakQsSUFBSSxHQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUM7Z0JBRXJCLHNCQUFzQixHQUFHLHVCQUFhLENBQUMsMkJBQVksQ0FBQyxDQUFDO2dCQUVyRCxLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztnQkFDekIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDckIsYUFBYSxHQUFHLElBQUksSUFBSSxDQUFDLGdCQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO2dCQUN4RSxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUVwQyxxQkFBTSxzQkFBc0IsQ0FBQyxJQUFJLENBQUM7d0JBQ2hDLElBQUksTUFBQTt3QkFDSixTQUFTLEVBQUUsS0FBSzt3QkFDaEIsT0FBTyxFQUFFLGFBQWE7d0JBQ3RCLElBQUksRUFBRSxRQUFRO3FCQUNmLENBQUMsRUFBQTs7Z0JBTEYsU0FLRSxDQUFDO2dCQUdELHFCQUFNLHNCQUFzQixDQUFDLElBQUksQ0FBQzt3QkFDaEMsS0FBSyxFQUFFLEVBQUUsSUFBSSxNQUFBLEVBQUU7cUJBQ2hCLENBQUMsRUFBQTs7Z0JBSEUsYUFBYSxHQUNqQixTQUVFO2dCQUVKLHNCQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO3dCQUMxQixPQUFPLEVBQUUsSUFBSTt3QkFDYixhQUFhLEVBQUUsNkJBQXFCLENBQUMsYUFBYSxDQUFDO3FCQUNwRCxDQUFDLEVBQUM7OztnQkFFSCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztnQkFDN0MsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFDLENBQUMsQ0FBQzs7OztLQUV0QixDQUFDO0FBRUYsa0JBQWUsZ0JBQWdCLENBQUMifQ==