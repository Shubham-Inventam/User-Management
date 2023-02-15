"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createState_1 = __importDefault(require("./createState"));
const getState_1 = __importDefault(require("./getState"));
const stateRouter = express_1.default.Router();
stateRouter.get("/createstate", createState_1.default);
stateRouter.get("/getstate", getState_1.default);
exports.default = stateRouter;
