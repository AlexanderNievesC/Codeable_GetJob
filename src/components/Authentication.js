import React, { createContext, useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import JobCreating from "../pages/Job/Recruiter/job-creating";
import LoginPersonal from "../pages/Login/LoginPersonal";
import { getUser } from "../services/users-services";

export const AuthContext = createContext();

export default function Authentication() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser()
      .then((u) => {
        setUser(u);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {user ? <Navigate replace to={"/session/job"} /> : <LoginPersonal />}
    </AuthContext.Provider>
  );
}
