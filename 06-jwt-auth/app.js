const express = require("express");
const { sign, verify } = require("jsonwebtoken");
require("./db");
const UserModel = require("./model/user.model");

const app = express();
const SECRET_KEY = "MY_SUPER_SECRET_KEY";

app.use(express.json());

app.post("/user/login", async (req, res) => {
  try {
    const foundUser = await UserModel.findOne(req.body);
    if (foundUser) {
      const token = sign({...foundUser._doc}, SECRET_KEY, { expiresIn: "1d" });
      return res.send({ message: "SUCCESS", token });
    }else{
        return res.send({ message: "User NOT found." });
    }
  } catch (err) {
      return res.send({message : "Error", err})
  }
});

const ensureToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (authHeader) {
    const token = authHeader.split(" ")[1]; // Bearer <token>
    req.token = token;
    return next();
  }
  return res.send({ err: "Auth header NOT found" });
};

app.get("/api/protected", ensureToken, (req, res) => {
  verify(req.token, SECRET_KEY, (err, decode) => {
    if (err) {
      return res.send(err);
    }
    console.log("DECODE : ", decode);
    return res.send({ message: "Authenticated User" });
  });
});

app.listen(9091, () => console.log("Server started at PORT : 9091"));
