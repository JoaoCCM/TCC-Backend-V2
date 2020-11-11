module.exports = (app) => {
    /**
     * @swagger
     * components:
     *   schemas:
     *     User:
     *       type: object
     *       properties:
     *          email:
     *            type: string
     *          nome:
     *            type: string
     *          senha:
     *            type: string
     *          curso:
     *            type: string
     *
     *
     *
     * @swagger
     * /user:
     *     post:
     *        tags:
     *          - user
     *        description: Use to register a user
     *        produces:
     *          - application/json
     *        requestBody:
     *          content:
     *            application/json:
     *              schema:
     *                $ref: '#/components/schemas/User'
     *        responses:
     *          '200':
     *            description: Created
     *            schema:
     *              $ref: '#/components/schemas/User'
     *
     */

    const {
        create,
        find,
        favorite,
        unfavorite,
        getFavorites,
    } = app.controllers.userController

    app.post('/user', create)
    app.get('/findUser', find)
    app.post('/favorite', favorite)
    app.post('/unfavorite', unfavorite)
    app.get('/getFavorites', getFavorites)
}
