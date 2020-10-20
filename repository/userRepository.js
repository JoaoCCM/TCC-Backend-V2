module.exports = (app) => {
  const sayHi = async () => {
    return app.db.matchNode("professor", "Professor").return("professor").run();
  };

  return { sayHi };
};
