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
     *     UserResponse:
     *       type: object
     *       properties:
     *          email:
     *            type: string
     *          nome:
     *            type: string
     *          curso:
     *            type: string
     *     Favorite:
     *       type: object
     *       properties:
     *          userInfo:
     *            type: string
     *          teacherInfo:
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
     * @swagger
     * /findUser:
     *     get:
     *        tags:
     *          - user
     *        description: Use to get a user by email
     *        produces:
     *          - application/json
     *        parameters:
     *          - in: query
     *            name: email
     *            schema:
     *              type: string
     *            required: true
     *        responses:
     *          '200':
     *            description: Success
     *            schema:
     *              $ref: '#/components/schemas/UserResponse'
     * @swagger
     * /user/edit:
     *     put:
     *        tags:
     *          - user
     *        description: Use to edit a user
     *        produces:
     *          - application/json
     *        parameters:
     *          - in: query
     *            name: nome
     *            schema:
     *              type: string
     *            required: true
     *        requestBody:
     *          content:
     *            application/json:
     *              schema:
     *                $ref: '#/components/schemas/User'
     *        responses:
     *          '200':
     *            description: Success
     *            schema:
     *              $ref: '#/components/schemas/UserResponse'
     * @swagger
     * /favorite:
     *     post:
     *        tags:
     *          - user
     *        description: Use to favorite a teacher
     *        produces:
     *          - application/json
     *        requestBody:
     *          content:
     *            application/json:
     *              schema:
     *                $ref: '#/components/schemas/Favorite'
     *        responses:
     *          '200':
     *            description: Success
     *            schema:
     *              $ref: '#/components/schemas/Favorite'
     *
     */

    const {
        create,
        find,
        favorite,
        unfavorite,
        getFavorites,
        update,
        deleteUser,
    } = app.controllers.userController

    app.post('/user', create)
    app.put('/user/edit', update)
    app.put('/user/delete', deleteUser)
    app.get('/findUser', find)
    app.post('/favorite', favorite)
    app.post('/unfavorite', unfavorite)
    app.get('/getFavorites', getFavorites)
}
