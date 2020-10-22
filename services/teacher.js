module.exports = (app) => {
  const { listOneTeacher } = app.repository.teacherRepository;

  const getOne = async (name) => {
    try {
      const teachersData = await listOneTeacher(name);

      const filterTeachersData = Object.values(teachersData).map((item) => {
        const { relationship, data } = item;
        return {
          relationship: { name: relationship.label, properties: relationship.properties },
          data: { name: data.labels[0], properties: data.properties },
        };
      });

      return { ...filterTeachersData };
    } catch (error) {
      throw error;
    }
  };

  return { getOne };
};
