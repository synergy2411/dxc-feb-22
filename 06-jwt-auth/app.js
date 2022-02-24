const express = require("express");
const { sign, verify } = require("jsonwebtoken");
const app = express();
const SECRET_KEY = "MY_SUPER_SECRET_KEY";

app.use(express.json());

app.post("/user/login", (req, res) => {
    const { username, password } = req.body;
    if(username && password){
        const token = sign(req.body, SECRET_KEY, { expiresIn : "1d"})
        return res.send({message : "SUCCESS", token});
    }else{
        return res.send({err : "Bad Credentials"})
    }
})

const ensureToken = (req, res, next) => {
    const authHeader = req.headers["authorization"]
    if(authHeader){
        const token = authHeader.split(" ")[1]          // Bearer <token>
        req.token = token;
        next();
    }
    return res.send({err : "Auth header NOT found"})
}

app.get("/api/protected", ensureToken, (req, res) => {
    verify(req.token, SECRET_KEY, (err, decode) => {
        if(err){
            return res.send(err)
        }
        console.log("DECODE : ", decode);
        return res.send({message : "Authenticated User"})
    })
})

app.listen(9091, () => console.log("Server started at PORT : 9091"));