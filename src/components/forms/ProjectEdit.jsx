import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProjectById, getPhases } from "../../services/projectService";

export const ProjectEdit = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState({});
  const [userChoices, setUserChoices] = useState({});
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
            {phases.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </fieldset>
        <fieldset>Date: {project.date}</fieldset>
        <button>Save</button>
      </form>
    </>
  );
};
