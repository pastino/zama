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
var Category_1 = require("../../entities/Category");
var SleepAudio_1 = require("../../entities/SleepAudio");
var Types_1 = require("../../entities/Types");
var GetHomeAudio = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var sleepAudioRepository, recoData, categoryRepository_1, getCateories, classifiedData, i, division, categories, classifiedAudioData, j, data, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 10, , 11]);
                sleepAudioRepository = typeorm_1.getRepository(SleepAudio_1.SleepAudio);
                return [4 /*yield*/, sleepAudioRepository.find({
                        where: { recoFlag: true },
                        relations: ["creator"],
                    })];
            case 1:
                recoData = _a.sent();
                categoryRepository_1 = typeorm_1.getRepository(Category_1.Category);
                getCateories = function (division) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, categoryRepository_1.find({ where: { division: division } })];
                    });
                }); };
                classifiedData = [];
                i = 0;
                _a.label = 2;
            case 2:
                if (!(i < Types_1.DivisionEnum.length)) return [3 /*break*/, 9];
                division = Types_1.DivisionEnum[i];
                return [4 /*yield*/, getCateories(division)];
            case 3:
                categories = _a.sent();
                classifiedAudioData = [];
                j = 0;
                _a.label = 4;
            case 4:
                if (!(j < categories.length)) return [3 /*break*/, 7];
                return [4 /*yield*/, sleepAudioRepository
                        .createQueryBuilder("sleepAudio")
                        .innerJoinAndSelect("sleepAudio.creator", "creator")
                        .innerJoin("sleepAudio.categories", "category", "category.id = :categoryId", { categoryId: categories[j].id })
                        .getMany()];
            case 5:
                data = _a.sent();
                classifiedAudioData.push({
                    category: categories[j],
                    categoryData: data,
                });
                _a.label = 6;
            case 6:
                j++;
                return [3 /*break*/, 4];
            case 7:
                classifiedData.push({
                    division: division,
                    divisionData: classifiedAudioData,
                });
                _a.label = 8;
            case 8:
                i++;
                return [3 /*break*/, 2];
            case 9: return [2 /*return*/, res.status(200).send({
                    success: true,
                    recoAudios: recoData,
                    totalAudios: classifiedData,
                })];
            case 10:
                e_1 = _a.sent();
                res.status(400).json({ message: e_1.message });
                throw new Error(e_1);
            case 11: return [2 /*return*/];
        }
    });
}); };
exports.default = GetHomeAudio;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2V0SG9tZUF1ZGlvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9TbGVlcEF1ZGlvL0dldEhvbWVBdWRpby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLG1DQUE0QztBQUM1QyxvREFBbUQ7QUFDbkQsd0RBQXVEO0FBQ3ZELDhDQUFvRDtBQUVwRCxJQUFNLFlBQVksR0FBRyxVQUFPLEdBQVksRUFBRSxHQUFhOzs7Ozs7Z0JBRTdDLG9CQUFvQixHQUFHLHVCQUFhLENBQUMsdUJBQVUsQ0FBQyxDQUFDO2dCQUVyRCxxQkFBTSxvQkFBb0IsQ0FBQyxJQUFJLENBQUM7d0JBQzlCLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7d0JBQ3pCLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQztxQkFDdkIsQ0FBQyxFQUFBOztnQkFKRSxRQUFRLEdBQ1osU0FHRTtnQkFFRSx1QkFBcUIsdUJBQWEsQ0FBQyxtQkFBUSxDQUFDLENBQUM7Z0JBRTdDLFlBQVksR0FBRyxVQUFPLFFBQWdCOzt3QkFDMUMsc0JBQU8sb0JBQWtCLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsUUFBUSxVQUFBLEVBQUUsRUFBRSxDQUFDLEVBQUM7O3FCQUN6RCxDQUFDO2dCQUVJLGNBQWMsR0FBRyxFQUFFLENBQUM7Z0JBQ2pCLENBQUMsR0FBRyxDQUFDOzs7cUJBQUUsQ0FBQSxDQUFDLEdBQUcsb0JBQVksQ0FBQyxNQUFNLENBQUE7Z0JBQy9CLFFBQVEsR0FBRyxvQkFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNULHFCQUFNLFlBQVksQ0FBQyxRQUFRLENBQUMsRUFBQTs7Z0JBQTlDLFVBQVUsR0FBUSxTQUE0QjtnQkFDOUMsbUJBQW1CLEdBQUcsRUFBRSxDQUFDO2dCQUV0QixDQUFDLEdBQUcsQ0FBQzs7O3FCQUFFLENBQUEsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUE7Z0JBQ3RCLHFCQUFNLG9CQUFvQjt5QkFDcEMsa0JBQWtCLENBQUMsWUFBWSxDQUFDO3lCQUNoQyxrQkFBa0IsQ0FBQyxvQkFBb0IsRUFBRSxTQUFTLENBQUM7eUJBQ25ELFNBQVMsQ0FDUix1QkFBdUIsRUFDdkIsVUFBVSxFQUNWLDJCQUEyQixFQUMzQixFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQ2pDO3lCQUNBLE9BQU8sRUFBRSxFQUFBOztnQkFUTixJQUFJLEdBQUcsU0FTRDtnQkFDWixtQkFBbUIsQ0FBQyxJQUFJLENBQUM7b0JBQ3ZCLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO29CQUN2QixZQUFZLEVBQUUsSUFBSTtpQkFDbkIsQ0FBQyxDQUFDOzs7Z0JBZGtDLENBQUMsRUFBRSxDQUFBOzs7Z0JBZ0IxQyxjQUFjLENBQUMsSUFBSSxDQUFDO29CQUNsQixRQUFRLFVBQUE7b0JBQ1IsWUFBWSxFQUFFLG1CQUFtQjtpQkFDbEMsQ0FBQyxDQUFDOzs7Z0JBeEJvQyxDQUFDLEVBQUUsQ0FBQTs7b0JBMkI1QyxzQkFBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDMUIsT0FBTyxFQUFFLElBQUk7b0JBQ2IsVUFBVSxFQUFFLFFBQVE7b0JBQ3BCLFdBQVcsRUFBRSxjQUFjO2lCQUM1QixDQUFDLEVBQUM7OztnQkFFSCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztnQkFDN0MsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFDLENBQUMsQ0FBQzs7OztLQUV0QixDQUFDO0FBRUYsa0JBQWUsWUFBWSxDQUFDIn0=