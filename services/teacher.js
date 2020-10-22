module.exports = (app) => {
    const { listOneTeacher } = app.repository.teacherRepository;

    const getOne = async (name) => {
        try {
            const result = await listOneTeacher(name);
            return result;
        } catch (error) {
            throw error;
        }
    };

    return { getOne };
};
