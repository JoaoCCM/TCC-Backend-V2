module.exports = (app) => {
  const { listOneTeacher } = app.repository.teacherRepository;

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

  return { getOne };
};
