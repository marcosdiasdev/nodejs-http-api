const knex = require("./connection");
const personagensController = require("./controllers/personagens");
var express = require("express");
var router = express.Router();

router.get("/personagens", personagensController.getAll);
router.get("/personagens/:id", personagensController.find);
router.post("/personagens", personagensController.save);
router.delete("/personagens/:id", personagensController.delete);
router.put("/personagens/:id", personagensController.update);

module.exports = router;
