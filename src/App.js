import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import ReactDOM from "react-dom/client";
import TopMenu from "./components/TopMenu";
import LoginPersonal from "./pages/Login/LoginPersonal";
import SignupPersonal from "./pages/Signup/Personal/SignupPersonal";
import SignupInformation from "./pages/Signup/Personal/SignupInformation";
import LoginCompany from "./pages/Login/LoginCompany";
import SignupProffesional from "./pages/Signup/Personal/SignupProffesional";
import SignupCompany from "./pages/Signup/Company/SignupCompany";
import SignupCompanyInfo from "./pages/Signup/Company/SignupCompanyInfo";
import MainPage from "./pages/MainPage";
import JobPosting from "./pages/Job/Recruiter/job-posting";
import JobShowing from "./pages/Job/Recruiter/job-showing";
import JobProfile from "./pages/Job/Recruiter/job-profile";
import JobCreating from "./pages/Job/Recruiter/job-creating";
import JobFind from "./pages/Job/User/job-find";
import Authentication from "./components/Authentication";
import { createContext, useContext, useState } from "react";
import Application from "./pages/Job/User/application";
import Following from "./pages/Job/User/following";
import ProfileUser from "./pages/Job/User/profileuser";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*Main Page */}
        <Route path="/" element={<MainPage />} />
        {/*Login Section */}
        <Route
          path="login/personal"
          element={
            <Authentication>
              <LoginPersonal />
            </Authentication>
          }
        />
        <Route path="login/company" element={<LoginCompany />} />
        {/*Signup Personal */}
        <Route path="signup" element={<TopMenu />}>
          <Route path="personal_login" element={<SignupPersonal />} />
          <Route path="personal_info" element={<SignupInformation />} />
          <Route
            path="personal_professional"
            element={<SignupProffesional />}
          />
        </Route>
        {/*Signup Company */}
        <Route path="signup" element={<TopMenu />}>
          <Route path="company_login" element={<SignupCompany />} />
          <Route path="company_info" element={<SignupCompanyInfo />} />
        </Route>
        {/*Recruiter Zone */}
        <Route path="session/posting" element={<JobPosting />} />
        <Route path="session/showing" element={<JobShowing />} />
        <Route path="session/creating" element={<JobCreating />} />
        <Route path="session/profile" element={<JobProfile />} />

        {/*User Zone */}
        <Route path="session/job" element={<JobFind />} />
        <Route path="session/application" element={<Application />} />
        <Route path="session/following" element={<Following />} />
        <Route path="session/profileuser" element={<ProfileUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
