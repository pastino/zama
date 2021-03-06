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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateJwt = void 0;
var passport_1 = __importDefault(require("passport"));
var passport_jwt_1 = require("passport-jwt");
var typeorm_1 = require("typeorm");
var User_1 = require("./entities/User");
var jwtOptions = {
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET,
};
var verifyUser = function (jwt_payload, done) { return __awaiter(void 0, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getRepository(User_1.User).findOne({
                    id: jwt_payload.id,
                })];
            case 1:
                user = _a.sent();
                try {
                    if (user !== null) {
                        return [2 /*return*/, done(null, user)];
                    }
                    else {
                        return [2 /*return*/, done(null, false)];
                    }
                }
                catch (error) {
                    return [2 /*return*/, done(error, false)];
                }
                return [2 /*return*/];
        }
    });
}); };
var authenticateJwt = function (req, res, next) {
    return passport_1.default.authenticate("jwt", { session: false }, function (error, user) {
        if (user) {
            req.user = user;
        }
        next();
    })(req, res, next);
};
exports.authenticateJwt = authenticateJwt;
passport_1.default.use(new passport_jwt_1.Strategy(jwtOptions, verifyUser));
passport_1.default.initialize();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3BvcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvcGFzc3BvcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQWdDO0FBQ2hDLDZDQUFvRDtBQUNwRCxtQ0FBd0M7QUFDeEMsd0NBQXVDO0FBRXZDLElBQU0sVUFBVSxHQUFHO0lBQ2pCLGNBQWMsRUFBRSx5QkFBVSxDQUFDLDJCQUEyQixFQUFFO0lBQ3hELFdBQVcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU07Q0FDaEMsQ0FBQztBQUVGLElBQU0sVUFBVSxHQUFHLFVBQU8sV0FBZ0IsRUFBRSxJQUFTOzs7O29CQUNwQixxQkFBTSx1QkFBYSxDQUFDLFdBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQztvQkFDL0QsRUFBRSxFQUFFLFdBQVcsQ0FBQyxFQUFFO2lCQUNuQixDQUFDLEVBQUE7O2dCQUZJLElBQUksR0FBcUIsU0FFN0I7Z0JBRUYsSUFBSTtvQkFDRixJQUFJLElBQUksS0FBSyxJQUFJLEVBQUU7d0JBQ2pCLHNCQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUM7cUJBQ3pCO3lCQUFNO3dCQUNMLHNCQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUM7cUJBQzFCO2lCQUNGO2dCQUFDLE9BQU8sS0FBSyxFQUFFO29CQUNkLHNCQUFPLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUM7aUJBQzNCOzs7O0tBQ0YsQ0FBQztBQUVLLElBQU0sZUFBZSxHQUFHLFVBQUMsR0FBUSxFQUFFLEdBQVEsRUFBRSxJQUFTO0lBQzNELE9BQUEsa0JBQVEsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLFVBQUMsS0FBSyxFQUFFLElBQUk7UUFDM0QsSUFBSSxJQUFJLEVBQUU7WUFDUixHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNqQjtRQUNELElBQUksRUFBRSxDQUFDO0lBQ1QsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUM7QUFMbEIsQ0FLa0IsQ0FBQztBQU5SLFFBQUEsZUFBZSxtQkFNUDtBQUVyQixrQkFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLHVCQUFRLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7QUFDbkQsa0JBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyJ9