"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = require("body-parser");
const user_routes_1 = __importDefault(require("./routes/user-routes"));
const app = (0, express_1.default)();
// enable cors
app.use((0, cors_1.default)({
    origin: "*",
    optionsSuccessStatus: 200,
}));
app.use((0, body_parser_1.json)());
app.use('/user', user_routes_1.default);
app.listen(process.env.PORT, () => {
    console.log(`server up and running on http://localhost:${process.env.PORT}`);
});
