module.exports = (app) => {
    const { list } = app.controlles.teacherControlle;

    app.get("/teacher", list);
};
