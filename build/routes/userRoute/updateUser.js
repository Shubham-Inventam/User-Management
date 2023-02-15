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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = void 0;
const user_1 = require("../../ent-relations/user");
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user_id = req.params.id;
        const userData = yield user_1.user.findOneBy({ user_id: user_id });
        if (!userData) {
            return res.status(400).send({ message: "User not found with this id" });
        }
        userData.fname = req.body.fname;
        userData.lname = req.body.lname;
        userData.phone = req.body.phone;
        const updatedUser = yield user_1.user.save(userData);
        return res.status(200).send({ message: "User data updated successfully", updatedUser });
    }
    catch (err) {
        return res.status(400).send({ message: "Something went wrong", err });
    }
});
exports.updateUser = updateUser;
exports.default = exports.updateUser;
