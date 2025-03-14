const express = require('express');
const exphbs = require('express-handlebars');
const conn = require('./db/conn');
const Task = require('./model/Task');
const TaskRoutes = require('./router/TaskRoutes')

const app = express();

// Configuração do Handlebars
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// Middleware para processar dados do corpo da requisição
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware para servir arquivos estáticos
app.use(express.static('public'));

// Rotas
app.use('/task', TaskRoutes);
    conn.sync({force:true}).then(()=>app.listen(3000)).catch((e=>console.log(e)))