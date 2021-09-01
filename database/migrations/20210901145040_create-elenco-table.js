exports.up = function (knex) {
  return knex.schema.createTable("elenco", (table) => {
    table.increments().primary();
    table.integer("personagem_id").references("personagens.id");
    table.integer("filme_id").references("filmes.id");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("elenco");
};
