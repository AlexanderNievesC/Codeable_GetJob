import React from "react";
import styled from "styled-components";
import { ReactComponent as MyLogo } from "../../assets/images/logo.svg";
import { ReactComponent as Back } from "../../assets/icons/back.svg";
import { ReactComponent as AddJob } from "../../assets/icons/add.svg";
import { ReactComponent as Person } from "../../assets/icons/person.svg";
import { ReactComponent as Logout } from "../../assets/icons/logout.svg";
import { AiFillGithub } from "react-icons/ai";
import { DiRuby, DiReact } from "react-icons/di";
import COLORS from "../../constant";
import { Link } from "react-router-dom";

export default function SidebaRecruiter() {
  return (
    <Container>
      <div>
        <Link to="/">
          <MyLogo />
        </Link>

        <Link
          to="/session/posting"
          style={{ textDecoration: "none", color: "black" }}
        >
          <SideMenuElem>
            <Back />
            <div>Job Postings</div>
          </SideMenuElem>
        </Link>

        <Link
          to="/session/creating"
          style={{ textDecoration: "none", color: "black" }}
        >
          <SideMenuElem>
            <AddJob />
            <div>Create New Job</div>
          </SideMenuElem>
        </Link>

        <Link
          to="/session/profile"
          style={{ textDecoration: "none", color: "black" }}
        >
          <SideMenuElem>
            <Person />
            <div>Profile</div>
          </SideMenuElem>
        </Link>

        <SideMenuElem>
          <Logout />
          <div>Log out</div>
        </SideMenuElem>
      </div>

      <TextFooter>
        <div>© 202X - Get That Job</div>
        <br />
        <div>Codeable - Cohort X Final Project</div>
        <br />
        <div>Build with ❤ by:</div>
        <div>
          <AiFillGithub padding="100px" />
          Ruby Ramirez
        </div>
        <div>
          {" "}
          <AiFillGithub />
          Javier Escribano
        </div>
        <div>
          <AiFillGithub />
          Raul Rubina
        </div>
        <div>
          <AiFillGithub />
          Francisca Reategui
        </div>
        <br />
        <div>Source code</div>
        <div>
          <DiRuby />
          Ruby on Rails REST API
        </div>
        <div>
          <DiReact />
          React Responsive SPA
        </div>
      </TextFooter>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  width: 240px;
  padding-top: 32px;
  background-color: ${COLORS.gray[50]};
`;

const SideMenuElem = styled.div`
  font-family: "Inter";
  display: flex;
  flex-direction: row;
  text-align: center;
  height: 48px;
  width: 240px;
  gap: 10px;
  padding: 13px 0px 15px 18px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.5px;
  &:hover {
    background-color: ${COLORS.white};
  }
`;

const TextFooter = styled.div`
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.4000000059604645px;
  padding-left: 16px;
`;
