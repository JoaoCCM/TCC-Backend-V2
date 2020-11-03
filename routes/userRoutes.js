module.exports = (app) => {
    const { create, find } = app.controllers.userController

    app.post('/user', create)
    app.get('/findUser', find)
}
