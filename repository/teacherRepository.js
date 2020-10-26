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
  const listRelatedTeachers = async (search) => {
    try {
      return app.db
        .raw(
          `MATCH (professor:Professor)-[relationship]-(data:ProjetoPesquisa)
          where data.descricao contains ${search} or data.nome contains ${search}
          RETURN professor.nome as nome`
        )
        .run();
    } catch (e) {
      throw e;
    }
  };

  return { listOneTeacher, listRelatedTeachers };
};
