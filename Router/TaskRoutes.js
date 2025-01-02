// Importa o módulo Express, usado para criar e gerenciar rotas e servidores web.
const express = require('express')

// Cria uma nova instância do roteador do Express para gerenciar as rotas relacionadas às tarefas.
const router = express.Router()

// Importa o controlador das tarefas, que contém os métodos responsáveis pela lógica de cada rota.
const TaskController = require('../controller/TaskController')

// Rota para exibir a página de criação de tarefas.
router.get('/create', TaskController.createTask)

// Rota para adicionar uma nova tarefa. Recebe dados via POST.
router.post('/add', TaskController.addTask)

// Rota para listar todas as tarefas. 
router.get('/all', TaskController.allTask)

// Rota para exibir a página de edição de uma tarefa específica, com o ID informado na URL.
router.get('/edit/:id', TaskController.editTask)

// Rota para atualizar uma tarefa existente. Recebe dados via POST.
router.post('/update', TaskController.updateTask)

// Rota para excluir uma tarefa. Recebe o ID da tarefa via POST.
router.post('/delete', TaskController.deleteTask)

// Rota para atualizar o status de uma tarefa (concluída ou não concluída). Recebe o ID e o novo status via POST.
router.post('/statustask', TaskController.statusTask)

// Exporta o roteador para que ele possa ser usado em outros arquivos, como no servidor principal.
module.exports = router
