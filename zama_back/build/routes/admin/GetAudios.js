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
var GetAudios = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var division, sleepAudioRepository, audios, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                division = req.query.division;
                sleepAudioRepository = typeorm_1.getRepository(SleepAudio_1.SleepAudio);
                return [4 /*yield*/, sleepAudioRepository.find({
                        where: { division: division },
                        relations: ["creator"],
                    })];
            case 1:
                audios = _a.sent();
                console.log(audios);
                return [2 /*return*/, res.status(200).send({
                        success: true,
                        audios: audios,
                    })];
            case 2:
                e_1 = _a.sent();
                res.status(400).json({ message: e_1.message });
                throw new Error(e_1);
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.default = GetAudios;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2V0QXVkaW9zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9hZG1pbi9HZXRBdWRpb3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxtQ0FBd0M7QUFDeEMsd0RBQXVEO0FBRXZELElBQU0sU0FBUyxHQUFHLFVBQU8sR0FBWSxFQUFFLEdBQWE7Ozs7OztnQkFHckMsUUFBUSxHQUNWLEdBQUcsZUFETyxDQUNOO2dCQUVQLG9CQUFvQixHQUFHLHVCQUFhLENBQUMsdUJBQVUsQ0FBQyxDQUFDO2dCQUVyRCxxQkFBTSxvQkFBb0IsQ0FBQyxJQUFJLENBQUM7d0JBQzlCLEtBQUssRUFBRSxFQUFFLFFBQVEsVUFBQSxFQUFFO3dCQUNuQixTQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUM7cUJBQ3ZCLENBQUMsRUFBQTs7Z0JBSkUsTUFBTSxHQUNWLFNBR0U7Z0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDcEIsc0JBQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7d0JBQzFCLE9BQU8sRUFBRSxJQUFJO3dCQUNiLE1BQU0sUUFBQTtxQkFDUCxDQUFDLEVBQUM7OztnQkFFSCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztnQkFDN0MsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFDLENBQUMsQ0FBQzs7OztLQUV0QixDQUFDO0FBRUYsa0JBQWUsU0FBUyxDQUFDIn0=