module.exports = (app) => {
  const sayHi = async () => {
    const query = await app.db.matchNode("p", "Professor").return("p").run();

    // const query = await app.db.match([node("p", "Professor")]);

    return query;
  };

  return { sayHi };
};
