import { useEffect, useState } from "react";
import { getInProgressProjects } from "../../services/projectService";

export const Dashboard = () => {
  const [dashSessions, setDashSessions] = useState([]);

  useEffect(() => {
    getInProgressProjects().then((array) => setDashSessions(array));
  }, []);

  return (
    <>
      <div>
        <div>
          <h2>Sessions in Progress</h2>
          {dashSessions.map((session) => (
            <section key={session.id}>
              <header>{session.name}</header>
              <div>{session.date}</div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
};
