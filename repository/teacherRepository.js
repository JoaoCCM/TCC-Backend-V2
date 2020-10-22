module.exports = (app) => {
  const listOneTeacher = async (name) => {
    try {
      return app.db
        .raw(`MATCH (:Professor {nome: ${name}})-[relationship]-(data) RETURN relationship, data`)
        .run();
    } catch (e) {
      throw e;
    }
  };

  return { listOneTeacher };
};
