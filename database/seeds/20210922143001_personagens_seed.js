exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("personagens")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("personagens").insert([
        {
          nome: "Capitão América",
          descricao:
            "Um soldado da segunda guerra mundial que foi congelado por 70 anos",
          imagem:
            "https://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087/standard_xlarge.jpg",
        },
        {
          nome: "Homem de Ferro",
          descricao: "Um herdeiro bilionário com uma armadura vermelha",
          imagem:
            "https://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg",
        },
        {
          nome: "Jessica Jones",
          descricao: "A melhor investigadora de Hell's Kitchen",
          imagem: "https://i.annihil.us/u/prod/marvel/i/mg/b/40/jessica.jpg",
        },
        {
          nome: "Capitã Marvel",
          descricao: "Uma ex-piloto da Força Aérea Americana",
          imagem:
            "https://i.annihil.us/u/prod/marvel/i/mg/c/10/537ba5ff07aa4/standard_xlarge.jpg",
        },
        {
          nome: "Wolverine",
          descricao: "O homem das garras de adamântio",
          imagem:
            "https://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf/standard_xlarge.jpg",
        },
        {
          nome: "Deadpool",
          descricao: "Já foi o Lanterna Verde",
          imagem:
            "https://i.annihil.us/u/prod/marvel/i/mg/5/c0/537ba730e05e0/standard_xlarge.jpg",
        },
      ]);
    });
};
