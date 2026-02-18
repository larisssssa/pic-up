import { Link } from "react-router-dom";

export const Welcome = () => {
  return (
    <>
      <div>
        <h1>Welcome to PicUp!</h1>
        <h3>A Business Management Tool for Photographers</h3>
        <button>
          <Link to={`/login`}>Login</Link>
        </button>
      </div>
    </>
  );
};
