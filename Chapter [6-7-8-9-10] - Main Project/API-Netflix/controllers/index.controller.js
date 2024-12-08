const { ERR, OK } = require("../utils/response")
const { User } = require("../models/index.model")

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
        // ambil tangkapan data
        const { data } = req.body
        // ambil model dari mongoose
        const user = await User.findById(req.user._id)
        // menentukan key yang diupdate
        user.favoriteMovies.push(data)
        // action untuk update
        await user.save()

        return OK(res, 201, data, "add favorite movies success")
    } catch (error) {
        return ERR(res, 500, "error adding favorite movies")
    }
}

const RemoveFavoriteMovies = async (req, res) => {
    try {
        const { movieID } = req.body

        const user = await User.findById(req.user._id)

        const existingMovies = user.favoriteMovies.some(movie => movie.id === movieID)

        if (!existingMovies) return ERR(res, 404, "Movie ID not found")

        user.favoriteMovies = user.favoriteMovies.filter(movie => movie.id !== movieID)

        await user.save()

        return OK(res, 204, "result", "remove favorite movies success")
    } catch (error) {
        return ERR(res, 500, "error removing favorite movies")
    }
}

const SignInToken = async (req, res) => {
    try {
        const { email, token } = req.body
        const user = new User({ email, token })
        await user.save()
        return OK(res, 200, null, "sign in token saved")
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