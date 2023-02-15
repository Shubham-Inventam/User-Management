"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const city_1 = require("../ent-relations/city");
const country_1 = require("../ent-relations/country");
const state_1 = require("../ent-relations/state");
const user_1 = require("../ent-relations/user");
//import { user1675936343062 } from "./migration/1675936343062-user";
console.log(`${__dirname}/ent-relations/**/*{.ts,.js}`);
let database = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234",
    database: "usermgmt",
    synchronize: false,
    logging: true,
    entities: [user_1.user, city_1.city, country_1.country, state_1.state],
    migrations: [`${__dirname}/migration/**/*{.ts,.js}`],
    // entities: [city,state,country,user],
    // migrations: ['./migration/*.ts'],
});
exports.default = database;
