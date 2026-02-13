import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getPhases,
  getPhotosByProjectId,
  getProjectById,
} from "../../services/projectService";

export const Project = () => {
  const { projectId } = useParams();

  const [projectArray, setProjectArray] = useState([]);
  const [project, setProject] = useState({});
  const [projectPhotos, setProjectPhotos] = useState([]);
  const [statusList, setStatusList] = useState([]);

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

  useEffect(() => {
    getPhases().then((p) => {
      setStatusList(p);
    });
  }, []);

  return (
    <>
      <section>
        <div>Project # {projectId}</div>
        <div>Client: {project.user?.name}</div>
        <fieldset>
          <div>
            <label>Status: </label>
            <select selected={project.phase?.name}>
              {statusList.map((p) => (
                <option key={p.id} value={p.name} selected={project.phaseId == p.id ? true : false}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
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
        <button>Save Changes</button>
        <button>Delete Project</button>
      </section>
    </>
  );
};
