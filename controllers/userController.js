module.exports = (app) => {
    const {
        createOne,
        findOne,
        favoriteTeacher,
        unfavoriteTeacher,
        findFavoriteTeacher,
        updateOne,
    } = app.services.user

    const create = async (req, res) => {
        try {
            const result = await createOne(req.body)
            return res.status(200).json({ message: 'created' })
        } catch (e) {
            const { message } = e
            return res.status(500).json(message)
        }
    }

    const find = async (req, res) => {
        try {
            const result = await findOne(req.query)
            return res.status(200).json(result)
        } catch (e) {
            const { message } = e
            return res.status(500).json(message)
        }
    }

    const favorite = async (req, res) => {
        try {
            const result = await favoriteTeacher(req.body)
            return res.status(200).json(result)
        } catch (e) {
            const { message } = e
            return res.status(500).json(message)
        }
    }

    const unfavorite = async (req, res) => {
        try {
            const result = await unfavoriteTeacher(req.body)
            return res.status(200).json(result)
        } catch (e) {
            const { message } = e
            return res.status(500).json(message)
        }
    }

    const getFavorites = async (req, res) => {
        try {
            const result = await findFavoriteTeacher(req.query)
            return res.status(200).json(result)
        } catch (e) {
            const { message } = e
            return res.status(500).json(message)
        }
    }

    const update = async (req, res) => {
        try {
            const { nome } = req.query
            const result = await updateOne(nome, req.query)
            return res.status(200).json({ message: 'Updated' })
        } catch (e) {
            const { message } = e
            return res.status(500).json(message)
        }
    }

    return { create, find, favorite, unfavorite, getFavorites, update }
}
