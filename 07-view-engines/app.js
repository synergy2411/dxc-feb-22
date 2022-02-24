const express = require("express");
const ejs = require("ejs")
const expHbs = require("express-handlebars");
const app = express();

// app.set("view engine", "ejs");
app.set("view engine", "hbs");

app.engine("hbs", expHbs({
    extname : ".hbs",
    layoutDir : __dirname + '/views/layouts',
    partialDir : __dirname + "/views/partials"
}))

const username = "John Doe";
const posts = [
    {title : "shopping", author : "John", comments : [ "Awesome post", "like it" ]},
    {title : "grocery", author : "Jenny", comments : []},
    {title : "insurance", author : "James", comments : ["nice post"]},
]

app.get("/index-hbs", (_, res) => {
    res.render("index", {
        layout : "main",
        username,
        posts
    })
})

app.get("/about", (_, res) => {
    res.render("about", {
        layout : "main"
    })
})

app.get("/index", (req, res) => {
    res.render("index", {
        username,
        posts
    })
})

app.listen(9091, () => console.log("Server started at PORT : 9091"))
