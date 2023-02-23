import React from "react";
import styled from "styled-components";
import Button from "../Button/button";
import { ReactComponent as MyLogo } from "../../assets/images/logo.svg";
import Login from "../../assets/icons/login";
import Signup from "../../assets/icons/signup";
import { Outlet } from "react-router-dom";

export default function TopMenu() {
  return (
    <Container>
      <header>
        <MainFrame>
          <Link href="/">
            {" "}
            <MyLogo />
          </Link>
          <FrameButton>
            <Link href="/signup/personal_login">
              <Button color="primary" size="primary">
                <Signup />
                SIGN UP
              </Button>
            </Link>

            <Link href="/login/personal">
              <Button color="primary" size="primary">
                <Login />
                LOGIN
              </Button>
            </Link>
          </FrameButton>
        </MainFrame>
      </header>

      <main>
        <Outlet />
      </main>
    </Container>
  );
}

const Container = styled.div`
  z-index: 0;
  position: relative;
`;
const MainFrame = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1440px;
  height: 64px;
  padding: 12px 120px;
  justify-content: space-between;
  gap: 30px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
`;
const FrameButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

const Link = styled.a`
  text-decoration: none;
`;
