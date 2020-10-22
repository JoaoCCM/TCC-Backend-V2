module.exports = (app) => {
  const listOneTeacher = async (nome) => {
    try {
      return app.db
        .raw(`MATCH (:Professor {nome: ${nome}})-[relacao]-(dado) RETURN relacao, dado`)
        .run();
    } catch (e) {
      throw e;
    }
  };

  return { listOneTeacher };
};
