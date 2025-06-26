function listarReceitas() {
    const receitas = [
        { 
            id: 1,
            nome: "Lasanha",
            ingredientes: "Massa de lasanha, parma, brie",
            modo_preparo: "Joga as coisas ai e ve no que da",
            ano: 2025,
            capa_url: "http://localhost:3000/imagens/imagem-01.png" 
        },
        { 
            id: 2,
            nome: "Salada",
            ingredientes: "Alface, repolho, cebola",
            modo_preparo: "Joga as coisas ai e ve no que da",
            ano: 2010,
            capa_url: "http://localhost:3000/imagens/imagem-02.png" 
        },
        { 
            id: 3,
            nome: "Hamburger",
            ingredientes: "Pao, carne, queijo",
            modo_preparo: "Joga as coisas ai e ve no que da",
            ano: 2023,
            capa_url: "http://localhost:3000/imagens/imagem-03.png" 
        }
    ] // MOCK - Simulação de dados

    return receitas;
}

module.exports = {
    listarReceitas
}