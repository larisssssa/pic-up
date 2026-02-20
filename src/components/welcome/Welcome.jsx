import { Link } from "react-router-dom";
import "./Welcome.css";

export const Welcome = () => {
  return (
    <>
      <div className="welcome-main">
        <div className="welcome-header">
          <h3>Welcome to</h3>
          <h1>PicUp</h1>
          <p>A Business Management Tool for Photographers</p>
        </div>
        <div className="welcome-login">
          <Link to={`/login`}>Login</Link>
        </div>
      </div>
    </>
  );
};
