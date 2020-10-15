const cypher = require("cypher-query-builder");

let db = new cypher.Connection("bolt://localhost", {
    username: "root",
    password: "password",
});

module.exports = db;
