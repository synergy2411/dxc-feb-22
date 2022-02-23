const express = require("express");
const app = express();
const todoCollection = [
    {id : "1", label : "shopping", status : false},
    {id : "2", label : "grocery", status : true},
    {id : "3", label : "planting", status : false},
];

app.use(express.urlencoded({extended  : true}));            // Parse the request object and attach 'body' with request
app.use(express.json());                         // Parse the json format and attach it with request body



app.get("/api/todos/:todoId", (req, res) => {
    const { todoId }  = req.params;
    const foundTodo = todoCollection.find(todo => todo.id === todoId)
    if(foundTodo){
        return res.send(foundTodo)
    }else{
        return res.send({err : "NOT Found for ID - " + todoId}).status(404)
    }
})

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

app.get("/api/todos", (req, res)=>{
    res.send(todoCollection);
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
