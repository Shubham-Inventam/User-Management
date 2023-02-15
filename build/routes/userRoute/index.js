"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getUser_1 = __importDefault(require("./getUser"));
const updateUser_1 = __importDefault(require("./updateUser"));
const userRouter = express_1.default.Router();
const user_1 = __importDefault(require("./user"));
userRouter.post("/insertuser", user_1.default);
userRouter.get("/getuser/:id", getUser_1.default);
userRouter.put("/updateuser", updateUser_1.default);
exports.default = userRouter;
