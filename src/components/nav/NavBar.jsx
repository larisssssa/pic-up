import { Link, useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        {localStorage.getItem("picup_user") ? (
          <li>
            <Link
              to=""
              onClick={() => {
                localStorage.removeItem("picup_user");
                navigate("/", { replace: true });
              }}
            >
              Logout
            </Link>
          </li>
        ) : (
          ""
        )}
      </ul>
    </>
  );
};
