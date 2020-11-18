const bcrypt = require('bcrypt')

module.exports = (app) => {
    const {
        findUser,
        createUser,
        createRelationship,
        deleteRelationship,
        findFavoritesTeachers,
        updateUser,
        deleteUser,
    } = app.repository.userRepository

    const formatReturn = (request, label) =>
        request.map((it) => ({
            id: it[label].identity,
            ...it[label].properties,
        }))

    const createOne = async (data) => {
        try {
            const { nome, email, senha, foto, curso } = data
            const hashed = await generateHash(senha)
            const user = await createUser({
                nome,
                email,
                senha: hashed,
                foto,
                curso,
            })
            return user
        } catch (error) {
            throw error
        }
    }

    const generateHash = async (senha) => {
        const hash = await bcrypt.hash(senha, 10)
        const hashedSenha = hash

        return hashedSenha
    }

    const findOne = async ({ email }) => {
        try {
            const request = await findUser({ email })

            return formatReturn(request, 'aluno')
        } catch (error) {
            throw error
        }
    }

    const favoriteTeacher = async (search) => {
        try {
            const request = await createRelationship(search)

            return request
        } catch (error) {
            throw error
        }
    }

    const unfavoriteTeacher = async (search) => {
        try {
            const request = await deleteRelationship(search)

            return request
        } catch (error) {
            throw error
        }
    }

    const findFavoriteTeacher = async (search) => {
        try {
            const request = await findFavoritesTeachers(search)

            return formatReturn(request, 'professor')
        } catch (error) {
            throw error
        }
    }

    const updateOne = async (nome, data) => {
        try {
            const result = await updateUser(nome, data)
            if (!result) throw new Error('Não encontrado')
            return result
        } catch (e) {
            throw e
        }
    }

    const deleteOne = async (nome) => {
        try {
            const result = await deleteUser(nome)
            if (!result) throw new Error('Não encontrado')
            return result
        } catch (e) {
            throw e
        }
    }

    return {
        findOne,
        createOne,
        favoriteTeacher,
        unfavoriteTeacher,
        findFavoriteTeacher,
        updateOne,
        deleteOne,
    }
}
