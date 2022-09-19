const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 3000 || process.env.PORT;
const ejs = require("ejs");

const { indexController } = require("./controllers/indexController");
const {
  customerDisplayController,
} = require("./controllers/customerDisplayController");
const {
  customerAddController,
} = require("./controllers/customerAddController");
const { addFundsController } = require("./controllers/addFundsController");
const {
  displayTransactionsController,
} = require("./controllers/displayTransactionsController");
const {
  transferFundsController,
} = require("./controllers/transferFundsController");
const { updateController } = require("./controllers/updateController");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

const connection = mongoose.connect(
  "mongodb://localhost:27017/banking-system",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }
);

connection
  .then((response) => {
    // console.log(response.connections);
    console.log("Database has been connected!");
    app.listen(PORT, () => {
      console.log(`Server running on Port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", indexController);
app.get("/customers/:id", customerDisplayController);
app.get("/customers/:id/transactions", displayTransactionsController);
app.post("/customers/:id/addFunds", addFundsController);

app.get("/customers/:id/transfer", transferFundsController);

app.post("/customers", customerAddController);

app.put("/customers/:id", updateController);