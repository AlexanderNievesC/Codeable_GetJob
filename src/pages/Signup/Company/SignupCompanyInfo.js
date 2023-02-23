import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Girl } from "../../../assets/images/discussing.svg";
import styled from "styled-components";
import COLORS from "../../../constant";
import Button from "../../../components/Button/button";
import { IoIosArrowForward } from "react-icons/io";

export default function SignupCompanyInfo() {
  let data = [
    {
      id: 1,
      item: "DONE!",
      itemTitle: "Login Information",
      link: "/signup/company_login",
      color: "#616161",
    },
    {
      id: 2,
      item: "IN PROGRESS",
      itemTitle: "Personal Information",
      link: "/signup/company_info",
    },
  ];

  const Item = () => {
    return data.map((element) => {
      return (
        <StyledLink href={element.link}>
          <MainDiv>
            <Circle style={{ background: `${element.color}` }}>
              {element.id}
            </Circle>
            <TextArea>
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
          <LinkMain simple href="/signup/company_login">
            RECRUITER
          </LinkMain>
        </Option>
        <DivItem>
          <Item />
        </DivItem>
        <DivItem simple>
          YOU CAN COMPLETE THIS INFORMATION LATER BUT WE RECCOMEND YOU TO DO IT
          NOW
        </DivItem>
        <br />
        <FormDiv>
          <DivItem simple>COMPANY WEBSITE</DivItem>
          <StyledInput
            simple
            type="text"
            placeholder="https://www.mycompany.sa"
          />

          <DivItem simple>ABOUT THE COMPANY</DivItem>
          <StyledArea
            type="text"
            placeholder="My Company SA has the vision to change thw way how..."
          />
          <Comment>Between 100 and 2000 characters</Comment>
        </FormDiv>

        <DivItem simple>UPDATE THE COMPANY LOGO</DivItem>
        <SectionButton>
          <Button size="primary">Choose a file</Button>
          <DivItem>No file chosen</DivItem>
        </SectionButton>
        <DivItem simple>Only PDF. Max size 5MB</DivItem>
        <br />
        <Button size="primary">
          FINISH <IoIosArrowForward />
        </Button>
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
  max-width: 380px;
`;

const StyledLink = styled.a`
  display: flex;
  gap: 20px;
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

const StyledArea = styled.textarea`
  border: 1px solid #f48fb1;
  border-radius: 8px;
  width: 600px;
  height: 76px;
  font-family: "Montserrat";
  font-size: 14px;
  color: #8e8e8e;
  padding: 8px;
  letter-spacing: 1px;
`;

const TextArea = styled.div`
  max-width: 120px;
`;

const Comment = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: #8e8e8e;
  margin-bottom: 8px;
`;

const SectionButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const ImageSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;
