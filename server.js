const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");
const app = express();
const PORT = process.env.PORT || 8080;
const apiRouter = require("./routes/apiRoutes");
const htmlRouter = require("./routes/htmlRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", apiRouter, htmlRouter);

app.listen(PORT, function(err) {
  if (err) throw err;
  else console.log("working");
});
