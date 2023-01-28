import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import TopMenu from "./components/TopMenu";
import MainPage from "./pages/Intro/MainPage";
import LoginPersonal from "./pages/Authentication/LoginPersonal";
import SignupPersonal from "./pages/Authentication/SignupPersonal";
import SignupInformation from "./pages/Authentication/SignupInformation";
import LoginCompany from "./pages/Authentication/LoginCompany";
import SignupProffesional from "./pages/Authentication/SignupProffesional";
import SignupCompany from "./pages/Authentication/SignupCompany";
import SignupCompanyInfo from "./pages/Authentication/SignupCompanyInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="login/personal" element={<LoginPersonal />} />
        <Route path="login/company" element={<LoginCompany />} />
        <Route path="signup" element={<TopMenu />}>
          <Route path="personal_login" element={<SignupPersonal />} />
          <Route path="personal_info" element={<SignupInformation />} />
          <Route
            path="personal_professional"
            element={<SignupProffesional />}
          />
        </Route>
        <Route path="signup" element={<TopMenu />}>
          <Route path="company_login" element={<SignupCompany />} />
          <Route path="company_info" element={<SignupCompanyInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
