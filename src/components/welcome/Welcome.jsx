import { Link } from "react-router-dom";

export const Welcome = () => {
  return (
    <>
      <main>
        <header>
          <div>
            <h3>Welcome to</h3>
          </div>
          <div>
            <h1>PicUp</h1>
          </div>
        </header>
        <h4>A Business Management Tool for Photographers</h4>
        <Link to={`/login`}>Login</Link>
      </main>
    </>
  );
};
