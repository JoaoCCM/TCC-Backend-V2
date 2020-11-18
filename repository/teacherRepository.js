module.exports = (app) => {
    const listOneTeacher = async (name) => {
        try {
            const query = `MATCH (:Professor {nome: ${name}})-[relationship]-(data) RETURN relationship, data`

            return app.db.raw(query).run()
        } catch (e) {
            throw e
        }
    }
    const listRelatedTeachers = async (search) => {
        try {
            const query = `MATCH (professor:Professor)-[relationship]-(data:ProjetoPesquisa)
            WHERE data.descricao contains ${search} or data.nome contains ${search}
            RETURN professor.nome as nome`

            return app.db.raw(query).run()
        } catch (e) {
            throw e
        }
    }
    const listSearchArea = async () => {
        try {
            const query = 'MATCH (area:AreaAtuacao) RETURN area'
            return app.db.raw(query).run()
        } catch (e) {
            throw e
        }
    }

    return { listOneTeacher, listRelatedTeachers, listSearchArea }
}
