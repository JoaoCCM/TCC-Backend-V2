module.exports = (app) => {
  const { createUser } = app.repository.userRepository;

  const createOne = async (data) => {
    try {
      const user = await createUser(data);
      return user;
    } catch (error) {
      throw error;
    }
  };

  return { createOne };
};
