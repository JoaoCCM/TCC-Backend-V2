module.exports = app => {
    const {create} = app.controllers.userController;


    app.get('/user', create);
}