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
var Voucher_1 = require("../../../entities/Voucher");
var GetVouchers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, page, size, voucherRepository, _b, vouchers, totalCount, e_1;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                _a = req.query, page = _a.page, size = _a.size;
                voucherRepository = typeorm_1.getRepository(Voucher_1.Voucher);
                return [4 /*yield*/, voucherRepository.findAndCount({
                        skip: page - 1,
                        take: size,
                        order: {
                            id: "DESC",
                        },
                    })];
            case 1:
                _b = _c.sent(), vouchers = _b[0], totalCount = _b[1];
                return [2 /*return*/, res.status(200).send({
                        success: true,
                        vouchers: vouchers,
                        totalCount: totalCount,
                    })];
            case 2:
                e_1 = _c.sent();
                res.status(400).json({ message: e_1.message });
                throw new Error(e_1);
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.default = GetVouchers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2V0Vm91Y2hlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvcm91dGVzL2FkbWluL3ZvdWNoZXIvR2V0Vm91Y2hlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxtQ0FBd0M7QUFDeEMscURBQW9EO0FBRXBELElBQU0sV0FBVyxHQUFHLFVBQU8sR0FBWSxFQUFFLEdBQWE7Ozs7OztnQkFHaEQsS0FDTyxHQUFHLE1BRFcsRUFBWixJQUFJLFVBQUEsRUFBRSxJQUFJLFVBQUEsQ0FDUjtnQkFFUCxpQkFBaUIsR0FBRyx1QkFBYSxDQUFDLGlCQUFPLENBQUMsQ0FBQztnQkFDbEIscUJBQU0saUJBQWlCLENBQUMsWUFBWSxDQUFDO3dCQUNsRSxJQUFJLEVBQUUsSUFBSSxHQUFHLENBQUM7d0JBQ2QsSUFBSSxFQUFFLElBQUk7d0JBQ1YsS0FBSyxFQUFFOzRCQUNMLEVBQUUsRUFBRSxNQUFNO3lCQUNYO3FCQUNGLENBQUMsRUFBQTs7Z0JBTkksS0FBeUIsU0FNN0IsRUFOSyxRQUFRLFFBQUEsRUFBRSxVQUFVLFFBQUE7Z0JBUTNCLHNCQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO3dCQUMxQixPQUFPLEVBQUUsSUFBSTt3QkFDYixRQUFRLEVBQUUsUUFBUTt3QkFDbEIsVUFBVSxZQUFBO3FCQUNYLENBQUMsRUFBQzs7O2dCQUVILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2dCQUM3QyxNQUFNLElBQUksS0FBSyxDQUFDLEdBQUMsQ0FBQyxDQUFDOzs7O0tBRXRCLENBQUM7QUFFRixrQkFBZSxXQUFXLENBQUMifQ==