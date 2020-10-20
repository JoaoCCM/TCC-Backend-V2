module.exports = (app) => {
  const { createOne } = app.services.user;

  const create = async (req, res) => {
    try {
      const result = await createOne();
      return res.status(200).json({ result });
    } catch (e) {
      const { message } = e;
      return res.status(500).json(message);
    }
  };

  return { create };
};
