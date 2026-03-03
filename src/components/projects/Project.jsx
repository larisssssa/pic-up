import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  deletePhoto,
  deleteProject,
  getProjectById,
  getProjectPhotosByProjectId,
} from "../../services/projectService";
import "./Project.css"

export const Project = ({ currentUser }) => {
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
    getProjectPhotosByProjectId(projectId).then((p) => {
      setProjectPhotos(p);
    });
  }, [projectArray]);

  const handleDelete = () => {
    if (window.confirm("Are you sure you would like to delete this project?")) {
      deleteProject(projectId);

      projectPhotos.map((pp) => {
        deletePhoto(pp.photo?.id);
      });

      navigate("/projects");
    } else {
      console.log("no");
    }
  };

  return (
    <>
      <section className="project-info">
        <div><span>Project # {projectId}</span></div>
        <div><span>Client: </span>{project.user?.name}</div>
        <div><span>Status: </span>{project.phase?.name}</div>
        <div><span>Session Date:</span> {project.date}</div>
      </section>
      <section className="project-images">
        {projectPhotos.map((p) => (
          <figure key={p.id}>
            <img src={p.photo?.link} />
            <figcaption>{p.photo?.fileName}</figcaption>
          </figure>
        ))}
      </section>
      {project.adminId === currentUser.id && (
        <section className="project-actions">
          <a href={`/projects/${projectId}/edit`}>Edit Project</a>
          <button onClick={handleDelete}>Delete Project</button>
        </section>
      )}
    </>
  );
};
