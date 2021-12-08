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
var SleepBasket = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, body, audioId, audioRepository, basketRepository, mappingData, audio, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                user = req.user;
                body = req.body;
                audioId = body.audioId;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 8, , 9]);
                audioRepository = typeorm_1.getRepository(SleepAudio_1.SleepAudio);
                basketRepository = typeorm_1.getRepository(AudioBasketMapping_1.AudioBasketMapping);
                return [4 /*yield*/, basketRepository.findOne({
                        where: { user: { id: user.id }, audio: { id: audioId } },
                    })];
            case 2:
                mappingData = _a.sent();
                if (!mappingData) return [3 /*break*/, 4];
                return [4 /*yield*/, basketRepository.delete({ id: mappingData.id })];
            case 3:
                _a.sent();
                return [3 /*break*/, 7];
            case 4: return [4 /*yield*/, audioRepository.findOne({
                    where: { id: audioId },
                })];
            case 5:
                audio = _a.sent();
                return [4 /*yield*/, basketRepository.save({ user: user, audio: audio })];
            case 6:
                _a.sent();
                _a.label = 7;
            case 7: return [2 /*return*/, res.status(200).send({ success: true })];
            case 8:
                e_1 = _a.sent();
                res.status(400).json({ message: e_1.message });
                throw new Error(e_1);
            case 9: return [2 /*return*/];
        }
    });
}); };
exports.default = SleepBasket;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2xlZXBCYXNrZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL1NsZWVwQXVkaW8vU2xlZXBCYXNrZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxtQ0FBd0M7QUFDeEMsd0VBQXVFO0FBQ3ZFLHdEQUF1RDtBQUV2RCxJQUFNLFdBQVcsR0FBRyxVQUFPLEdBQVksRUFBRSxHQUFhOzs7OztnQkFDOUMsSUFBSSxHQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUM7Z0JBRW5CLElBQUksR0FBVSxHQUFHLEtBQWIsQ0FBYztnQkFDcEIsT0FBTyxHQUFXLElBQUksQ0FBQyxPQUFPLENBQUM7Ozs7Z0JBRzdCLGVBQWUsR0FBRyx1QkFBYSxDQUFDLHVCQUFVLENBQUMsQ0FBQztnQkFDNUMsZ0JBQWdCLEdBQUcsdUJBQWEsQ0FBQyx1Q0FBa0IsQ0FBQyxDQUFDO2dCQUVsQyxxQkFBTSxnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7d0JBQ3RELEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFO3FCQUN6RCxDQUFDLEVBQUE7O2dCQUZJLFdBQVcsR0FBUSxTQUV2QjtxQkFFRSxXQUFXLEVBQVgsd0JBQVc7Z0JBQ2IscUJBQU0sZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFBOztnQkFBckQsU0FBcUQsQ0FBQzs7b0JBRW5DLHFCQUFNLGVBQWUsQ0FBQyxPQUFPLENBQUM7b0JBQy9DLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUU7aUJBQ3ZCLENBQUMsRUFBQTs7Z0JBRkksS0FBSyxHQUFRLFNBRWpCO2dCQUNGLHFCQUFNLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsRUFBQTs7Z0JBQTVDLFNBQTRDLENBQUM7O29CQUcvQyxzQkFBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFDOzs7Z0JBRS9DLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2dCQUM3QyxNQUFNLElBQUksS0FBSyxDQUFDLEdBQUMsQ0FBQyxDQUFDOzs7O0tBRXRCLENBQUM7QUFFRixrQkFBZSxXQUFXLENBQUMifQ==