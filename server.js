// assignes express to a variable to create a server
const express = require("express");

// assigns mongoose to a variable to be able to use mongoose
const mongoose = require("mongoose");
// assignes routes to a var so we can use our custom routes
const routes = require("./routes");
// creates an instance of express
const app = express();
// chooses a port to run the port on either in production environment or port 3001
const PORT = process.env.PORT || 3001;

// allows us to parse json to be pushed into the database
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if the node environment is production sets your static files
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// uses our custom routes in our app
app.use(routes);

// connects the mongo database and creates the collections
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

// listener for which port you are connected too
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
