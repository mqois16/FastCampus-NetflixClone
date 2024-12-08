const { ERR, OK } = require("../utils/response")
const { User } = require("../models/index.model")
const argon2 = require("argon2")

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
        const { email, password, token } = req.body
        let user = await User.findOne({ email })

        if (!user) return ERR(res, 400, "User not found!")

        const isPasswordOK = await argon2.verify(user.password, password)

        if (!isPasswordOK) return ERR(res, 400, "Password invalid!")

        user.token = token

        await user.save()

        return OK(res, 200, null, "sign in token saved")
    } catch (error) {
        return ERR(res, 500, error, "error saving sign in token")
    }
}

const SignOutToken = async (req, res) => {
    const user = await User.findById(req.user._id)
    user.token = null

    await user.save()
    return OK(res, 204, null, "SignOut Success")
}

const SignUpUser = async (req, res) => {
    const { email, password } = req.body
    const hashPass = await argon2.hash(password)
    try {
        const user = await User.findOne({ email })

        if (user) return ERR(res, 400, "Email not available!")

        const addNewUser = new User({ email, password: hashPass })
        await addNewUser.save()

        return OK(res, 201, addNewUser, "SignUp Success!")

    } catch (error) {
        console.log("Error: ", error)
        return ERR(res, 500, "SignUp Failed!")
    }
}

module.exports = {
    SignInToken,
    GetFavoriteMovies,
    AddFavoriteMovies,
    RemoveFavoriteMovies,
    SignOutToken,
    SignUpUser
}