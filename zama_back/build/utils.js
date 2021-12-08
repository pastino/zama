"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filteredSubscriptions = exports.audioClassifier = exports.sendSecretMailToFind = exports.sendSecretMail = exports.generateVoucherNum = exports.generateSecret = exports.generateToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var nodemailer_1 = __importDefault(require("nodemailer"));
var nodemailer_mailgun_transport_1 = __importDefault(require("nodemailer-mailgun-transport"));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsOERBQStCO0FBQy9CLDBEQUFvQztBQUNwQyw4RkFBOEM7QUFHdkMsSUFBTSxhQUFhLEdBQUcsVUFBQyxFQUFVO0lBQ3RDLE9BQUEsc0JBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUEsRUFBRSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBZ0IsQ0FBQztBQUE5QyxDQUE4QyxDQUFDO0FBRHBDLFFBQUEsYUFBYSxpQkFDdUI7QUFFMUMsSUFBTSxjQUFjLEdBQUcsVUFBQyxDQUFTO0lBQ3RDLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNiLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDMUIsR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ2hEO0lBQ0QsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDckIsQ0FBQyxDQUFDO0FBTlcsUUFBQSxjQUFjLGtCQU16QjtBQUVGLElBQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQztBQUNuQixJQUFNLFFBQVEsR0FDWixnRUFBZ0UsQ0FBQztBQUNuRSxJQUFNLFFBQVEsR0FBUSxRQUFRLENBQUMsTUFBTSxDQUFDO0FBRXRDLElBQU0sWUFBWSxHQUFHLFVBQUMsT0FBZSxFQUFFLE9BQWU7SUFDcEQsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLE9BQU8sSUFBSSxDQUFDLEtB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