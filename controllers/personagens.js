const knex = require("../connection");

module.exports = {
  async getAll(req, res) {
    const result = await knex("personagens");
    res.json(result);
  },
  async find(req, res) {
    const result = await knex("personagens").where({ id: req.params.id });
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
