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
var SleepAudio_1 = require("../../entities/SleepAudio");
var Types_1 = require("../../entities/Types");
var GetHomeAudio = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var sleepAudioRepository, recoData, classifiedData, i, division, audio, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 6, , 7]);
                sleepAudioRepository = typeorm_1.getRepository(SleepAudio_1.SleepAudio);
                return [4 /*yield*/, sleepAudioRepository.find({
                        where: { recoFlag: true },
                        relations: ["creator"],
                    })];
            case 1:
                recoData = _a.sent();
                classifiedData = [];
                i = 0;
                _a.label = 2;
            case 2:
                if (!(i < Types_1.DivisionEnum.length)) return [3 /*break*/, 5];
                division = Types_1.DivisionEnum[i];
                return [4 /*yield*/, sleepAudioRepository.find({
                        where: { division: division },
                        relations: ["creator"],
                    })];
            case 3:
                audio = _a.sent();
                classifiedData.push({ division: division, data: audio });
                _a.label = 4;
            case 4:
                i++;
                return [3 /*break*/, 2];
            case 5: return [2 /*return*/, res.status(200).send({
                    success: true,
                    recoAudios: recoData,
                    totalAudios: classifiedData,
                })];
            case 6:
                e_1 = _a.sent();
                res.status(400).json({ message: e_1.message });
                throw new Error(e_1);
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.default = GetHomeAudio;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2V0SG9tZUF1ZGlvU3ViQ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvU2xlZXBBdWRpby9HZXRIb21lQXVkaW9TdWJDYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsbUNBQTRDO0FBQzVDLHdEQUF1RDtBQUN2RCw4Q0FBb0Q7QUFFcEQsSUFBTSxZQUFZLEdBQUcsVUFBTyxHQUFZLEVBQUUsR0FBYTs7Ozs7O2dCQUU3QyxvQkFBb0IsR0FBRyx1QkFBYSxDQUFDLHVCQUFVLENBQUMsQ0FBQztnQkFFckQscUJBQU0sb0JBQW9CLENBQUMsSUFBSSxDQUFDO3dCQUM5QixLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO3dCQUN6QixTQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUM7cUJBQ3ZCLENBQUMsRUFBQTs7Z0JBSkUsUUFBUSxHQUNaLFNBR0U7Z0JBRUUsY0FBYyxHQUFHLEVBQUUsQ0FBQztnQkFFakIsQ0FBQyxHQUFHLENBQUM7OztxQkFBRSxDQUFBLENBQUMsR0FBRyxvQkFBWSxDQUFDLE1BQU0sQ0FBQTtnQkFDL0IsUUFBUSxHQUFHLG9CQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRS9CLHFCQUFNLG9CQUFvQixDQUFDLElBQUksQ0FBQzt3QkFDOUIsS0FBSyxFQUFFLEVBQUUsUUFBUSxVQUFBLEVBQUU7d0JBQ25CLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQztxQkFDdkIsQ0FBQyxFQUFBOztnQkFKRSxLQUFLLEdBQ1QsU0FHRTtnQkFDSixjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxVQUFBLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7OztnQkFQUixDQUFDLEVBQUUsQ0FBQTs7b0JBVTVDLHNCQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUMxQixPQUFPLEVBQUUsSUFBSTtvQkFDYixVQUFVLEVBQUUsUUFBUTtvQkFDcEIsV0FBVyxFQUFFLGNBQWM7aUJBQzVCLENBQUMsRUFBQzs7O2dCQUVILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2dCQUM3QyxNQUFNLElBQUksS0FBSyxDQUFDLEdBQUMsQ0FBQyxDQUFDOzs7O0tBRXRCLENBQUM7QUFFRixrQkFBZSxZQUFZLENBQUMifQ==