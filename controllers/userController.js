module.exports = (app) => {
    const {
        createOne,
        findOne,
        favoriteTeacher,
        unfavoriteTeacher,
        findFavoriteTeacher,
        updateOne,
        deleteOne,
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
            const { email } = req.user.payload
            const result = await findOne(email)
            return res.status(200).json(result)
        } catch (e) {
            const { message } = e
            return res.status(500).json(message)
        }
    }

    const favorite = async (req, res) => {
        try {
            const { email } = req.user.payload
            await favoriteTeacher({
                ...req.body,
                userInfo: { email },
            })
            return res.status(200).send()
        } catch (e) {
            const { message } = e
            return res.status(500).json(message)
        }
    }

    const unfavorite = async (req, res) => {
        try {
            const { email } = req.user.payload
            console.log(req.user.payload)
            console.log(req.body)
            await unfavoriteTeacher({
                ...req.body,
                userInfo: { email },
            })
            return res.status(200).json({message: "success"})
        } catch (e) {
            const { message } = e
            return res.status(500).json(message)
        }
    }

    const getFavorites = async (req, res) => {
        try {
            const { email } = req.user.payload;
            const result = await findFavoriteTeacher(email)
            return res.status(200).json(result)
        } catch (e) {
            const { message } = e
            return res.status(500).json(message)
        }
    }

    const update = async (req, res) => {
        try {
            const { nome } = req.query
            const result = await updateOne(nome, req.body)
            return res.status(200).json({ message: 'Updated' })
        } catch (e) {
            const { message } = e
            return res.status(500).json(message)
        }
    }

    const deleteUser = async (req, res) => {
        try {
            const { nome } = req.query
            const result = await deleteOne(nome)
            return res.status(200).json({ message: 'Deleted' })
        } catch (e) {
            const { message } = e
            return res.status(500).json(message)
        }
    }

    return {
        create,
        find,
        favorite,
        unfavorite,
        getFavorites,
        update,
        deleteUser,
    }
}
