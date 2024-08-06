const express = require('express');

const {
    httpAddTask,
    httpDeleteTaskById,
    httpGetTasks,
    httpCompleteTask,
} = require('../controllers/todo.controller');

const todoRouter = express.Router();

todoRouter.get('/', httpGetTasks);

todoRouter.post('/', httpAddTask);

todoRouter.get('/complete/:id', httpCompleteTask);

todoRouter.delete('/:id', httpDeleteTaskById);

module.exports = todoRouter;