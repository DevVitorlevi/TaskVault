const {Sequelize} = require('sequelize')

const {Sequelize}= require("sequelize")

const sequelize = new Sequelize('taskvault','root','',{
    host:'localhost',
    port:3306,
    dialect:'mysql'
})

try{
    console.log('Conexão Feita')
}catch(err){
    console.log('erro ao conectar ao banco de dados')
}

module.exports = sequelize