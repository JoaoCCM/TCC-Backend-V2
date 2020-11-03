module.exports = app => {

    const { signIn } = app.services.auth

    app.post('/signIn', signIn);
}