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
exports.sendSms = exports.filteredSubscriptions = exports.audioClassifier = exports.sendSecretMailToFind = exports.sendSecretMail = exports.generateVoucherNum = exports.generateSecret = exports.generateToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var nodemailer_1 = __importDefault(require("nodemailer"));
var nodemailer_mailgun_transport_1 = __importDefault(require("nodemailer-mailgun-transport"));
var axios_1 = __importDefault(require("axios"));
var generateToken = function (id) {
    return jsonwebtoken_1.default.sign({ id: id }, process.env.SECRET);
};
exports.generateToken = generateToken;
var generateSecret = function (n) {
    var str = "";
    for (var i = 0; i < n; i++) {
        str += Math.floor(Math.random() * (9 - 1) + 1);
    }
    return Number(str);
};
exports.generateSecret = generateSecret;
var decimal = [];
var baseList = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var baseSize = baseList.length;
var getRandomInt = function (mininum, maximum) {
    var min = Math.ceil(mininum);
    var max = Math.floor(maximum);
    return Math.floor(Math.random() * (max - min)) + min;
};
var getBase62 = function (n) {
    var num = n;
    var res = [];
    do {
        var mod = num % baseSize;
        num = parseInt(num) / parseInt(baseSize);
        res.push(baseList[mod]);
    } while (num > 0);
    return res.reverse().join("");
};
var generateVoucherNum = function () {
    var result = "";
    for (var i = 0; i < 12; i++) {
        var n = getRandomInt(0, 62);
        decimal.push(n);
        result += getBase62(n);
    }
    return result;
};
exports.generateVoucherNum = generateVoucherNum;
var sendMail = function (email) {
    var auth = {
        auth: {
            api_key: process.env.MAILGUN_API_KEY,
            domain: process.env.MAILGUN_DOMAIN,
        },
    };
    var nodemailerMailgun = nodemailer_1.default.createTransport(nodemailer_mailgun_transport_1.default(auth));
    return nodemailerMailgun.sendMail(email);
};
var sendSecretMail = function (secret, adress) {
    var email = {
        from: "zama@zama.com",
        to: adress,
        subject: "zama \uD68C\uC6D0\uAC00\uC785\uC744(\uB97C) \uC704\uD55C \uC774\uBA54\uC77C \uC778\uC99D\uBC88\uD638 \uC548\uB0B4",
        html: "\uC548\uB155\uD558\uC138\uC694.<br/>\n    <br/>\n    \uD68C\uC6D0\uB2D8\uC774 \uC0AC\uC6A9\uD558\uB294 \uC774\uBA54\uC77C\uC744 \uC778\uC99D\uD558\uB824\uBA74,<br/>\n    \uC544\uB798 \uC778\uC99D \uBC88\uD638\uB97C ZAMA\uC5D0 \uC785\uB825\uD574\uC8FC\uC138\uC694.<br/>\n    <br/>\n    \uC778\uC99D\uBC88\uD638: " + secret + "<br/>\n    <br/>\n    \uC778\uC99D\uBC88\uD638\uB294 5\uBD84 \uC774\uB0B4\uC5D0 \uC785\uB825\uD558\uC154\uC57C \uD569\uB2C8\uB2E4.<br/>\n    <br/>\n    \uAC10\uC0AC\uD569\uB2C8\uB2E4.<br/>\n    <br/>\n    ZAMA\uD300 \uB4DC\uB9BC.",
    };
    return sendMail(email);
};
exports.sendSecretMail = sendSecretMail;
var sendSecretMailToFind = function (secret, adress) {
    var email = {
        from: "zama@zama.com",
        to: adress,
        subject: "zama \uBE44\uBC00\uBC88\uD638\uB97C \uCC3E\uAE30 \uC704\uD55C \uC774\uBA54\uC77C \uC778\uC99D\uBC88\uD638 \uC548\uB0B4",
        html: "\uC548\uB155\uD558\uC138\uC694.<br/>\n    <br/>\n    \uC774\uBA54\uC77C\uC744 \uC778\uC99D\uD558\uB824\uBA74,<br/>\n    \uC544\uB798 \uC778\uC99D \uBC88\uD638\uB97C ZAMA\uC5D0 \uC785\uB825\uD574\uC8FC\uC138\uC694.<br/>\n    <br/>\n    \uC778\uC99D\uBC88\uD638: " + secret + "<br/>\n    <br/>\n    \uC778\uC99D\uBC88\uD638\uB294 5\uBD84 \uC774\uB0B4\uC5D0 \uC785\uB825\uD558\uC154\uC57C \uD569\uB2C8\uB2E4.<br/>\n    <br/>\n    \uAC10\uC0AC\uD569\uB2C8\uB2E4.<br/>\n    <br/>\n    ZAMA\uD300 \uB4DC\uB9BC.",
    };
    return sendMail(email);
};
exports.sendSecretMailToFind = sendSecretMailToFind;
var audioClassifier = function (data) {
    console.log(data);
    return data;
};
exports.audioClassifier = audioClassifier;
var filteredSubscriptions = function (subscriptions) {
    return subscriptions.filter(function (subscription) {
        return new Date(subscription.startDate).getTime() <= new Date().getTime() &&
            new Date(subscription.endDate).getTime() >= new Date().getTime();
    });
};
exports.filteredSubscriptions = filteredSubscriptions;
var sendSms = function (_a) {
    var receivers = _a.receivers, message = _a.message;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, axios_1.default.post("https://apis.aligo.in/send/", null, {
                        params: {
                            key: process.env.ALIGO_API_KEY,
                            user_id: "joon5006",
                            sender: "01056843712",
                            receiver: receivers.join(","),
                            msg: message,
                        },
                    })];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
};
exports.sendSms = sendSms;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOERBQStCO0FBQy9CLDBEQUFvQztBQUNwQyw4RkFBOEM7QUFFOUMsZ0RBQTBCO0FBRW5CLElBQU0sYUFBYSxHQUFHLFVBQUMsRUFBVTtJQUN0QyxPQUFBLHNCQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFBLEVBQUUsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQWdCLENBQUM7QUFBOUMsQ0FBOEMsQ0FBQztBQURwQyxRQUFBLGFBQWEsaUJBQ3VCO0FBRTFDLElBQU0sY0FBYyxHQUFHLFVBQUMsQ0FBUztJQUN0QyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDYixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzFCLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUNoRDtJQUNELE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3JCLENBQUMsQ0FBQztBQU5XLFFBQUEsY0FBYyxrQkFNekI7QUFFRixJQUFNLE9BQU8sR0FBRyxFQUFFLENBQUM7QUFDbkIsSUFBTSxRQUFRLEdBQ1osZ0VBQWdFLENBQUM7QUFDbkUsSUFBTSxRQUFRLEdBQVEsUUFBUSxDQUFDLE1BQU0sQ0FBQztBQUV0QyxJQUFNLFlBQVksR0FBRyxVQUFDLE9BQWUsRUFBRSxPQUFlO0lBQ3BELElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0IsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFD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