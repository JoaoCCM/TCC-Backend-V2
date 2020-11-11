module.exports = (app) => {
    const whereStructuring = (where = {}) => {
        const key = Object.keys(where)[0]
        return `{${key}: "${where[key]}"}`
    }
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
            const final = whereStructuring(where)

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
        const { userInfo, teacherInfo } = search

        const finalUser = whereStructuring(userInfo)
        const finalTeacher = whereStructuring(teacherInfo)

        try {
            return app.db
                .raw(
                    ` MATCH (aluno:Aluno ${finalUser})
                      MATCH (professor:Professor ${finalTeacher})
                      CREATE (aluno)-[rel:favoritou]->(professor)`
                )
                .run()
        } catch (e) {
            throw e
        }
    }

    const deleteRelationship = async (search) => {
        const { userInfo, teacherInfo } = search

        const finalUser = whereStructuring(userInfo)
        const finalTeacher = whereStructuring(teacherInfo)

        try {
            return app.db
                .raw(
                    `MATCH (aluno:Aluno ${finalUser})-[r:favoritou]->(professor:Professor ${finalTeacher})
                    DELETE r`
                )
                .run()
        } catch (e) {
            throw e
        }
    }

    return { createUser, findUser, createRelationship, deleteRelationship }
}
