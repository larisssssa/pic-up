import { useEffect, useState } from "react";
import { getInProgressProjects } from "../../services/projectService";

export const Dashboard = () => {
  const [dashSessions, setDashSessions] = useState([]);

  useEffect(() => {
    getInProgressProjects().then((array) => (setDashSessions(array)))
  }, []);

  const handleDate = (session) => {
    const dateObj = new Date(session.date * 1)
    const utcString = dateObj.toUTCString()
    return <>{utcString}</>

  }

  return (
    <>
      <div>
        <div>
          <h2>Sessions in Progress</h2>
          {dashSessions.map((session) => (
            <section key={session.id}>
              <header>{session.name}</header>
              <div>{handleDate(session)}</div>
              
            </section>
          ))}
        </div>
      </div>
    </>
  );
};
