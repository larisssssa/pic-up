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
        <div>
          <button>
            <Link to={`/projects/new`}>New Project</Link>
          </button>
        </div>
        {allProjects.map((project) => {
          return (
            <section key={project.id}>
              <div>---</div>
              <header>Project: {project.id}</header>
              <div>Client Name: {project.user?.name}</div>
              <div>Session Date: {project.date}</div>
              <div>Status: {project.phase?.name}</div>
              <div>
                <button>
                  <Link to={`/projects/${project.id}`} key={project.id}>
                    Project Details
                  </Link>
                </button>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
};
