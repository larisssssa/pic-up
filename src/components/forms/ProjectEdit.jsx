import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getProjectById,
  getPhases,
  saveProjectUpdates,
} from "../../services/projectService";

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
        <fieldset>Client Name: {project.user?.name}</fieldset>
        <fieldset>
          Status:
          <select
            value={userChoices.phase?.id}
            onChange={(e) => {
              const copy = { ...userChoices };
              copy.phaseId = parseInt(e.target.value);
              setUserChoices(copy);
            }}
          >
            <option key="0" value="0">
              - select status -
            </option>
            {phases.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </fieldset>
        <fieldset>Date: {project.date}</fieldset>
        <button onClick={(e) => handleSave(e)}>Save</button>
      </form>
    </>
  );
};
