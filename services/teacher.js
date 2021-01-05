module.exports = (app) => {
    const {
        listOneTeacher,
        listRelatedTeachers,
        listSearchArea,
    } = app.repository.teacherRepository

    const formatArea = (area) => area.replace('Grande área:', '')
        .replace('Área:', '')
        .replace('Especialidade:', '')
        .replace('Subárea:', '')
        .replace('.', '')
        .replace('Outros', '')
        .split('/')
        .map((it) => it.trim())
    

    const getOne = async (name) => {
        try {
            const teachersData = await listOneTeacher(name)

            const filterTeachersData = teachersData.reduce(
                (acc, currentItem) => {
                    const {
                        relationship: {
                            label: relationshipName,
                            properties: relationshipProp,
                        },
                        data: { labels, properties },
                    } = currentItem

                    const currentData = acc[labels[0]]
                    const oldValue = currentData || {
                        relationshipName,
                        items: [],
                    }


                    const newObject = {
                        [labels[0]]: labels[0] === "AreaAtuacao" ? {
                            ...oldValue,
                            items: [
                                ...oldValue.items,
                                ...formatArea(properties.nome),
                            ],
                        } : {
                            ...oldValue,
                            items: [
                                ...oldValue.items,
                                { relationshipProp, properties },
                            ],
                        },
                    }

                    const areas = newObject.AreaAtuacao?.items
                    if(areas) newObject.AreaAtuacao.items = areas.filter((item, index) => areas.indexOf(item) === index); 

                    return { ...acc, ...newObject }
                },
                []
            )

            return { ...filterTeachersData }
        } catch (error) {
            throw error
        }
    }

    const getRelated = async (search) => {
        try {
            const result = await listRelatedTeachers(search)

            const reduceResponse = result.reduce((acc, item) => {
                const {professor: {properties: { id, nome, foto, email }}} = item
                const nameExist = acc.find(i => i.nome === item.professor.properties.nome )
                
                if(nameExist) return acc

                return [...acc, { id, nome, foto, email }]
            }, [])

            return reduceResponse
        } catch (err) {
            throw err
        }
    }

    const getAllSearchArea = async () => {
        try {
            const result = await listSearchArea()

            const data = result.reduce((allAreas, currentArea) => {
                const {
                    area: {
                        properties: { nome },
                    },
                } = currentArea

                const cleanName = formatArea(nome)

                const newArray = [...allAreas, ...cleanName]

                return newArray
                    .filter(
                        (current, index) =>
                            current && newArray.indexOf(current) === index
                    )
                    .sort((a, b) => {
                        if (a.length > b.length) return 1
                        if (a.length < b.length) return -1
                        return 0
                    })
            }, [])

            return data
        } catch (err) {
            throw err
        }
    }

    return { getOne, getRelated, getAllSearchArea }
}
