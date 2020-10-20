var convert = require("xml-js");
const fs = require("fs");

var xml = fs.readFileSync(__dirname + "/src/professores.xml", "utf-8", (err, data) => {
  if (err) console.error(err);
  return data.replace(/&/g, "&amp;");
});

var xmlConvertedToJSON = convert.xml2json(xml, {
  compact: true,
  spaces: 4,
  ignoreAttributes: true,
});

//se o arquivo não existir o filesystem cria
fs.writeFileSync("./src/professores.json", xmlConvertedToJSON, (err) => {
  console.error(err);
});
