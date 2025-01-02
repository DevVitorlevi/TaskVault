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
        static async editTask(req,res){
            const id = req.params.id
            const task = await Task.findOne({raw:true,where:{id}})
            res.render('task/edit',{task})
        }
        static async updateTask(req,res){
            const {id,title,description} =req.body

            const TaskData = {
                title:title,
                description:description
            }
            await Task.update(TaskData,{where:{id}})

            res.redirect('/task/all')
        }

        static async deleteTask(req,res){
            const id = req.body.id
            await Task.destroy({where:{id}})
            res.redirect('/task/all')
        }
        static async statusTask (req,res){
            const id = req.body.id

            const Status ={
                done:req.body.done === '0' ? true : false
            }
            await Task.update(Status,{where:{id}})
            res.redirect('/task/all')
        }
    }