const router = require("express").Router()
const UserController = require("../controllers/index.controller")
const { checkToken } = require("../utils/auth")

router.get("/my-movies/:email/:token", checkToken, UserController.GetFavoriteMovies)

router.post("/my-movies", checkToken, UserController.AddFavoriteMovies)

router.delete("/my-movies", checkToken, UserController.RemoveFavoriteMovies)

//User signin token
router.post("/my-token", UserController.SignInToken)

module.exports = router