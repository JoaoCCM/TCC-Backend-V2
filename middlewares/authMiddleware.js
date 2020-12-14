const jwt = require('jsonwebtoken')

module.exports = (app) => {
    const authMiddleware = (req, res, next) => {
        try {
            const access_token = req.headers['authorization'].split(' ')[1]

            if (access_token === null)
                return res.status(401).send({ message: 'Missing access token' })

            jwt.verify(access_token, process.env.JWT_SECRET, (err, user) => {
                if (err) {
                    return res.status(401).json({ message: 'Access Denied' })
                }

                req.user = user
                next()
            })
        } catch (e) {
            throw e
        }
    }

    return { authMiddleware }
}
