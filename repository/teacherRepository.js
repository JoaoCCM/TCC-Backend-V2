module.exports = (app) => {
    const listOneTeacher = async (name) => {
        try {
            return app.db
                .raw(
                    `MATCH (:Professor {nome: ${name}})-[relacao]-(dado) RETURN relacao, dado`
                )
                .run();
        } catch (e) {
            throw e;
        }
    };

    return { listOneTeacher };
};
