import express,{Request,Response} from "express"
import { DataSource } from "typeorm";
import cityRouter from "./routes/cityRoute";
import countryRouter from "./routes/countryRoute";
import userRouter from "./routes/userRoute/index";
import bodyParser from "body-parser";
import stateRouter from "./routes/stateRoute";
import database from "./src/databasefile";


const app = express();
const PORT = 4011


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use("/user", userRouter)
app.use("/city", cityRouter)
app.use("/country", countryRouter)
app.use("/state", stateRouter)


database.initialize().then (()=>{
    console.log("Database Connected");
    
}).catch((err)=>{
    console.log("Something went Wrong",err);
})


app.get("/test", (req:Request,resp:Response)=>{
    resp.json({
        data:"Hello World"
    })
})

app.listen(PORT,():void => {
    console.log(`Server is running on ${PORT}`);
})