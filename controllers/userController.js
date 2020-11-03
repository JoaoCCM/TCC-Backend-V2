module.exports = (app) => {
    const { createOne, findOne } = app.services.user

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

    return { create, find }
}
