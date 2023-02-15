"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cityRoute_1 = __importDefault(require("./routes/cityRoute"));
const countryRoute_1 = __importDefault(require("./routes/countryRoute"));
const index_1 = __importDefault(require("./routes/userRoute/index"));
const body_parser_1 = __importDefault(require("body-parser"));
const stateRoute_1 = __importDefault(require("./routes/stateRoute"));
const databasefile_1 = __importDefault(require("./src/databasefile"));
const app = (0, express_1.default)();
const PORT = 4011;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use("/user", index_1.default);
app.use("/city", cityRoute_1.default);
app.use("/country", countryRoute_1.default);
app.use("/state", stateRoute_1.default);
databasefile_1.default.initialize().then(() => {
    console.log("Database Connected");
}).catch((err) => {
    console.log("Something went Wrong", err);
});
app.get("/test", (req, resp) => {
    resp.json({
        data: "Hello World"
    });
});
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
