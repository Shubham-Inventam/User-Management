import express,{Request,Response} from "express"
import getUser from "./getUser"
import updateUser from "./updateUser"
const userRouter = express.Router()
import createUser from "./user"

userRouter.post("/insertuser", createUser)
userRouter.get("/getuser/:id", getUser)
userRouter.put("/updateuser", updateUser)


export default userRouter