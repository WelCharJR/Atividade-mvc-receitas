// Importar o módulo express
const express = require('express');

// Importar o controllers
const receitaController = require('./controllers/receita.controller.js');

// Cria uma instância do express
const app = express();

// Configura EJS como um motor de visualização
app.set('view engine', 'ejs')
app.set('views', './views')

// Rota para listar todos os livros
app.get('/receitas', receitaController.listarReceitas )

// Configura a porta do servidor
app.listen(3000, function() {
    console.log("Servidor rodando com sucesso")
})