module.exports = (app) => {
  const { getOne } = app.services.teacher;
  const list = async (req, res) => {
    try {
      const { name } = req.query;

      const result = await getOne(name);
      return res.status(200).json(result);
    } catch (error) {
      const { message } = error;
      return res.status(500).json(message);
    }
  };

  return { list };
};
