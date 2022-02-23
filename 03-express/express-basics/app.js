const express = require("express");
const app = express();
const todoCollection = [];

app.use(express.urlencoded({extended  : true}));            // Parse the request object and attach 'body' with request
app.use(express.json());                         // Parse the json format and attach it with request body

app.post("/api/todos", (req, res) => {
    console.log(req.body)
    const {txtTodo} = req.body;
    const todo = {
        id : (todoCollection.length + 1).toString(),
        label : txtTodo,
        status : false
    }
    todoCollection.push(todo)
    res.send(todo)
})

app.get("/api/add-todo", (req, res)=>{
    console.log(req.query);
    res.send({message : "SUBMITTED"})
})


app.get("/index", (req, res) => {
    res.sendFile(__dirname+"/public/index.html")
})


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
    // res.send("Hello Client");
    // res.sendFile(__dirname+"/public/index.html")
  }
);

app.listen(9090, () => console.log("Express server started at PORT: 9090"));
