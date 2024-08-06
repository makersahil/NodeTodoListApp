const {
    addTask,
    deleteTaskById,
    getTasks,
    completeTask
} = require('../models/todo.model');

function httpAddTask(req, res) {
    const task = req.body;
    console.log(req.body.task, req.url);

    addTask(task);
    return res.status(200).redirect('/');
}

function httpCompleteTask(req, res) {
    const id = req.params.id;

    completeTask(id);
    return res.status(200).redirect('/');
}

function httpDeleteTaskById(req, res) {
    const id = req.params.id;
    console.log(id);

    const itemExists = deleteTaskById(id);

    if (!itemExists) {
        return res.status(404).json({
            "error": "Item does not exist!"
        });
    }
    return res.status(200).redirect('/');
}

function httpGetTasks(req, res) {
    console.log('Controller Triggered!');
    return res.json(getTasks());
}

module.exports = {
    httpAddTask,
    httpDeleteTaskById,
    httpGetTasks,
    httpCompleteTask,
}