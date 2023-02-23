import React, { useContext, useState } from "react";
import TopMenu from "../../components/TopMenu";
import { ReactComponent as Guy } from "../../assets/images/guyGreet.svg";
import styled from "styled-components";
import Button from "../../components/Button/button";
import { login } from "../../services/session-services";
import { AuthContext } from "../../components/Authentication";

export default function LoginPersonal() {
  const { user, setUser } = useContext(AuthContext);

  function handleSubmit(event) {
    event.preventDefault();
    const { email, password } = event.target.elements;
    const credentials = {
      email: email.value,
      password: password.value,
    };

    login(credentials).then((u) => setUser(u));
  }

  return (
    <div>
      <TopMenu />
      <StyledDiv>
        <div>
          <Title main>Welcome Back</Title>
          <Title>Login to your acount as...</Title>

          <Options>
            <Link href="/login/personal" simple>
              PROFESSIONAL
            </Link>
            <Link href="/login/company">RECRUITER</Link>
          </Options>

          <StyledForm onSubmit={handleSubmit}>
            <label htmlFor="email">EMAIL</label>
            <StyledInput id="email" name="email" type="email" />

            <label htmlFor="password">PASSWORD</label>
            <StyledInput id="password" name="password" type="password" />

            <Button type="submit" color="secondary" size="primary">
              LOGIN
            </Button>
          </StyledForm>
        </div>

        <Guy />
      </StyledDiv>
    </div>
  );
}

const Title = styled.div`
  font-family: "Montserrat";
  font-size: ${(props) => (props.main ? "48px" : "20px")};
  font-weight: 900px;
  padding-bottom: 16px;
`;

const Options = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  font-weight: 500px;
  padding: 10px 0px 10px 0px;
`;

const Link = styled.a`
  padding-bottom: 8px;
  border-bottom: ${(props) =>
    props.simple ? "solid 2px #F48FB1" : "solid 2px gray"};
  text-decoration: none;
  color: ${(props) => (props.simple ? "black" : "gray")};
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 83px;
  align-content: center;
  padding: 100px;
  font-family: "Montserrat";
  background-color: #f5f5f6;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  padding-bottom: 16px;
`;

const StyledInput = styled.input`
  width: 356px;
  height: 36px;
  border-radius: 8px;
  border-color: 2px solid red;
`;
