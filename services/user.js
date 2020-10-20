module.exports = (app) => {
  const { sayHi } = app.repository.userRepository;

  const createOne = async () => {
    try {
      const user = await sayHi();
      return user;
    } catch (error) {
      throw error;
    }
  };

  return { createOne };
};
