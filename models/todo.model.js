const tasks = new Map();

let latestTaskId = 100;

const demoTask = {
        id: 100,
        task: "Wash the dishes",
        desc: "Gotta get going for another round of cooking!",
        complete: false,
};

tasks.set(demoTask.id, demoTask);

function addTask(task) {
    latestTaskId++;
    tasks.set(latestTaskId, Object.assign(task, {
        id: latestTaskId,
        complete: false,
    }));
}

function deleteTaskById(id) {
    const itemExists = tasks.delete(Number(id));
    return itemExists;
}

function completeTask(id) {
    const task = tasks.get(Number(id));
    console.log(tasks);
    task.complete = true;
    tasks.set(task.id, task)
    console.log(tasks);
}

function getTasks() {
    return Array.from(tasks.values());
}

module.exports = {
    addTask,
    deleteTaskById,
    getTasks,
    completeTask,
}