const fs = require('fs')
const filterInternLayer = require('./constants/filteredKeys.js')
const needToBeAnArray = require('./constants/needToBeArray.js')

const filterJSON = (data) => {
    changeToArray(data)
    return filterJSONKeys(data, Object.keys(filterInternLayer))
}

const changeToArray = (data) => {
    const keys = Object.keys(data)

    keys.map((item) => {
        if (item === 'area_atuacao') {
            if (!data[item].descricao.length) {
                data[item].descricao = [data[item].descricao]
            }
            data[item].descricao = data[item].descricao.map((it) => it._text)
        }
        var internalKeys = Object.keys(data[item])
        internalKeys.map((itInterno) => {
            if (
                needToBeAnArray.includes(itInterno) &&
                !data[item][itInterno].length
            ) {
                data[item][itInterno] = [data[item][itInterno]]
            }
        })
    })
}

const filterJSONKeys = (json, validFields) => {
    const keys = Object.keys(json)

    const filteredJson = keys
        .filter((key) => validFields.includes(key))
        .reduce((obj, key) => {
            obj[key] = json[key]._text ? json[key]._text : json[key]
            if (filterInternLayer[key]) {
                const internJSON = json[key]
                obj[key] = internJSON.length
                    ? internJSON.map((it) =>
                          filterJSONKeys(it, filterInternLayer[key])
                      )
                    : filterJSONKeys(internJSON, filterInternLayer[key])
            }
            return obj
        }, {})

    return { ...filteredJson }
}

const createFilterFile = (teacherJSON) => {
    const json = JSON.parse(teacherJSON)

    const {
        curriculo_lattes: { pesquisador: pesquisadores },
    } = json

    const filteredJson = {}
    filteredJson.items = pesquisadores.map((pesquisador) =>
        filterJSON(pesquisador)
    )

    fs.writeFileSync(
        './src/filteredJSON.json',
        JSON.stringify(filteredJson),
        (err) => {
            console.error(err)
        }
    )
}

module.exports = createFilterFile
