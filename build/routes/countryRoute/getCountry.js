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
const country_1 = require("../../entity/country");
let getCountry = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    const getData = yield country_1.country2.findOneBy({ id: id });
    resp.json({ message: getData });
    console.log(getData);
    // resp.json({
    //     test:'User Retrieved Successfully'
    // })
});
exports.default = getCountry;
