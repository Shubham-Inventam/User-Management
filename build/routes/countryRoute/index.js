"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createCountry_1 = __importDefault(require("./createCountry"));
const getCountry_1 = __importDefault(require("./getCountry"));
const countryRouter = express_1.default.Router();
countryRouter.get("/insertcountry", createCountry_1.default);
countryRouter.get("/getcountry", getCountry_1.default);
exports.default = countryRouter;
