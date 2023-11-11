import "dotenv/config"
import express, { Express } from "express";
import cors from 'cors';
import { json } from "body-parser";

const app: Express = express();
// enable cors
app.use(cors({
    origin: "*",
    optionsSuccessStatus: 200,
}));
app.use(json());

app.listen(process.env.PORT,()=>{
    console.log(`server up and running on http://localhost:${process.env.PORT}`);
});