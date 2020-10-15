var convert = require("xml-js");
const fs = require("fs");

var xml = fs.readFileSync(
    __dirname + "/professores.xml",
    "utf-8",
    (err, data) => {
        if (err) console.error(err);
        return data.replace(/&/g, "&amp;");
    }
);

var xmlConvertedToJSON = convert.xml2json(xml, {
    compact: true,
    spaces: 4,
    ignoreAttributes: true,
    // attributeValueFn: (attrValue) => entities.encodeXML(attrValue),
});

//se o arquivo não existir o filesystem cria
fs.writeFileSync("./professores.json", xmlConvertedToJSON, (err) => {
    console.error(err);
});
