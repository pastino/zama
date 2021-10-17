"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.audioClassifier = exports.sendSecretMail = exports.generateSecret = exports.generateToken = void 0;
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
        html: "\uC548\uB155\uD558\uC138\uC694.<br/>\n    <br/>\n    \uD68C\uC6D0\uB2D8\uC774 \uC0AC\uC6A9\uD558\uB294 \uC774\uBA54\uC77C\uC744 \uC778\uC99D\uD558\uB824\uBA74,<br/>\n    \uC544\uB798 \uC778\uC99D \uBC88\uD638\uB97C ZAMA\uC5D0 \uC785\uB825\uD574\uC8FC\uC138\uC694.<br/>\n    <br/>\n    \uC778\uC99D\uBC88\uD638: " + secret + "<br/>\n    <br/>\n    \uC778\uC99D\uBC88\uD638\uB294 60\uBD84 \uC774\uB0B4\uC5D0 \uC785\uB825\uD558\uC154\uC57C \uD569\uB2C8\uB2E4.<br/>\n    <br/>\n    \uAC10\uC0AC\uD569\uB2C8\uB2E4.<br/>\n    <br/>\n    ZAMA\uD300 \uB4DC\uB9BC.",
    };
    return sendMail(email);
};
exports.sendSecretMail = sendSecretMail;
var audioClassifier = function (data) {
    console.log(data);
    return data;
};
exports.audioClassifier = audioClassifier;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsOERBQStCO0FBQy9CLDBEQUFvQztBQUNwQyw4RkFBOEM7QUFFdkMsSUFBTSxhQUFhLEdBQUcsVUFBQyxFQUFVO0lBQ3RDLE9BQUEsc0JBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUEsRUFBRSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBZ0IsQ0FBQztBQUE5QyxDQUE4QyxDQUFDO0FBRHBDLFFBQUEsYUFBYSxpQkFDdUI7QUFFMUMsSUFBTSxjQUFjLEdBQUcsVUFBQyxDQUFTO0lBQ3RDLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNiLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDMUIsR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ2hEO0lBQ0QsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDckIsQ0FBQyxDQUFDO0FBTlcsUUFBQSxjQUFjLGtCQU16QjtBQUVGLElBQU0sUUFBUSxHQUFHLFVBQUMsS0FBUztJQUN6QixJQUFNLElBQUksR0FBRztRQUNYLElBQUksRUFBRTtZQUNKLE9BQU8sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWU7WUFDcEMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYztTQUNuQztLQUNGLENBQUM7SUFDRixJQUFNLGlCQUFpQixHQUFHLG9CQUFVLENBQUMsZUFBZSxDQUFDLHNDQUFFLENBQUMsSUFBVyxDQUFDLENBQUMsQ0FBQztJQUN0RSxPQUFPLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMzQyxDQUFDLENBQUM7QUFFSyxJQUFNLGNBQWMsR0FBRyxVQUFDLE1BQWMsRUFBRSxNQUFjO0lBQzNELElBQU0sS0FBSyxHQUFHO1FBQ1osSUFBSSxFQUFFLGVBQWU7UUFDckIsRUFBRSxFQUFFLE1BQU07UUFDVixPQUFPLEVBQUUsbUhBQThCO1FBQ3ZDLElBQUksRUFBRSw0VEFLRSxNQUFNLDJPQU1KO0tBQ1gsQ0FBQztJQUNGLE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3pCLENBQUMsQ0FBQztBQW5CVyxRQUFBLGNBQWMsa0JBbUJ6QjtBQUVLLElBQU0sZUFBZSxHQUFHLFVBQUMsSUFBUztJQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRWxCLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDO0FBSlcsUUFBQSxlQUFlLG1CQUkxQiJ9