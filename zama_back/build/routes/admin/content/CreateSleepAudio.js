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
var SleepAudio_1 = require("../../../entities/SleepAudio");
var User_1 = require("../../../entities/User");
var CreateSleepAudio = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, thumbnail, file, _b, division, free, voice, title, time, thumbnailPath, filePath, audioRepository, userRepository, creator, latestAudio, e_1;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 4, , 5]);
                _a = req.files, thumbnail = _a.thumbnail, file = _a.file, _b = req.body, division = _b.division, free = _b.free, voice = _b.voice, title = _b.title, time = _b.time;
                thumbnailPath = thumbnail[0].location;
                filePath = file[0].location;
                audioRepository = typeorm_1.getRepository(SleepAudio_1.SleepAudio);
                userRepository = typeorm_1.getRepository(User_1.User);
                return [4 /*yield*/, userRepository.findOne({
                        where: { id: 2 },
                    })];
            case 1:
                creator = _c.sent();
                return [4 /*yield*/, audioRepository
                        .createQueryBuilder("sleepAudio")
                        .select("MAX(sleepAudio.order)", "maxOrder")
                        .getRawOne()];
            case 2:
                latestAudio = _c.sent();
                return [4 /*yield*/, audioRepository.save({
                        title: title,
                        division: division,
                        recoFlag: false,
                        time: time,
                        free: free,
                        voiceGender: voice,
                        creator: creator,
                        order: Number(latestAudio === null || latestAudio === void 0 ? void 0 : latestAudio.maxOrder) + 1,
                        thumbnail: thumbnailPath,
                        file: filePath,
                    })];
            case 3:
                _c.sent();
                return [2 /*return*/, res.status(200).send({ success: true })];
            case 4:
                e_1 = _c.sent();
                res.status(400).json({ message: e_1.message });
                throw new Error(e_1);
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.default = CreateSleepAudio;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JlYXRlU2xlZXBBdWRpby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvYWRtaW4vY29udGVudC9DcmVhdGVTbGVlcEF1ZGlvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsbUNBQXdDO0FBQ3hDLDJEQUEwRDtBQUMxRCwrQ0FBOEM7QUFFOUMsSUFBTSxnQkFBZ0IsR0FBRyxVQUFPLEdBQVksRUFBRSxHQUFhOzs7Ozs7Z0JBR3JELEtBRU8sR0FBRyxNQUZnQixFQUFqQixTQUFTLGVBQUEsRUFBRSxJQUFJLFVBQUEsRUFDeEIsS0FDTyxHQUFHLEtBRGtDLEVBQXBDLFFBQVEsY0FBQSxFQUFFLElBQUksVUFBQSxFQUFFLEtBQUssV0FBQSxFQUFFLEtBQUssV0FBQSxFQUFFLElBQUksVUFBQSxDQUMvQjtnQkFFUCxhQUFhLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztnQkFDdEMsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7Z0JBRTVCLGVBQWUsR0FBRyx1QkFBYSxDQUFDLHVCQUFVLENBQUMsQ0FBQztnQkFDNUMsY0FBYyxHQUFHLHVCQUFhLENBQUMsV0FBSSxDQUFDLENBQUM7Z0JBRVQscUJBQU0sY0FBYyxDQUFDLE9BQU8sQ0FBQzt3QkFDN0QsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRTtxQkFDakIsQ0FBQyxFQUFBOztnQkFGSSxPQUFPLEdBQXFCLFNBRWhDO2dCQUVrQixxQkFBTSxlQUFlO3lCQUN0QyxrQkFBa0IsQ0FBQyxZQUFZLENBQUM7eUJBQ2hDLE1BQU0sQ0FBQyx1QkFBdUIsRUFBRSxVQUFVLENBQUM7eUJBQzNDLFNBQVMsRUFBRSxFQUFBOztnQkFIUixXQUFXLEdBQUcsU0FHTjtnQkFFZCxxQkFBTSxlQUFlLENBQUMsSUFBSSxDQUFDO3dCQUN6QixLQUFLLE9BQUE7d0JBQ0wsUUFBUSxVQUFBO3dCQUNSLFFBQVEsRUFBRSxLQUFLO3dCQUNmLElBQUksTUFBQTt3QkFDSixJQUFJLE1BQUE7d0JBQ0osV0FBVyxFQUFFLEtBQUs7d0JBQ2xCLE9BQU8sU0FBQTt3QkFDUCxLQUFLLEVBQUUsTUFBTSxDQUFDLFdBQVcsYUFBWCxXQUFXLHVCQUFYLFdBQVcsQ0FBRSxRQUFRLENBQUMsR0FBRyxDQUFDO3dCQUN4QyxTQUFTLEVBQUUsYUFBYTt3QkFDeEIsSUFBSSxFQUFFLFFBQVE7cUJBQ2YsQ0FBQyxFQUFBOztnQkFYRixTQVdFLENBQUM7Z0JBRUgsc0JBQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQzs7O2dCQUUvQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztnQkFDN0MsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFDLENBQUMsQ0FBQzs7OztLQUV0QixDQUFDO0FBRUYsa0JBQWUsZ0JBQWdCLENBQUMifQ==