const {Router} = require("express")
const {getClient, getClientByID, deleteClientByID, addClient} = require("../controllers/clientes")
const router = Router()

//http://localhost:4008/api/v1/clientes

/// GET ///
router.get("/", getClient)
router.get("/id/:id", getClientByID)

/// POST ///
router.post("/", addClient)

/// DELETE ///
router.delete("/",deleteClientByID)

module.exports = router

//jhosselyn gonzalez