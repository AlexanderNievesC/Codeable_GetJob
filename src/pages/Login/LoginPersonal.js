import React from "react";
import TopMenu from "../../components/TopMenu";
import { ReactComponent as Guy } from "../../assets/images/guyGreet.svg";
import styled from "styled-components";
import Button from "../../components/Button/button";
import COLORS from "../../constant";
import login from "../../services/api-fetch";

export default function LoginPersonal() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.elements);

    // const { email, password } = event.target.elements;
    // const credentials = {
    //   email: email.value,
    //   password: password.value,
    // };

    // login(credentials)
    //   .then((user) => console.log(user))
    //   .catch((error) => console.log(error));
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
          </StyledForm>

          <Button type="submit" color="secondary" size="primary">
            Log in
          </Button>
        </div>

        <Guy />
      </StyledDiv>
    </div>
  );
}

const Title = styled.div`
  font-family: "Dancing Script", cursive;
  font-size: ${(props) => (props.main ? "48px" : "20px")};
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
  font-family: "Dancing Script", cursive;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 15px;
`;

const StyledInput = styled.input`
  width: 356px;
  height: 36px;
  border-radius: 8px;
  border-color: 2px solid red;
`;