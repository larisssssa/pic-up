import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProjectById, getPhases } from "../../services/projectService";

export const ProjectEdit = () => {
  const { id } = useParams();
  const [userChoices, setUserChoices] = useState({
    id: 0,
    name: "",
    date: "",
    userId: 0,
    phaseId: 0,
  });
  const [phases, setPhases] = useState([]);

  useEffect(() => {
    getProjectById(id).then((p) => {
      setUserChoices({
        id: p.id,
        name: p.name,
        date: p.date,
        userId: p.userId,
        phaseId: p.phaseId,
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
        <h2>Update Project</h2> <fieldset>Client Name:</fieldset>
        <fieldset>
          Status:
          <select
            value={userChoices.phase?.id}
            onChange={(e) => {
              const copy = { ...userChoices };
              copy.phaseId = parseInt(e.target.value);
              copy;
            }}
          >
            {phases.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </fieldset>
        <fieldset>Date:</fieldset>
      </form>
    </>
  );
};
