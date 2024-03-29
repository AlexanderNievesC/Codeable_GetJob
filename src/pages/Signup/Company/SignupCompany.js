import React from "react";
import Button from "../../../components/Button/button";
import TopMenu from "../../../components/TopMenu";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Girl } from "../../../assets/images/discussing.svg";
import styled from "styled-components";
import COLORS from "../../../constant";
import { IoIosArrowForward } from "react-icons/io";

export default function SignupCompany() {
  let data = [
    {
      id: 1,
      item: "IN PROGRESS",
      itemTitle: "Login Information",
      link: "/signup/company_login",
    },
    {
      id: 2,
      item: "PENDING",
      itemTitle: "Company Information",
      link: "/signup/company_info",
      color: "#E1E2E1",
      text: "#E1E2E1",
    },
  ];

  const Item = () => {
    return data.map((element) => {
      return (
        <StyledLink href={element.link}>
          <MainDiv>
            <Circle
              style={{
                backgroundColor: `${element.color}`,
              }}
            >
              {element.id}
            </Circle>
            <TextArea style={{ color: `${element.text}` }}>
              <DivItem simple>{element.item}</DivItem>
              <div>{element.itemTitle}</div>
            </TextArea>
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
          <LinkMain href="/signup/personal_login">PROFESSIONAL</LinkMain>
          <LinkMain href="/signup/company_login" simple>
            RECRUITER
          </LinkMain>
        </Option>
        <DivItem>
          <Item />
        </DivItem>

        <FormDiv>
          <DivItem simple>COMPANY NAME</DivItem>
          <StyledInput type="text" placeholder="My Company S.A." />

          <DivItem simple>EMAIL</DivItem>
          <StyledInput type="text" placeholder="some.company@mail.com" />

          <DivItem simple>PASSWORD</DivItem>
          <StyledInput type="password" placeholder="*******" />

          <DivItem simple>PASSWORD CONFIRMATION</DivItem>
          <StyledInput type="password" placeholder="*******" />
        </FormDiv>

        <StyledLink href="/signup/company_info">
          <Button size="primary">
            NEXT
            <IoIosArrowForward />
          </Button>
        </StyledLink>
      </FormDiv>
      <ImageSection>
        <Girl />
      </ImageSection>
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
  padding-bottom: 10px;
`;
const Title = styled.div`
  font-family: "Montserrat";
  font-size: 48px;
  padding-bottom: 16px;
`;
const SubTitle = styled.div`
  font-family: Montserrat;
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

const StyledLink = styled.a`
  text-decoration: none;
  padding-bottom: 32px;
  color: black;
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

const TextArea = styled.div`
  width: 120px;
`;

const ImageSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;
