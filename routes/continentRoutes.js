const express = require("express");
const router = express.Router();
const continentController = require("../controllers/continentController");

router.post("/continents", continentController.createContinent);
router.get("/continents", continentController.getAllContinents);
router.get("/continents/:id", continentController.getContinentById);
router.put("/continents/:id", continentController.updateContinent);
router.delete("/continents/:id", continentController.deleteContinent);

module.exports = router;
