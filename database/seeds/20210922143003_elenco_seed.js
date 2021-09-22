exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("elenco")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("elenco").insert([
        {
          filme_id: 1,
          personagem_id: 1,
        },
        {
          filme_id: 1,
          personagem_id: 2,
        },
        {
          filme_id: 1,
          personagem_id: 4,
        },
        {
          filme_id: 2,
          personagem_id: 5,
        },
        {
          filme_id: 2,
          personagem_id: 6,
        },
      ]);
    });
};
