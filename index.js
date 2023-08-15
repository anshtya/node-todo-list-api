const express = require('express')
const app = express()
const port = 3000
const Todo = require("./model/Todo")

let todos = [
  new Todo(1, "Buy Milk"),
  new Todo(2, "Groceries")
]

app.get('/', (req, res) => res.json(todos));

app.post("/add/:text", (req, res) => {
  const newTodo = new Todo(todos.length + 1, req.params.text)
  todos.push(newTodo)
  res.redirect("/")
});

app.put("/update/:id/:text", (req, res) => {
  const todoId = parseInt(req.params.id)
  const todoText = req.params.text
  const todoIndex = todos.findIndex(todo => todo.id === todoId)
  if (todoIndex == -1) {
    res.status(404).json({ id: "id not found" })
  } else {
    todos[todoIndex].updateName(todoText)
    res.redirect("/")
  }
})

app.delete("/delete/:id", (req, res) => {
  const todoId = parseInt(req.params.id)
  const todoIndex = todos.findIndex(todo => todo.id === todoId)
  if (todoIndex == -1) {
    res.status(404).json({ id: "id not found" })
  } else {
    todos.splice(todoIndex, 1)
    res.redirect("/")
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})