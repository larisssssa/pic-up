import { useEffect, useState } from "react";
import { getProjects } from "../../services/projectService";
import { Link } from "react-router-dom";

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
              <div><button><Link to="/{project.id}">Project Details</Link></button></div>
            </section>
          )
        })}
      </div>
    </>
  );
};
