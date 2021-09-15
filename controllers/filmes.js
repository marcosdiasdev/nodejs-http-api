const knex = require("../connection");

module.exports = {
  async getAll(req, res) {
    const result = await knex("filmes");
    res.json(result);
  },
  async find(req, res) {
    const filme = await knex("filmes").where({ id: req.params.id });
    // Query param => personagens
    if (req.query.personagens === "true") {
      const personagens = await knex("personagens")
        .join("elenco", "personagens.id", "elenco.personagem_id")
        .join("filmes", "elenco.filme_id", "filmes.id")
        .where({ "filmes.id": req.params.id })
        .select("personagens.*");
      filme[0].personagens = personagens;
    }
    res.json(filme[0]);
  },
  async save(req, res) {
    const result = await knex("filmes").insert(req.body);
    res.json(result);
  },
  async delete(req, res) {
    const result = await knex("filmes").where({ id: req.params.id }).del();
    res.json(result);
  },
  async update(req, res) {
    const result = await knex("filmes")
      .where({ id: req.params.id })
      .update(req.body);
    res.json(result);
  },
};
