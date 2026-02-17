import { useEffect, useState } from "react";
import { getUsers } from "../../services/userService";

export const ProjectNew = () => {
  const [users, setUsers] = useState([]);
  const [userChoices, setUserChoices] = useState({
    id: 0,
    name: "",
    date: "",
    userId: 0,
    phaseId: 0,
  });

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  return (
    <>
      <form>
        <h2>New Project</h2>
        <fieldset>
          <div>Project Name: </div>
          <input
            type="text"
            id="name"
            value={userChoices.name}
            onChange={(e) => {
              const copy = { ...userChoices };
              copy.name = e.target.value;
              setUserChoices(copy);
            }}
          />
        </fieldset>
        <fieldset>
          <div>Client Name:</div>
          <select
            onChange={(e) => {
              const copy = { ...userChoices };
              copy.userId = parseInt(e.target.value);
              setUserChoices(copy);
            }}
          >
            <option key="0" value="0">
              - Select Client -
            </option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </fieldset>
        <fieldset>
          <div>Session Date:</div>
          <input
            type="date"
            onChange={(e) => {
              const copy = { ...userChoices };
              copy.date = e.target.value;
              setUserChoices(copy);
            }}
          />
        </fieldset>
        <button>Save</button>
      </form>
    </>
  );
};
