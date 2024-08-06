const express = require('express');
const override = require('method-override');

const { getTasks } = require('./models/todo.model');
const todoRouter = require('./routes/todo.route');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.json());
app.set('view engine', 'ejs');
app.use(override('_method'));

app.use('/todo', todoRouter)

app.get('/', (req, res) => {
    console.log(getTasks());
    res.render('layout.ejs', { tasklist: Array.from(getTasks()) });
});


module.exports = app;