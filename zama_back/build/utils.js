"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var generateToken = function (id) {
    return jsonwebtoken_1.default.sign({ id: id }, process.env.SECRET);
};
exports.generateToken = generateToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsOERBQStCO0FBRXhCLElBQU0sYUFBYSxHQUFHLFVBQUMsRUFBVTtJQUN0QyxPQUFBLHNCQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFBLEVBQUUsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQWdCLENBQUM7QUFBOUMsQ0FBOEMsQ0FBQztBQURwQyxRQUFBLGFBQWEsaUJBQ3VCIn0=