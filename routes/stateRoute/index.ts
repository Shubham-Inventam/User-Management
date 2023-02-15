import express,{Request,Response} from "express"
import createState from "./createState"
import getState from "./getState"
const stateRouter = express.Router()

stateRouter.get("/createstate", createState )
stateRouter.get("/getstate", getState)


export default stateRouter