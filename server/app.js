const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
dotenv.config({ path: "./config.env" });

require("./db/conn");
app.use(bodyParser.json());
app.use(cors());
const User = require("./model/userSchema");

//linked router files
app.use(require("./router/auth"));
app.use(require("./router/property"));
const PORT = process.env.PORT;

//middleware
const middleware = (req, res, next) => {
  console.log(`Middleware is running`);
  next();
};

app.get("/", (req, res) => {
  res.send(`Home Page`);
});

// app.get("/rental", middleware, (req, res) => {
//   res.send(`Rental Page`);
// });

// app.get("/buy-sell", (req, res) => {
//   res.send(`Buy-Sell Page`);
// });

app.get("/services", (req, res) => {
  res.send(`Services Page`);
});

// app.get("/contactus", (req, res) => {
//   res.send(`Contact-Us Page`);
// });

// app.get("/aboutus", (req, res) => {
//   res.send(`About-Us Page`);
// });

app.listen(PORT, () => {
  console.log(`Server is running at port no ${PORT}`);
});
