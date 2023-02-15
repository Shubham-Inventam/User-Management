"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createcity_1 = __importDefault(require("./createcity"));
const getCity_1 = __importDefault(require("./getCity"));
const cityRouter = express_1.default.Router();
cityRouter.get("/insertcity", createcity_1.default);
cityRouter.get("/getcity", getCity_1.default);
exports.default = cityRouter;
