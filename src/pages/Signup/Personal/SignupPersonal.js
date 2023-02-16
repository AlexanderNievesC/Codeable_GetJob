import React from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Girl } from "../../../assets/images/discussing.svg";
import styled from "styled-components";
import COLORS from "../../../constant";
import Button from "../../../components/Button/button";
import { IoIosArrowForward } from "react-icons/io";

export default function Signup() {
  let data = [
    {
      id: 1,
      item: "IN PROGRESS",
      itemTitle: "Login Information",
      link: "/signup/personal_login",
    },
    {
      id: 2,
      item: "PENDING INFORMATION",
      itemTitle: "Personal Information",
      link: "/signup/personal_info",
    },
    {
      id: 3,
      item: "PENDING",
      itemTitle: "Professional Information",
      link: "/signup/personal_professional",
    },
  ];

  const Item = () => {
    return data.map((element) => {
      return (
        <StyledLink href={element.link}>
          <MainDiv>
            <Circle>{element.id}</Circle>
            <div>
              <DivItem simple>{element.item}</DivItem>
              <div>{element.itemTitle}</div>
            </div>
          </MainDiv>
        </StyledLink>
      );
    });
  };

  return (
    <StyledDiv>
      <FormDiv>
        <Title>Good Choice</Title>
        <SubTitle>Create a new account as...</SubTitle>
        <Option>
          <LinkMain href="/signup/personal_login" simple>
            PROFESSIONAL
          </LinkMain>
          <LinkMain href="/signup/company_login">RECRUITER</LinkMain>
        </Option>
        <DivItem>
          <Item />
        </DivItem>

        <FormDiv>
          <DivItem simple>EMAIL</DivItem>
          <StyledInput type="input" placeholder="some.user@mail.com" />

          <DivItem simple>PASSWORD</DivItem>
          <StyledInput type="password" placeholder="********" />

          <DivItem simple>PASSWORD CONFIRMATION</DivItem>
          <StyledInput type="text" placeholder="********" />
        </FormDiv>

        <StyledLink href="/signup/personal_info">
          <Button size="primary">
            NEXT <IoIosArrowForward color="white" />
          </Button>
        </StyledLink>
      </FormDiv>
      <Girl />
    </StyledDiv>
  );
}

//Style main function
const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  gap: 149px;
  padding-top: 40px;
`;
const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
`;
const Title = styled.div`
  font-family: "Montserrat";
  font-size: 48px;
  padding-bottom: 16px;
`;
const SubTitle = styled.div`
  font-family: "Montserrat";
  font-size: 20px;
  padding-bottom: 32px;
`;
const Option = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  font-weight: 500px;
  font-size: 14px;
  padding-bottom: 32px;
`;
const LinkMain = styled.a`
  padding-bottom: 8px;
  border-bottom: ${(props) =>
    props.simple ? "solid 2px #F48FB1" : "solid 2px gray"};
  text-decoration: none;
  color: ${(props) => (props.simple ? "black" : "gray")};
`;

//Styled component with data
const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const Circle = styled.button`
  border-radius: 66.6667px;
  border: none;
  color: ${COLORS.white};
  background-color: ${COLORS.pink[100]};
  width: 32px;
  height: 32px;
`;

const DivItem = styled.div`
  display: flex;
  flex-direction: row;
  font-family: "Montserrat";
  font-size: ${(props) => (props.simple ? "10px" : "16px")};
  gap: 16px;
`;

const StyledInput = styled.input`
  border: 1px solid #f48fb1;
  border-radius: 8px;
  width: 360px;
  height: 36px;
  font-family: "Montserrat";
  font-size: 14px;
  color: #8e8e8e;
  padding: 8px;
  letter-spacing: 1px;
  margin-bottom: 16px;
`;

const StyledLink = styled.a`
  text-decoration: none;
  padding-bottom: 32px;
  color: black;
`;
