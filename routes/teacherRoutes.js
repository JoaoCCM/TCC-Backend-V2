module.exports = (app) => {
  const { list } = app.controllers.teacherController;

  app.get("/teacher", list);
};
