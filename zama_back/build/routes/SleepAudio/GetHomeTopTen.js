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
var AudioBasketMapping_1 = require("../../entities/AudioBasketMapping");
var SleepAudio_1 = require("../../entities/SleepAudio");
var Types_1 = require("../../entities/Types");
var GetHomeTopTen = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, sleepAudioRepository, basketMappingRepository, myBasketAudio_1, classifiedData, temporaryClassifiedData, i, division, audio, audioData, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 7, , 8]);
                user = req.user;
                sleepAudioRepository = typeorm_1.getRepository(SleepAudio_1.SleepAudio);
                basketMappingRepository = typeorm_1.getRepository(AudioBasketMapping_1.AudioBasketMapping);
                return [4 /*yield*/, basketMappingRepository.find({
                        where: { user: user },
                        relations: ["audio"],
                    })];
            case 1:
                myBasketAudio_1 = _a.sent();
                classifiedData = [];
                temporaryClassifiedData = function (audio) {
                    var copiedData = audio.slice();
                    var _loop_1 = function (i) {
                        if (myBasketAudio_1.find(function (item) { return item.audio.id === copiedData[i].id; })) {
                            copiedData[i].isLike = true;
                        }
                        else {
                            copiedData[i].isLike = false;
                        }
                    };
                    for (var i = 0; i < copiedData.length; i++) {
                        _loop_1(i);
                    }
                    return copiedData;
                };
                i = 0;
                _a.label = 2;
            case 2:
                if (!(i < Types_1.DivisionEnum.length)) return [3 /*break*/, 6];
                division = Types_1.DivisionEnum[i];
                return [4 /*yield*/, sleepAudioRepository
                        .createQueryBuilder("sleepAudio")
                        .innerJoinAndSelect("sleepAudio.creator", "creator")
                        .where({ division: division, recoFlag: true })
                        .orderBy("sleepAudio.order", "DESC")
                        .getMany()];
            case 3:
                audio = _a.sent();
                return [4 /*yield*/, temporaryClassifiedData(audio)];
            case 4:
                audioData = _a.sent();
                classifiedData.push({ division: division, data: audioData });
                _a.label = 5;
            case 5:
                i++;
                return [3 /*break*/, 2];
            case 6: return [2 /*return*/, res.status(200).send({
                    success: true,
                    audios: classifiedData,
                })];
            case 7:
                e_1 = _a.sent();
                res.status(400).json({ message: e_1.message });
                throw new Error(e_1);
            case 8: return [2 /*return*/];
        }
    });
}); };
exports.default = GetHomeTopTen;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2V0SG9tZVRvcFRlbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvU2xlZXBBdWRpby9HZXRIb21lVG9wVGVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsbUNBQTRDO0FBQzVDLHdFQUF1RTtBQUN2RSx3REFBdUQ7QUFDdkQsOENBQW9EO0FBR3BELElBQU0sYUFBYSxHQUFHLFVBQU8sR0FBWSxFQUFFLEdBQWE7Ozs7OztnQkFFOUMsSUFBSSxHQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUM7Z0JBRXJCLG9CQUFvQixHQUFHLHVCQUFhLENBQUMsdUJBQVUsQ0FBQyxDQUFDO2dCQUNqRCx1QkFBdUIsR0FBRyx1QkFBYSxDQUFDLHVDQUFrQixDQUFDLENBQUM7Z0JBR2hFLHFCQUFNLHVCQUF1QixDQUFDLElBQUksQ0FBQzt3QkFDakMsS0FBSyxFQUFFLEVBQUUsSUFBSSxNQUFBLEVBQUU7d0JBQ2YsU0FBUyxFQUFFLENBQUMsT0FBTyxDQUFDO3FCQUNyQixDQUFDLEVBQUE7O2dCQUpFLGtCQUNKLFNBR0U7Z0JBRUUsY0FBYyxHQUFHLEVBQUUsQ0FBQztnQkFFcEIsdUJBQXVCLEdBQUcsVUFBQyxLQUFVO29CQUN6QyxJQUFNLFVBQVUsR0FBUSxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7NENBRTdCLENBQUM7d0JBQ1IsSUFBSSxlQUFhLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBbEMsQ0FBa0MsQ0FBQyxFQUFFOzRCQUNwRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzt5QkFDN0I7NkJBQU07NEJBQ0wsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7eUJBQzlCOztvQkFMSCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7Z0NBQWpDLENBQUM7cUJBT1Q7b0JBQ0QsT0FBTyxVQUFVLENBQUM7Z0JBQ3BCLENBQUMsQ0FBQztnQkFFTyxDQUFDLEdBQUcsQ0FBQzs7O3FCQUFFLENBQUEsQ0FBQyxHQUFHLG9CQUFZLENBQUMsTUFBTSxDQUFBO2dCQUMvQixRQUFRLEdBQUcsb0JBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFWSxxQkFBTSxvQkFBb0I7eUJBQ3BFLGtCQUFrQixDQUFDLFlBQVksQ0FBQzt5QkFDaEMsa0JBQWtCLENBQUMsb0JBQW9CLEVBQUUsU0FBUyxDQUFDO3lCQUNuRCxLQUFLLENBQUMsRUFBRSxRQUFRLFVBQUEsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7eUJBQ25DLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxNQUFNLENBQUM7eUJBQ25DLE9BQU8sRUFBRSxFQUFBOztnQkFMTixLQUFLLEdBQWtDLFNBS2pDO2dCQUVNLHFCQUFNLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxFQUFBOztnQkFBaEQsU0FBUyxHQUFHLFNBQW9DO2dCQUN0RCxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxVQUFBLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7OztnQkFYWixDQUFDLEVBQUUsQ0FBQTs7b0JBYzVDLHNCQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUMxQixPQUFPLEVBQUUsSUFBSTtvQkFDYixNQUFNLEVBQUUsY0FBYztpQkFDdkIsQ0FBQyxFQUFDOzs7Z0JBRUgsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7Z0JBQzdDLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBQyxDQUFDLENBQUM7Ozs7S0FFdEIsQ0FBQztBQUVGLGtCQUFlLGFBQWEsQ0FBQyJ9