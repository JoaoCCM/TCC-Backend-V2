const bcrypt = require('bcrypt')

module.exports = (app) => {
    const { createUser, findUser } = app.repository.userRepository

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

            return request.map((it) => ({
                id: it.aluno.identity,
                ...it.aluno.properties,
            }))
        } catch (error) {
            throw error
        }
    }

    return { createOne, findOne }
}
