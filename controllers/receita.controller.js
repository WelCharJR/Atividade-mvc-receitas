const receitaModel = require('../models/receita.model');

function listarReceitas(request, response) {

    // Chamar a função de listar livros do model de livros
    const receitas = receitaModel.listarReceitas()

    // response.json(livros)

    const nome = "Welington"
    const ingredientes = "Todos"
    const modo_preparo = "Joga as coisa e ve no que da"

    // Renderizar a view 'listar-livros' para o usuário
     response.render('listar-receitas', {
        nome,
        ingredientes,
        modo_preparo,
        receitas
     })
}

module.exports = {
    listarReceitas
}