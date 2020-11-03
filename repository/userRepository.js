module.exports = (app) => {
    const createUser = async ({ nome, email, senha, foto, curso }) => {
        try {
            const query = await app.db
                .raw(
                    `CREATE (a:Aluno { nome:'${nome}', email: '${email}', senha: '${senha}', foto: '${foto}', curso: '${curso}'})`
                )
                .run()

            return { id: query[0] }
        } catch (e) {
            throw e
        }
    }

    const findUser = async (where = {}) => {
        try {
            const key = Object.keys(where)[0]
            const final = `{${key}: "${where[key]}"}`

            const query = await app.db
                .raw(`MATCH (aluno:Aluno ${final}) RETURN aluno`)
                .run()

            return query
        } catch (e) {
            throw e
        }
    }

    //TODO: implement these queries
    const createRelationship = async (search) => {
        try {
            return app.db
                .raw(
                    `MATCH (aluno:Aluno {name: 'Jennifer'})
                      MATCH (professor:Professor {name: 'Mark'})
                      CREATE (aluno)-[rel:favoritou]->(professor)`
                )
                .run()
        } catch (e) {
            throw e
        }
    }

    const deleteRelationship = async (search) => {
        try {
            return app.db
                .raw(
                    `MATCH (aluno:Aluno {name: 'Jennifer'})-[r:favoritou]->(professor:Professor {name: 'Mark'})
                    DELETE r`
                )
                .run()
        } catch (e) {
            throw e
        }
    }

    return { createUser, findUser }
}
