const knex = require("../connection");

module.exports = {
  async getAll(req, res) {
    const result = await knex("personagens");
    res.json(result);
  },
  async find(req, res) {
    const personagem = await knex("personagens").where({ id: req.params.id });
    if (req.query.filmes === "true") {
      const filmes = await knex("filmes")
        .join("elenco", "filmes.id", "elenco.filme_id")
        .join("personagens", "elenco.personagem_id", "personagens.id")
        .where({ "personagens.id": req.params.id })
        .select("personagens.*");
      personagem[0].filmes = filmes;
    }
    res.json(personagem[0]);
  },
  async getByFilme(req, res) {
    const result = await knex("personagens")
      .join("elenco", "personagens.id", "elenco.personagem_id")
      .join("filmes", "elenco.filme_id", "filmes.id")
      .where({ "filmes.id": req.params.id })
      .select("personagens.*");
    res.json(result);
  },
  async save(req, res) {
    const result = await knex("personagens").insert(req.body);
    res.json(result);
  },
  async delete(req, res) {
    const result = await knex("personagens").where({ id: req.params.id }).del();
    res.json(result);
  },
  async update(req, res) {
    const result = await knex("personagens")
      .where({ id: req.params.id })
      .update(req.body);
    res.json(result);
  },
};
