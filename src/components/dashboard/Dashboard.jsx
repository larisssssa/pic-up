import { useEffect, useState } from "react";
import { getInProgressProjects } from "../../services/projectService";

export const Dashboard = ({ currentUser }) => {
  const [dashSessions, setDashSessions] = useState([]);
  const [filteredSessions, setFilteredSessions] = useState([]);

  useEffect(() => {
    getInProgressProjects().then((array) => setDashSessions(array));
  }, []);

  useEffect(() => {
    const adminFilter = dashSessions.filter(
      (session) => session.adminId === currentUser.id,
    );
    setFilteredSessions(adminFilter);
  }, [dashSessions]);

  return (
    <>
      <div>
        <div>
          <h2>Sessions in Progress</h2>
          {filteredSessions.map((session) => (
            <section key={session.id}>
              <div>---</div>
              <header>{session.name}</header>
              <div>{session.date}</div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
};
