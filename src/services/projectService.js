export const getProjects = () => {
  return fetch(`http://localhost:8088/projects`).then((res) => res.json());
};

export const getInProgressProjects = () => {
  return fetch(`http://localhost:8088/projects?statusId=2`).then((res) =>
    res.json(),
  );
};
