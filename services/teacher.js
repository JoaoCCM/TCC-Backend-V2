module.exports = (app) => {
  const { listOneTeacher, listRelatedTeachers } = app.repository.teacherRepository;

  const getOne = async (name) => {
    try {
      const teachersData = await listOneTeacher(name);

      const filterTeachersData = teachersData.reduce((acc, currentItem) => {
        const {
          relationship: { label: relationshipName, properties: relationshipProp },
          data: { labels, properties },
        } = currentItem;

        const currentData = acc[labels[0]];
        const oldValue = currentData || { relationshipName, items: [] };

        const newObject = {
          [labels[0]]: {
            ...oldValue,
            items: [...oldValue.items, { relationshipProp, properties }],
          },
        };

        return { ...acc, ...newObject };
      }, []);

      return { ...filterTeachersData };
    } catch (error) {
      throw error;
    }
  };

  const getRelated = async (search) => {
    try {
      const result = await listRelatedTeachers(search);
      const mapped_data = result.map((m) => m.nome);
      const data = mapped_data.filter(function (item, pos) {
        return mapped_data.indexOf(item) == pos;
      });
      return data;
    } catch (err) {
      throw err;
    }
  };

  return { getOne, getRelated };
};
