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
var GetHomeAudioSubCate = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, sleepAudioRepository, basketMappingRepository, recoData, myBasketAudio_1, classifiedData, temporaryClassifiedData, i, division, audio, audioData, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                user = req.user;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 9, , 10]);
                sleepAudioRepository = typeorm_1.getRepository(SleepAudio_1.SleepAudio);
                basketMappingRepository = typeorm_1.getRepository(AudioBasketMapping_1.AudioBasketMapping);
                return [4 /*yield*/, sleepAudioRepository
                        .createQueryBuilder("sleepAudio")
                        .innerJoinAndSelect("sleepAudio.creator", "creator")
                        .where({ recoFlag: true })
                        .getMany()];
            case 2:
                recoData = _a.sent();
                return [4 /*yield*/, basketMappingRepository.find({
                        where: { user: user },
                        relations: ["audio"],
                    })];
            case 3:
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
                _a.label = 4;
            case 4:
                if (!(i < Types_1.DivisionEnum.length)) return [3 /*break*/, 8];
                division = Types_1.DivisionEnum[i];
                return [4 /*yield*/, sleepAudioRepository
                        .createQueryBuilder("sleepAudio")
                        .innerJoinAndSelect("sleepAudio.creator", "creator")
                        .where({ division: division })
                        .orderBy("sleepAudio.order", "ASC")
                        .getMany()];
            case 5:
                audio = _a.sent();
                return [4 /*yield*/, temporaryClassifiedData(audio)];
            case 6:
                audioData = _a.sent();
                classifiedData.push({ division: division, data: audioData });
                _a.label = 7;
            case 7:
                i++;
                return [3 /*break*/, 4];
            case 8: return [2 /*return*/, res.status(200).send({
                    success: true,
                    recoAudios: recoData,
                    totalAudios: classifiedData,
                })];
            case 9:
                e_1 = _a.sent();
                res.status(400).json({ message: e_1.message });
                throw new Error(e_1);
            case 10: return [2 /*return*/];
        }
    });
}); };
exports.default = GetHomeAudioSubCate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2V0SG9tZUF1ZGlvU3ViQ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvU2xlZXBBdWRpby9HZXRIb21lQXVkaW9TdWJDYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsbUNBQXdDO0FBQ3hDLHdFQUF1RTtBQUN2RSx3REFBdUQ7QUFDdkQsOENBQW9EO0FBRXBELElBQU0sbUJBQW1CLEdBQUcsVUFBTyxHQUFZLEVBQUUsR0FBYTs7Ozs7Z0JBQ3RELElBQUksR0FBUSxHQUFHLENBQUMsSUFBSSxDQUFDOzs7O2dCQUduQixvQkFBb0IsR0FBRyx1QkFBYSxDQUFDLHVCQUFVLENBQUMsQ0FBQztnQkFDakQsdUJBQXVCLEdBQUcsdUJBQWEsQ0FBQyx1Q0FBa0IsQ0FBQyxDQUFDO2dCQUlsQixxQkFBTSxvQkFBb0I7eUJBQ3ZFLGtCQUFrQixDQUFDLFlBQVksQ0FBQzt5QkFDaEMsa0JBQWtCLENBQUMsb0JBQW9CLEVBQUUsU0FBUyxDQUFDO3lCQUNuRCxLQUFLLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7eUJBQ3pCLE9BQU8sRUFBRSxFQUFBOztnQkFKTixRQUFRLEdBQWtDLFNBSXBDO2dCQUdWLHFCQUFNLHVCQUF1QixDQUFDLElBQUksQ0FBQzt3QkFDakMsS0FBSyxFQUFFLEVBQUUsSUFBSSxNQUFBLEVBQUU7d0JBQ2YsU0FBUyxFQUFFLENBQUMsT0FBTyxDQUFDO3FCQUNyQixDQUFDLEVBQUE7O2dCQUpFLGtCQUNKLFNBR0U7Z0JBRUUsY0FBYyxHQUFHLEVBQUUsQ0FBQztnQkFFcEIsdUJBQXVCLEdBQUcsVUFBQyxLQUFVO29CQUN6QyxJQUFNLFVBQVUsR0FBUSxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7NENBRTdCLENBQUM7d0JBQ1IsSUFBSSxlQUFhLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBbEMsQ0FBa0MsQ0FBQyxFQUFFOzRCQUNwRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzt5QkFDN0I7NkJBQU07NEJBQ0wsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7eUJBQzlCOztvQkFMSCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7Z0NBQWpDLENBQUM7cUJBTVQ7b0JBQ0QsT0FBTyxVQUFVLENBQUM7Z0JBQ3BCLENBQUMsQ0FBQztnQkFFTyxDQUFDLEdBQUcsQ0FBQzs7O3FCQUFFLENBQUEsQ0FBQyxHQUFHLG9CQUFZLENBQUMsTUFBTSxDQUFBO2dCQUMvQixRQUFRLEdBQUcsb0JBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDWSxxQkFBTSxvQkFBb0I7eUJBQ3BFLGtCQUFrQixDQUFDLFlBQVksQ0FBQzt5QkFDaEMsa0JBQWtCLENBQUMsb0JBQW9CLEVBQUUsU0FBUyxDQUFDO3lCQUNuRCxLQUFLLENBQUMsRUFBRSxRQUFRLFVBQUEsRUFBRSxDQUFDO3lCQUNuQixPQUFPLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDO3lCQUNsQyxPQUFPLEVBQUUsRUFBQTs7Z0JBTE4sS0FBSyxHQUFrQyxTQUtqQztnQkFFTSxxQkFBTSx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsRUFBQTs7Z0JBQWhELFNBQVMsR0FBRyxTQUFvQztnQkFDdEQsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsVUFBQSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDOzs7Z0JBVlosQ0FBQyxFQUFFLENBQUE7O29CQWE1QyxzQkFBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDMUIsT0FBTyxFQUFFLElBQUk7b0JBQ2IsVUFBVSxFQUFFLFFBQVE7b0JBQ3BCLFdBQVcsRUFBRSxjQUFjO2lCQUM1QixDQUFDLEVBQUM7OztnQkFFSCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztnQkFDN0MsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFDLENBQUMsQ0FBQzs7OztLQUV0QixDQUFDO0FBRUYsa0JBQWUsbUJBQW1CLENBQUMifQ==