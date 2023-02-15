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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const city_1 = require("../../ent-relations/city");
const country_1 = require("../../ent-relations/country");
const state_1 = require("../../ent-relations/state");
const user_1 = require("../../ent-relations/user");
const databasefile_1 = __importDefault(require("../../src/databasefile"));
const createUser = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const { fname, lname, phone, city_name, state_name, country_name } = req.body;
    let createCity = new city_1.city();
    createCity.city_name = city_name;
    let createState = new state_1.state();
    createState.state_name = state_name;
    let createCountry = new country_1.country();
    createCountry.country_name = country_name;
    let savecity = yield city_1.city.save(createCity);
    let saveState = yield state_1.state.save(createState);
    let savecountry = yield country_1.country.save(createCountry);
    const data = yield databasefile_1.default.getRepository(user_1.user).insert({
        fname: fname,
        lname: lname,
        phone: phone,
        city_id: createCity,
        state_id: createState,
        country_id: createCountry,
    });
    return resp.status(200).send({ message: "User created successfully", data });
});
exports.default = createUser;
