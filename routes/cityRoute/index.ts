import express,{Request,Response} from "express"
import createCity from "./createcity"
import getCity from "./getCity"
const cityRouter = express.Router()

cityRouter.get("/insertcity", createCity)
cityRouter.get("/getcity", getCity)


export default cityRouter