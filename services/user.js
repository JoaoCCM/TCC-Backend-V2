module.exports = app => {

    const { sayHi } = app.repository.userRepository;

    const createOne = () => {
        try {
            const user = sayHi();
            return user;
        } catch (error) {
            throw error
        }
    }

    return { createOne }
}