module.exports = (app) => {
    /**
     * @swagger
     * components:
     *   schemas:
     *     Teacher:
     *       type: object
     *       properties:
     *          nome:
     *            type: string
     *
     *
     *
     * @swagger
     * /teacher:
     *     get:
     *        tags:
     *          - teacher
     *        description: Use to get a teacher
     *        produces:
     *          - application/json
     *        parameters:
     *          - in: query
     *            name: name
     *            schema:
     *              type: string
     *            required: true
     *        responses:
     *          '200':
     *            description: Success
     *            schema:
     *              $ref: '#/components/schemas/Teacher'
     * @swagger
     * /teacher/search:
     *     get:
     *        tags:
     *          - teacher
     *        description: Use to search a teacher
     *        produces:
     *          - application/json
     *        parameters:
     *          - in: query
     *            name: search
     *            schema:
     *              type: string
     *            required: true
     *        responses:
     *          '200':
     *            description: Success
     *            schema:
     *              $ref: '#/components/schemas/Teacher'
     *
     */


  const { list, listAll } = app.controllers.teacherController;

  app.get("/teacher", list);
  app.get("/teacher/search", listAll);
};
