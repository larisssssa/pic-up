import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="nav">
      <ul className="nav-bar">
        <li className="nav-home">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/projects">Projects</Link>
        </li>
        {localStorage.getItem("picup_user") ? (
          <li className="nav-logout">
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
    </div>
  );
};
