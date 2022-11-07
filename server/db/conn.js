const mongoose = require("mongoose");
const DB = "mongodb://localhost:27017/reasyDb";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    //useCreateIndex: true,
    useUnifiedTopology: true,
    //useFindAndModify: false,
  })
  .then(() => {
    console.log(`Connection Successful`);
  })
  .catch((err) => console.log(`no connection ${err}`));
