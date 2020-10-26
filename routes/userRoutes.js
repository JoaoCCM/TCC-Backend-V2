module.exports = (app) => {
  const { create } = app.controllers.userController;

  app.post("/user", create);
};
