const getProfList = require('./puppeteerProfList')
const convertXML = require('./convert')
const createFilterFile = require('./filterJSON')

const getConvertFilterProfList = () => {
    getProfList()

    const teachersJSON = convertXML()

    createFilterFile(teachersJSON)
}

getConvertFilterProfList()
