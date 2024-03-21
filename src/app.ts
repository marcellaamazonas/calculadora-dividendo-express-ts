import express from "express";
import router from "./routes";
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("", router);

export default app;
