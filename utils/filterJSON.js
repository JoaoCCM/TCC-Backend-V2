const fs = require("fs");
const json = require("./professores.json");
const filterInternLayer = require("./constants/filteredKeys.js");

const filterJSON = (data) =>
    filterJSONKeys(data, Object.keys(filterInternLayer));

const filterJSONKeys = (json, validFields) => {
    const keys = Object.keys(json);

    const filteredJson = keys
        .filter((key) => validFields.includes(key))
        .reduce((obj, key) => {
            obj[key] = json[key]._text ? json[key]._text : json[key];
            if (filterInternLayer[key]) {
                const internJSON = json[key];
                obj[key] = internJSON.length
                    ? internJSON.map((it) =>
                          filterJSONKeys(it, filterInternLayer[key])
                      )
                    : filterJSONKeys(internJSON, filterInternLayer[key]);
            }
            return obj;
        }, {});

    return { ...filteredJson };
};

const filteredJson = {};

const {
    curriculo_lattes: { pesquisador: pesquisadores },
} = json;

filteredJson.items = pesquisadores.map((pesquisador) =>
    filterJSON(pesquisador)
);

fs.writeFileSync(
    "../dist/filteredJSON.json",
    JSON.stringify(filteredJson),
    (err) => {
        console.error(err);
    }
);
