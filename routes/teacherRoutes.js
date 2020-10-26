module.exports = (app) => {
  const { list, listAll } = app.controllers.teacherController;

  app.get("/teacher", list);
  app.get("/teacher/search", listAll);
};
