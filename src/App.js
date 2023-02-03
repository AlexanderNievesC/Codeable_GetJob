import { BrowserRouter, Routes, Route } from "react-router-dom";
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
