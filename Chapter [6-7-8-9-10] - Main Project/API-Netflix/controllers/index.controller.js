const { ERR, OK } = require("../utils/response")

const GetFavoriteMovies = async (req, res) => {
    try {
        const { email, token } = req.params
        const data = { email, token }
        return OK(res, 200, data, "get favorite movies success")

    } catch (error) {
        return ERR(res, 500, "error get favorite movies")
    }
}

const AddFavoriteMovies = async (req, res) => {
    try {
        const { email, token, data } = req.body
        const result = { email, token, data }
        return OK(res, 200, result, "add favorite movies success")
    } catch (error) {
        return ERR(res, 500, "error adding favorite movies")
    }
}

const RemoveFavoriteMovies = async (req, res) => {
    try {
        const { email, token, movieId } = req.body
        const result = { email, token, movieId }
        return OK(res, 200, result, "remove favorite movies success")
    } catch (error) {
        return ERR(res, 500, "error removing favorite movies")
    }
}

const SignInToken = async (req, res) => {
    try {
        const { email, token } = req.body
        const result = { email, token, movieId }
        return OK(res, 200, result, "sign in token saved")
    } catch (error) {
        return ERR(res, 500, "error saving sign in token")
    }
}

module.exports = {
    SignInToken,
    GetFavoriteMovies,
    AddFavoriteMovies,
    RemoveFavoriteMovies
}