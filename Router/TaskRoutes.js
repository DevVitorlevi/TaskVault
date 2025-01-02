const express = require('express');

// Cria uma nova instância do roteador do Express para gerenciar as rotas relacionadas às tarefas
const router = express.Router();

// Importa o controlador das tarefas, que contém os métodos responsáveis pela lógica das rotas
const TaskController = require('../controller/TaskController')

router.get('/create', TaskController.createTask)
router.post('/add', TaskController.addTask)
router.get('/all',TaskController.allTask)
router.get('/edit/:id',TaskController.editTask)

module.exports = router