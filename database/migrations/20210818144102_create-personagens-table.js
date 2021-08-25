exports.up = function (knex) {
  return knex.schema.createTable("personagens", (table) => {
    table.increments();
    table.string("nome");
    table.string("cor");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("personagens");
};
