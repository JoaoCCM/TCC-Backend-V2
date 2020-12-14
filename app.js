const app = require('express')()
const consign = require('consign')
const db = require('./config/db')
require('dotenv').config()

const PORT = process.env.PORT || 5000

consign()
    .then('/repository')
    .then('/services/user.js')
    .then('/services/auth.js')
    .then('/services')
    .then('./middlewares/middlewares.js')
    .then('./middlewares/authMiddleware.js')
    .then('/controllers')
    .then('/routes')
    .into(app)

app.db = db

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})
