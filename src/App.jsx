import { Route, Routes } from "react-router-dom";
import { Welcome } from "./components/welcome/Welcome";
import { Login } from "./components/auth/Login";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={
            <Authorized>
              <ApplicationViews />
            </Authorized>
          }
        />
      </Routes>
    </>
  );
};
