const express = require("express");
const app = express();

app.get(
  "/",
  (req, res, next) => {
      console.log("URL : ", req.url)
      console.log("MEthod : ", req.method)
    console.log("Middleware 1 works!!!");
    next();
  },
  (request, response, next) => {
    console.log("Middleware 2 works");
    next();
  },
  (req, res, next) => {
    console.log("Middleware 3 works");
    res.send({ message: "SUCCESS" });
  }
);

app.listen(9090, () => console.log("Express server started at PORT: 9090"));
