import { Request, Response } from "express";
import { city } from "../../ent-relations/city";
import { country } from "../../ent-relations/country";
import { state } from "../../ent-relations/state";
import { user } from "../../ent-relations/user";
import database from "../../src/databasefile";

const createUser = async (req: Request, resp: Response) => {
  const { fname, lname, phone, city_name, state_name, country_name } = req.body;

  let createCity = new city();
  createCity.city_name = city_name;

  let createState = new state();
  createState.state_name = state_name;

  let createCountry = new country();
  createCountry.country_name = country_name;

  let savecity = await city.save(createCity);
  let saveState = await state.save(createState);
  let savecountry = await country.save(createCountry);

  const data = await database.getRepository(user).insert({
    fname: fname,
    lname: lname,
    phone: phone,
    city_id: createCity,
    state_id: createState,
    country_id: createCountry,
  });
  return resp.status(200).send({ message: "User created successfully", data });
};

export default createUser;
