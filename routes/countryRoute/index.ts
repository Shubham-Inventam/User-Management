import express,{Request,Response} from "express"
import createCountry from "./createCountry"
import getCountry from "./getCountry"
const countryRouter = express.Router()

countryRouter.get("/insertcountry", createCountry)
countryRouter.get("/getcountry", getCountry)


export default countryRouter