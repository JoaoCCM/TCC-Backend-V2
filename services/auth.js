const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const secret = process.env.JWT_SECRET

module.exports = (app) => {
    const { findOne } = app.services.user

    const signIn = async (req, res) => {
        try {
            const { email, senha } = req.body

            if (!email || !senha)
                return res.status(400).json({ message: 'Missing information' })

            const user = await findOne({ email })

            if (!user[0])
                return res.status(500).json({ message: 'User not found' })

            bcrypt.compare(senha, user[0].senha, async (err, match) => {
                if (err || !match)
                    return res.status(401).json({ message: 'Access Denied' })

                const payload = { id: user[0].id }

                const token = jwt.sign({ payload }, secret)

                const { email, nome } = user[0]

                const data = { nome, email, token }

                return res.status(200).json(data)
            })
        } catch ({ message }) {
            return res.status(500).json(message)
        }
    }

    return { signIn }
}
