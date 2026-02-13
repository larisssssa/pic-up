import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProjectById } from "../../services/projectService";

export const Project = () => {
  const { projectId } = useParams();

  const [projectArray, setProjectArray] = useState([]);
  const [project, setProject] = useState({});

  useEffect(() => {
    getProjectById(projectId).then((p) => {
      setProjectArray(p);
    });
  }, []);

  useEffect(() => {
    if (projectArray.length == 1) {
      setProject(projectArray[0]);
    }
  }, [projectArray]);

  return (
    <>
      <section>
        <div>Project # {projectId}</div>
        <div>Client: {project.user?.name}</div>
        <div>Status: {project.phase?.name}</div>
        <div>Session Date: {project.date}</div>
      </section>
      <section>
        <div>image</div>
      </section>
      <section>
        <button>Save Changes</button>
        <button>Delete Project</button>
      </section>
    </>
  );
};
