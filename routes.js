const knex = require("./connection");
var express = require("express");
var router = express.Router();

const personagensController = require("./controllers/personagens");
const filmesController = require("./controllers/filmes");
const elencoController = require("./controllers/elenco");

router.get("/personagens", personagensController.getAll);
router.get("/personagens/:id", personagensController.find);
router.post("/personagens", personagensController.save);
router.delete("/personagens/:id", personagensController.delete);
router.put("/personagens/:id", personagensController.update);

router.get("/filmes", filmesController.getAll);
router.post("/filmes", filmesController.save);

router.get("/elenco", elencoController.getAll);
router.post("/elenco", elencoController.save);

module.exports = router;
