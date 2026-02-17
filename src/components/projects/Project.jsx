import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  deleteProject,
  getPhotosByProjectId,
  getProjectById,
} from "../../services/projectService";

export const Project = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const [projectArray, setProjectArray] = useState([]);
  const [project, setProject] = useState({});
  const [projectPhotos, setProjectPhotos] = useState([]);

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

  useEffect(() => {
    getPhotosByProjectId(projectId).then((p) => {
      setProjectPhotos(p);
    });
  }, [projectArray]);

  const handleDelete = () => {
    if (window.confirm("Are you sure you would like to delete this project?")) {
      deleteProject(projectId).then(navigate(-1));
    } else {
      console.log("no");
    }
  };

  return (
    <>
      <section>
        <div>Project # {projectId}</div>
        <div>Client: {project.user?.name}</div>
        <div>Status: {project.phase?.name}</div>
        <div>Session Date: {project.date}</div>
      </section>
      <section>
        {projectPhotos.map((p) => (
          <figure key={p.id}>
            <img src={p.photo?.link} />
            <figcaption>{p.photo?.fileName}</figcaption>
          </figure>
        ))}
      </section>
      <section>
        <button>
          <Link to={`/projects/${projectId}/edit`} key={project.id}>
            Update Project
          </Link>
        </button>
        <button onClick={handleDelete}>Delete Project</button>
      </section>
    </>
  );
};
