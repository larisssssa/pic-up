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
          <input type="text" id="name" />
        </fieldset>
        <fieldset>
          <div>Client Name:</div>
          <select>
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
          <input type="date" />
        </fieldset>
        <button>Save</button>
      </form>
    </>
  );
};
