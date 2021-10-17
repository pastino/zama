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
var User_1 = require("../../entities/User");
var CreateMeditation = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var query, testCategoryIds, categoryRepository, audioRepository, userRepository, categories, creator, sleepAudio, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                query = req.query;
                testCategoryIds = [18];
                categoryRepository = typeorm_1.getRepository(Category_1.Category);
                audioRepository = typeorm_1.getRepository(SleepAudio_1.SleepAudio);
                userRepository = typeorm_1.getRepository(User_1.User);
                return [4 /*yield*/, categoryRepository.find({
                        where: { id: typeorm_1.In(testCategoryIds) },
                    })];
            case 1:
                categories = _a.sent();
                return [4 /*yield*/, userRepository.findOne({
                        where: { id: 28 },
                    })];
            case 2:
                creator = _a.sent();
                return [4 /*yield*/, audioRepository.save({
                        title: "별똥별의 이야기1.5",
                        categories: categories,
                        division: "Story",
                        recoFlag: true,
                        time: 2248,
                        creator: creator,
                        thumbnail: "https://zama-contents.s3.ap-northeast-2.amazonaws.com/image/sample_image.png",
                        file: "https://zama-contents.s3.ap-northeast-2.amazonaws.com/audio/sample_audio.mp3",
                    })];
            case 3:
                sleepAudio = _a.sent();
                return [2 /*return*/, res.status(200).send({ success: true })];
            case 4:
                e_1 = _a.sent();
                res.status(400).json({ message: e_1.message });
                throw new Error(e_1);
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.default = CreateMeditation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JlYXRlU2xlZXBBdWRpby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvU2xlZXBBdWRpby9DcmVhdGVTbGVlcEF1ZGlvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsbUNBQXdEO0FBQ3hELG9EQUFtRDtBQUNuRCx3REFBdUQ7QUFDdkQsNENBQTJDO0FBRTNDLElBQU0sZ0JBQWdCLEdBQUcsVUFBTyxHQUFZLEVBQUUsR0FBYTs7Ozs7O2dCQUdyRCxLQUFLLEdBRUQsR0FBRyxNQUZGLENBRUc7Z0JBS0osZUFBZSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBRXZCLGtCQUFrQixHQUFHLHVCQUFhLENBQUMsbUJBQVEsQ0FBQyxDQUFDO2dCQUM3QyxlQUFlLEdBQUcsdUJBQWEsQ0FBQyx1QkFBVSxDQUFDLENBQUM7Z0JBQzVDLGNBQWMsR0FBRyx1QkFBYSxDQUFDLFdBQUksQ0FBQyxDQUFDO2dCQUVBLHFCQUFNLGtCQUFrQixDQUFDLElBQUksQ0FBQzt3QkFDdkUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLFlBQUUsQ0FBQyxlQUFlLENBQUMsRUFBRTtxQkFDbkMsQ0FBQyxFQUFBOztnQkFGSSxVQUFVLEdBQTJCLFNBRXpDO2dCQUVnQyxxQkFBTSxjQUFjLENBQUMsT0FBTyxDQUFDO3dCQUM3RCxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO3FCQUNsQixDQUFDLEVBQUE7O2dCQUZJLE9BQU8sR0FBcUIsU0FFaEM7Z0JBRXlDLHFCQUFNLGVBQWUsQ0FBQyxJQUFJLENBQUM7d0JBQ3BFLEtBQUssRUFBRSxhQUFhO3dCQUNwQixVQUFVLFlBQUE7d0JBQ1YsUUFBUSxFQUFFLE9BQU87d0JBQ2pCLFFBQVEsRUFBRSxJQUFJO3dCQUNkLElBQUksRUFBRSxJQUFJO3dCQUNWLE9BQU8sU0FBQTt3QkFDUCxTQUFTLEVBQ1AsOEVBQThFO3dCQUNoRixJQUFJLEVBQUUsOEVBQThFO3FCQUNyRixDQUFDLEVBQUE7O2dCQVZJLFVBQVUsR0FBMkIsU0FVekM7Z0JBRUYsc0JBQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQzs7O2dCQUUvQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztnQkFDN0MsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFDLENBQUMsQ0FBQzs7OztLQUV0QixDQUFDO0FBRUYsa0JBQWUsZ0JBQWdCLENBQUMifQ==