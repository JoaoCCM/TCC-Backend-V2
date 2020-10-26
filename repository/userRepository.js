module.exports = (app) => {
  const createUser = async (data) => {
    try {
      const { nome, email, senha, foto, curso } = data;
      const query = await app.db
        .raw(
          `CREATE (a:Aluno { nome:'${nome}', email: '${email}', senha: '${senha}', foto: '${foto}', curso: '${curso}'})`
        )
        .run();

      return { id: query[0] };
    } catch (e) {
      throw e;
    }
  };

  return { createUser };
};
