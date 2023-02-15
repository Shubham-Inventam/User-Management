import { DataSource } from "typeorm";
import { city } from "../ent-relations/city";
import { country } from "../ent-relations/country";
import { state } from "../ent-relations/state";
import { user } from "../ent-relations/user";
//import { user1675936343062 } from "./migration/1675936343062-user";

console.log(`${__dirname}/ent-relations/**/*{.ts,.js}`);

let database = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234",
    database: "usermgmt",
    synchronize: false,
    logging:true,
    entities: [user,city,country,state],
    migrations: [`${__dirname}/migration/**/*{.ts,.js}`],
 
    // entities: [city,state,country,user],
    // migrations: ['./migration/*.ts'],
})

export default database