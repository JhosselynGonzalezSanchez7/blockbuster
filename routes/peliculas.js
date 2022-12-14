const {Router} = require("express")
const {getPelis, getPelisByID,deletePelisByID, addPelis} = require("../controllers/peliculas")
const router = Router()

//http://localhost:4008/api/v1/peliculas

/// GET ///
router.get("/", getPelis)
router.get("/id/:id", getPelisByID)

router.post("/", addPelis)

/// DELETE ///
router.delete("/",deletePelisByID)

module.exports = router

//jhosselyn Gonzalez