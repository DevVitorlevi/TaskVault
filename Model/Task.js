// Importa o módulo DataTypes do Sequelize para definir os tipos de dados das colunas.
const { DataTypes } = require('sequelize')

// Importa a instância do banco de dados configurada.
const db = require('../db/conn')

// Define o modelo `Task`, representando uma tabela no banco de dados.
const Task = db.define('Task', {
    title: {
        type: DataTypes.STRING, // Define o tipo da coluna como STRING (texto).
        require: true // Indica que o campo é obrigatório. 
    },
    description: {
        type: DataTypes.STRING, // Define o tipo da coluna como STRING (texto).
        require: true // Indica que o campo é obrigatório.
    },
    done: {
        type: DataTypes.BOOLEAN, // Define o tipo da coluna como BOOLEAN (verdadeiro/falso).
        require: true // Indica que o campo é obrigatório.
    }
})

// Exporta o modelo para que ele possa ser usado em outros arquivos.
module.exports = Task
