const router = require("express").Router()
const UserController = require("../controllers/index.controller")

router.get("/my-movies/:email/:token", UserController.GetFavoriteMovies)

router.post("/my-movies", UserController.AddFavoriteMovies)

router.delete("/my-movies", UserController.RemoveFavoriteMovies)

//User signin token
router.post("my-token", UserController.SignInToken)

module.exports = router