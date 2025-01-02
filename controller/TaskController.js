const Task = require('../model/Task') // Importa o modelo Task, que interage com o banco de dados.

module.exports = class TaskController {
    // Renderiza a página de criação de tarefas.
    static createTask(req, res) {
        res.render('task/create')
    }

    // Adiciona uma nova tarefa ao banco de dados.
    static async addTask(req, res) {
        const { title, description } = req.body // Extrai os campos enviados no corpo da requisição.
        const TaskData = {
            title: title, // Define o título da tarefa.
            description: description, // Define a descrição da tarefa.
            done: false // Define o status inicial como não concluído.
        }
        await Task.create(TaskData) // Salva os dados da tarefa no banco de dados.
        res.redirect('/task/all') // Redireciona para a listagem de tarefas.
    }

    // Lista todas as tarefas do banco de dados e as exibe.
    static async allTask(req, res) {
        const task = await Task.findAll({ raw: true }) // Busca todas as tarefas em formato bruto.
        res.render('task/all', { task }) // Renderiza a página com as tarefas.
    }

    // Busca uma tarefa específica pelo ID e renderiza a página de edição.
    static async editTask(req, res) {
        const id = req.params.id // Obtém o ID dos parâmetros da URL.
        const task = await Task.findOne({ raw: true, where: { id } }) // Busca a tarefa correspondente.
        res.render('task/edit', { task }) // Renderiza a página de edição.
    }

    // Atualiza os dados de uma tarefa no banco de dados.
    static async updateTask(req, res) {
        const { id, title, description } = req.body // Extrai os campos enviados no corpo da requisição.

        const TaskData = {
            title: title, // Atualiza o título.
            description: description // Atualiza a descrição.
        }
        await Task.update(TaskData, { where: { id } }) // Atualiza a tarefa no banco de dados.

        res.redirect('/task/all') // Redireciona para a listagem de tarefas.
    }

    // Exclui uma tarefa do banco de dados.
    static async deleteTask(req, res) {
        const id = req.body.id // Obtém o ID da requisição.
        await Task.destroy({ where: { id } }) // Remove a tarefa correspondente.
        res.redirect('/task/all') // Redireciona para a listagem de tarefas.
    }

    // Atualiza o status de conclusão de uma tarefa.
    static async statusTask(req, res) {
        const id = req.body.id // Obtém o ID da requisição.

        const Status = {
            done: req.body.done === '0' ? true : false // Define o status com base no valor enviado.
        }
        await Task.update(Status, { where: { id } }) // Atualiza o status no banco de dados.
        res.redirect('/task/all') // Redireciona para a listagem de tarefas.
    }
}
