exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("filmes")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("filmes").insert([
        {
          titulo: "Vingadores: Ultimato",
          sinopse: "O Homem de Ferro estala os dedos",
          imagem:
            "https://lumiere-a.akamaihd.net/v1/images/690x0w_br_9e5801a5.jpeg",
          ano: 2019,
        },
        {
          titulo: "X-Men Origens: Wolverine",
          sinopse: "Se não fosse o Dealpool, seria perfeito",
          imagem:
            "https://upload.wikimedia.org/wikipedia/pt/e/ec/X-Men_Origins_Wolverine.jpg",
          ano: 2009,
        },
      ]);
    });
};
