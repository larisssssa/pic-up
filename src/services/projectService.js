export const getProjects = () => {
  return fetch(
    `http://localhost:8088/projects?_expand=user&_expand=phase`,
  ).then((res) => res.json());
};

export const getInProgressProjects = () => {
  return fetch(`http://localhost:8088/projects?statusId=2`).then((res) =>
    res.json(),
  );
};

export const getProjectById = (id) => {
  return fetch(
    `http://localhost:8088/projects?id=${id}&_expand=user&_expand=phase`,
  ).then((res) => res.json());
};

export const getPhotosByProjectId = (id) => {
  return fetch(
    `http://localhost:8088/projectPhoto?projectId=${id}&_expand=photo`,
  ).then((res) => res.json());
};

export const getPhases = () => {
  return fetch(`http://localhost:8088/phases`).then((res) => res.json());
};
