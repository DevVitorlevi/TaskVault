    const Task = require('../model/Task')

    module.exports = class TaskController {
        static createTask(req,res){
            res.render('task/create')
        }
        static async addTask(req,res){
            const{title,description} = req.body
            const TaskData ={
                title:title,
                description:description,
                done:false
            }
            await Task.create(TaskData)
            res.redirect('/task/all')
        }

        static async allTask(req,res){
            const task = await Task.findAll({raw:true})
            res.render('task/all',{task})
        }
    }