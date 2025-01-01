const Task = require('../Model/Task')

module.exports = class TaskController {
    static createTask(req,res){
        res.render('task/create')
    }
}