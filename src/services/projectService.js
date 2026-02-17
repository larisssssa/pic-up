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

export const getProjectPhotosByProjectId = (id) => {
  return fetch(
    `http://localhost:8088/projectPhoto?projectId=${id}&_expand=photo`,
  ).then((res) => res.json());
};

export const getPhases = () => {
  return fetch(`http://localhost:8088/phases`).then((res) => res.json());
};

export const saveProjectUpdates = (projectObj) => {
  return fetch(`http://localhost:8088/projects/${projectObj.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(projectObj),
  });
};

export const createNewProject = (project) => {
  return fetch(`http://localhost:8088/projects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(project),
  }).then((res) => {
    res.json();
  });
};

export const deleteProject = (projectId) => {
  return fetch(`http://localhost:8088/projects/${projectId}`, {
    method: "DELETE",
  });
};

export const deletePhoto = (photoId) => {
  return fetch(`http://localhost:8088/photos/${photoId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
