const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoute");
const itemRoutes = require("./routes/itemRoute");
require("dotenv").config();

connectDB();

const app = express();
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/items", itemRoutes);

module.exports = app;
