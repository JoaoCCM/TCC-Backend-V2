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
            const query = `MATCH (professor:Professor)-[relationship]-(p:ProjetoPesquisa)
                WHERE p.descricao =~ '(?i).*${search}.*' or p.nome =~ '(?i).*${search}.*' 
                RETURN professor.nome as nome
                UNION ALL

                MATCH (professor:Professor)
                WHERE professor.nome =~ '(?i).*${search}.*' 
                RETURN professor.nome as nome
                UNION ALL

                MATCH (professor:Professor)-[relationship]-(o:Orientacao)
                WHERE o.tituloTrabalho =~ '(?i).*${search}.*' 
                RETURN professor.nome as nome
                UNION ALL

                MATCH (professor:Professor)-[relationIdioma]-(i:Idioma)
                WHERE i.nome =~ '(?i).*${search}.*' or relationIdioma.proficiencia =~ '(?i).*${search}.*' 
                RETURN professor.nome as nome
                UNION ALL

                MATCH (professor:Professor)-[r]-(f:FormacaoAcademica)
                WHERE f.tipo =~ '(?i).*${search}.*' or r.nome_instituicao =~ '(?i).*${search}.*' 
                RETURN professor.nome as nome
                UNION ALL

                MATCH (professor:Professor)-[relationship]-(a:AreaAtuacao)
                WHERE a.nome =~ '(?i).*${search}.*'
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
