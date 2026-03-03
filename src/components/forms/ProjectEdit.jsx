import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getProjectById,
  getPhases,
  saveProjectUpdates,
} from "../../services/projectService";
import "./Form.css"

export const ProjectEdit = () => {
  const navigate = useNavigate();
  const { projectId } = useParams();

  const [project, setProject] = useState({});
  const [userChoices, setUserChoices] = useState({
    id: 0,
    name: "",
    date: "",
    userId: 0,
    phaseId: 0,
    adminId: 0,
  });
  const [phases, setPhases] = useState([]);

  useEffect(() => {
    getProjectById(projectId).then((p) => {
      const obj = p[0];
      setProject(obj);
      setUserChoices({
        id: obj.id,
        name: obj.name,
        date: obj.date,
        userId: obj.userId,
        phaseId: obj.phaseId,
        adminId: obj.adminId,
      });
    });
  }, []);

  useEffect(() => {
    getPhases().then((phases) => {
      setPhases(phases);
    });
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    if (userChoices.phaseId != 0) {
      saveProjectUpdates(userChoices).then(navigate(-1));
    } else {
      alert("Please select status");
    }
  };

  return (
    <>
      <form>
        <h2>Update Project</h2>
        <fieldset><span>Client Name: </span>{project.user?.name}</fieldset>
        <fieldset>
          <span>Status: </span>
          <select
            value={userChoices.phaseId}
            onChange={(e) => {
              const copy = { ...userChoices };
              copy.phaseId = parseInt(e.target.value);
              setUserChoices(copy);
            }}
          >
            {phases.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </fieldset>
        <fieldset><span>Date: </span>{project.date}</fieldset>
        <button onClick={(e) => handleSave(e)}>Save</button>
      </form>
    </>
  );
};
