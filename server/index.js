const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

const authRoutes= require("./models/routes/auth.js")

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/auth",authRoutes)

// db:pass=7QFfjvXPgyJawekb


/*Mongoose setup*/
const PORT = 3001;
mongoose
  .connect(process.env.Mongo_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`server port:${PORT}`));
  })
  .catch((err) => console.log(`${err}did not connect`));
module.exports = express.Router