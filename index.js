const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// set up express

const app = express();
app.use(express.json());
app.use(cors());

// set up mongoose

mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },

  (err) => {
    if (err) throw err;
    console.log("MONGODB IS HERE");
  }
);

// set up routes

app.use("/categories", require("./routes/categoryRouter"));

app.listen(process.env.PORT, () =>
  console.log(`The server has started on port ${process.env.PORT}`)
);
