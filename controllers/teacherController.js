module.exports = (app) => {
  const { getOne, getRelated } = app.services.teacher;
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
  const listAll = async (req, res) => {
    try {
      const { search } = req.query;

      const result = await getRelated(search);
      return res.status(200).json(result);
    } catch (error) {
      const { message } = error;
      return res.status(500).json(message);
    }
  };

  return { list, listAll };
};
