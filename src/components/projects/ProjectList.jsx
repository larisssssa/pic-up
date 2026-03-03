import { useEffect, useState } from "react";
import { getProjects } from "../../services/projectService";
import "./ProjectList.css"


export const ProjectList = () => {
  const [allProjects, setAllProjects] = useState([]);

  useEffect(() => {
    getProjects().then((data) => setAllProjects(data));
  }, []);

  return (
    <>
      <div>
        <div className="list-actions">
          <a href={`/projects/new`}>New Project</a>
        </div>
        {allProjects.map((project) => {
          return (
            <section className="list-item" key={project.id}>
              <div>---</div>
              <header>Project: {project.id}</header>
              <div><span>Client Name:</span> {project.user?.name}</div>
              <div><span>Session Date:</span> {project.date}</div>
              <div><span>Status:</span> {project.phase?.name}</div>
              <div className="project-actions">
                <a href={`/projects/${project.id}`}>Project Details</a>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
};
