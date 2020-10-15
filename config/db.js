const cypher = require("cypher-query-builder");

let db = new cypher.Connection("bolt://localhost:7687", {
  username: "neo4j",
  password: "NIna1234",
});

module.exports = db;
