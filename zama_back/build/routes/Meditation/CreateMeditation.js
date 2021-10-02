"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var Meditation_1 = require("../../entities/Meditation");
var User_1 = require("../../entities/User");
var CreateMeditation = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var query, _a, thumbnail, file, thumbnailPath, filePath, user, userRepository, meditation, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                query = req.query, _a = req.files, thumbnail = _a.thumbnail, file = _a.file;
                thumbnailPath = thumbnail[0].location;
                filePath = file[0].location;
                return [4 /*yield*/, typeorm_1.getRepository(User_1.User).findOne(1)];
            case 1:
                user = _b.sent();
                userRepository = typeorm_1.getRepository(Meditation_1.Meditation);
                return [4 /*yield*/, userRepository.save(__assign(__assign({}, query), { thumbnail: thumbnailPath, file: filePath, user: user }))];
            case 2:
                meditation = _b.sent();
                return [2 /*return*/, res.status(200).send({ meditation: meditation })];
            case 3:
                e_1 = _b.sent();
                res.status(400).json({ message: e_1.message });
                throw new Error(e_1);
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.default = CreateMeditation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JlYXRlTWVkaXRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvTWVkaXRhdGlvbi9DcmVhdGVNZWRpdGF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxtQ0FBb0Q7QUFDcEQsd0RBQXVEO0FBQ3ZELDRDQUEyQztBQUUzQyxJQUFNLGdCQUFnQixHQUFHLFVBQU8sR0FBWSxFQUFFLEdBQWE7Ozs7OztnQkFHckQsS0FBSyxHQUVFLEdBQUcsTUFGTCxFQUNMLEtBQ08sR0FBRyxNQURnQixFQUFqQixTQUFTLGVBQUEsRUFBRSxJQUFJLFVBQUEsQ0FDYjtnQkFFUCxhQUFhLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztnQkFDdEMsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7Z0JBRUgscUJBQU0sdUJBQWEsQ0FBQyxXQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUE7O2dCQUE3RCxJQUFJLEdBQXFCLFNBQW9DO2dCQUM3RCxjQUFjLEdBQUcsdUJBQWEsQ0FBQyx1QkFBVSxDQUFDLENBQUM7Z0JBQ04scUJBQU0sY0FBYyxDQUFDLElBQUksdUJBQy9ELEtBQUssS0FDUixTQUFTLEVBQUUsYUFBYSxFQUN4QixJQUFJLEVBQUUsUUFBUSxFQUNkLElBQUksTUFBQSxJQUNKLEVBQUE7O2dCQUxJLFVBQVUsR0FBMkIsU0FLekM7Z0JBQ0Ysc0JBQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLFlBQUEsRUFBRSxDQUFDLEVBQUM7OztnQkFFNUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7Z0JBQzdDLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBQyxDQUFDLENBQUM7Ozs7S0FFdEIsQ0FBQztBQUVGLGtCQUFlLGdCQUFnQixDQUFDIn0=