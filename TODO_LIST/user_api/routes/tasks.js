const express = require('express');

const taskController = require('../controller/task.controller')

const app = express();

app.get('/tasks', (req, res) => {
  taskController.getAllTasks()
    .then(data => res.json(data))
});

app.post('/task', (req, res) => {
  const { task } = req.body;
  taskController.createTask(task)
    .then(data => res.json(data))
});

app.put('/task/:id', (req, res) => {
  const { task } = req.body;
  const { id } = req.params;
  taskController.updateTask(id, task)
    .then(data => res.json(data))
});

app.delete('/task/:id', (req, res) => {
  const { id } = req.params;
  taskController.deleteTask(id)
    .then(data => res.json(data))
});

module.exports = app;

