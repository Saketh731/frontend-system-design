import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

//'all' signifies all the requests GET/POST/PUT/DELETE
app.all("/", (req, res) => {
  //   console.log("Request > ", req);
  //   console.log("Response > ", res);
  res.send(`I'm up`);
});

const todos = [
  {
    id: "1",
    title: "Tast 1",
    completed: false,
  },
  {
    id: "2",
    title: "Tast 2",
    completed: true,
  },
];

//READ
app.get("/todos", (req, res) => {
  //When we are using browser, the request that we are making from URL is by default always a GET request
  res.json(todos);
});

//CREATE
app.post("/todos", (req, res) => {
  // You can exchange data between two services in only serialized form. That is into a bytestream. So if there is any object we convert it to JSON.stringify({}) (text based serialization) before sending it to server.
  // Generally in HTTP requests we do Text based serialization (that is, strings) for objects to transmit data. If it is an image/video we serialize in a different way using blob,Arraybuffer,base64 encoding etc..
  const newTodo = req.body;
  todos.push(newTodo);
  res.status(201).json({
    message: "New Todo Added!",
  });
});

//UPDATE
app.put("/todos/:id", (req, res) => {
  const newTodoData = req.body;
  const todoParamId = req.params.id;
  const todoIndex = todos.findIndex((td) => td.id === todoParamId);
  if (todoIndex !== -1) {
    todos[todoIndex] = {
      id: todoParamId,
      ...newTodoData,
    };
    res.json({
      message: "Todo Updated Successfully!",
    });
  } else {
    res.status(400).json({
      message: "Todo Id does not exist",
    });
  }
});

//DELETE
app.delete("/todos/:id", (req, res) => {
  const todoParamId = req.params.id;
  const todoIndex = todos.findIndex((td) => td.id === todoParamId);
  if (todoIndex !== -1) {
    todos.splice(todoIndex, 1);
  }
  res.json({
    message: "Todo Deleted Successfully!",
  });
});

const PORT = 5111;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
