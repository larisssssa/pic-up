import { useEffect, useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { NavBar } from "../components/nav/NavBar";
import { Dashboard } from "../components/dashboard/Dashboard";
import { ProjectList } from "../components/projects/ProjectList";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localPicUpUser = localStorage.getItem("picup_user");
    const picUpUserObject = JSON.parse(localPicUpUser);
    setCurrentUser(picUpUserObject);
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Outlet />
            </>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="projects">
            <Route index element={<ProjectList />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
