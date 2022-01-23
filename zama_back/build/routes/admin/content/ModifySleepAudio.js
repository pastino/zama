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
var ModifySleepAudio = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, imageLocation, audioLocation, free, voice, title, time, audioRepository, userRepository, creator, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, id = _a.id, imageLocation = _a.imageLocation, audioLocation = _a.audioLocation, free = _a.free, voice = _a.voice, title = _a.title, time = _a.time;
                audioRepository = typeorm_1.getRepository(SleepAudio_1.SleepAudio);
                userRepository = typeorm_1.getRepository(User_1.User);
                return [4 /*yield*/, userRepository.findOne({
                        where: { id: 2 },
                    })];
            case 1:
                creator = _b.sent();
                console.log(imageLocation, audioLocation);
                return [4 /*yield*/, audioRepository.update({ id: id }, {
                        title: title,
                        recoFlag: false,
                        time: time,
                        free: free,
                        voiceGender: voice,
                        creator: creator,
                        thumbnail: imageLocation,
                        file: audioLocation,
                    })];
            case 2:
                _b.sent();
                return [2 /*return*/, res.status(200).send({ success: true })];
            case 3:
                e_1 = _b.sent();
                res.status(400).json({ message: e_1.message });
                throw new Error(e_1);
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.default = ModifySleepAudio;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kaWZ5U2xlZXBBdWRpby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvYWRtaW4vY29udGVudC9Nb2RpZnlTbGVlcEF1ZGlvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsbUNBQXdDO0FBQ3hDLDJEQUEwRDtBQUMxRCwrQ0FBOEM7QUFFOUMsSUFBTSxnQkFBZ0IsR0FBRyxVQUFPLEdBQVksRUFBRSxHQUFhOzs7Ozs7Z0JBR3JELEtBQ08sR0FBRyxLQUQwRCxFQUE1RCxFQUFFLFFBQUEsRUFBRSxhQUFhLG1CQUFBLEVBQUUsYUFBYSxtQkFBQSxFQUFFLElBQUksVUFBQSxFQUFFLEtBQUssV0FBQSxFQUFFLEtBQUssV0FBQSxFQUFFLElBQUksVUFBQSxDQUN2RDtnQkFFUCxlQUFlLEdBQUcsdUJBQWEsQ0FBQyx1QkFBVSxDQUFDLENBQUM7Z0JBQzVDLGNBQWMsR0FBRyx1QkFBYSxDQUFDLFdBQUksQ0FBQyxDQUFDO2dCQUVULHFCQUFNLGNBQWMsQ0FBQyxPQUFPLENBQUM7d0JBQzdELEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7cUJBQ2pCLENBQUMsRUFBQTs7Z0JBRkksT0FBTyxHQUFxQixTQUVoQztnQkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztnQkFDMUMscUJBQU0sZUFBZSxDQUFDLE1BQU0sQ0FDMUIsRUFBRSxFQUFFLElBQUEsRUFBRSxFQUNOO3dCQUNFLEtBQUssT0FBQTt3QkFDTCxRQUFRLEVBQUUsS0FBSzt3QkFDZixJQUFJLE1BQUE7d0JBQ0osSUFBSSxNQUFBO3dCQUNKLFdBQVcsRUFBRSxLQUFLO3dCQUNsQixPQUFPLFNBQUE7d0JBQ1AsU0FBUyxFQUFFLGFBQWE7d0JBQ3hCLElBQUksRUFBRSxhQUFhO3FCQUNwQixDQUNGLEVBQUE7O2dCQVpELFNBWUMsQ0FBQztnQkFFRixzQkFBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFDOzs7Z0JBRS9DLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2dCQUM3QyxNQUFNLElBQUksS0FBSyxDQUFDLEdBQUMsQ0FBQyxDQUFDOzs7O0tBRXRCLENBQUM7QUFFRixrQkFBZSxnQkFBZ0IsQ0FBQyJ9