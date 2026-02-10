import { useEffect, useState } from "react";
import { getProjects } from "../../services/projectService";

export const ProjectList = () => {
  const [allProjects, setAllProjects] = useState([]);

  useEffect(() => {
    getProjects().then((data) => setAllProjects(data));
  }, []);

  return (
    <>
      <div>
        {allProjects.map((project) => {
          return (
            <section key={project.id}>
              <header>Project: {project.id}</header>
              <div>Client Name: {project.user?.name}</div>
              <div>Session Date: {project.date}</div>
              <div>Status: {project.phase?.name}</div>
            </section>
          )
        })}
      </div>
    </>
  );
};
