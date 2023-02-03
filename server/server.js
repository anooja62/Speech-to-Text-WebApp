/** @format */

const express = require("express");
const mongoose = require("mongoose");
const Cors = require("cors");
const dotenv = require("dotenv");
//app config
const app = express();
const port = 8000;
dotenv.config();

app.use(express.json());
app.use(Cors());
mongoose.set("strictQuery", false);
const MONGO_URI =
  "mongodb+srv://speechtotext:7liFgyuhmWflbn2N@cluster0.yldkj9g.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected  to mongodb !!"))

  .catch((err) => console.log(err.message));
app.listen(port, () => {
  console.log(`listening in : ${port}`);
});
