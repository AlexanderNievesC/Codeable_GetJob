import React from "react";
import styled from "styled-components";
import { AiOutlineLeft } from "react-icons/ai";
import { CiLocationArrow1 } from "react-icons/ci";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { TbBuildingFactory } from "react-icons/tb";

import { Link } from "react-router-dom";
import COLORS from "../../constant";
import Button from "../Button/button";
import { manageJob } from "../../pages/Job/User/job-find";

export default function JobApplication() {
  return (
    <Container>
      <Link
        to="/session/job"
        style={{ textDecoration: "none", color: "#616161" }}
      >
        <Arrow>
          <AiOutlineLeft />
          <div>BACK</div>
        </Arrow>
      </Link>

      <Header>
        <Header simple>
          <Symbol />
          <div>
            <Stylediv>The company name</Stylediv>
            <Stylediv simple>FOLLOWING</Stylediv>
          </div>
        </Header>
        <Button size="primary">
          <CiLocationArrow1 />
          Apply now
        </Button>
      </Header>

      <Title>The job title</Title>
      <Title simple>
        <AiOutlineClockCircle />
        POSTED 2 DAYS AGO
      </Title>

      <Card>
        <Carditem>
          <Stylediv simple>Category</Stylediv>
          <Stylediv>
            <TbBuildingFactory height="20px" />
            Manufacturing
          </Stylediv>
        </Carditem>

        <Carditem>
          <Stylediv simple>Type</Stylediv>
          <Stylediv>
            <AiOutlineCalendar height="20px" />
            Full Time
          </Stylediv>
        </Carditem>

        <Carditem>
          <Stylediv simple>Salary</Stylediv>
          <Stylediv>
            <RiMoneyDollarCircleLine height="20px" />
            2,000 -2,500
          </Stylediv>
        </Carditem>
      </Card>

      <Stylediv pink>Complete your application</Stylediv>
      <Title simple left>
        Send your cv updated
      </Title>

      <CheckSection>
        <Subtitle>
          <StyledInput type="radio" color="black" />
          Use current CV
        </Subtitle>

        <Subtitle>
          <StyledInput type="radio" />
          Upload new CV
        </Subtitle>
      </CheckSection>

      <SectionButton>
        <Button size="primary">Choose a file</Button>
        <DivItem>No file chosen</DivItem>
      </SectionButton>
      <DivItem simple>Only PDF. Max size 5MB</DivItem>
      <br />
      <Title simple left>
        PROFESSIONAL EXPERIENCE (TAKE FROM YOUR PROFILE)
      </Title>
      <TextArea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat quam ut tempor maximus. Sed neque arcu, rhoncus elementum sodales a, tristique sed quam. Aliquam nibh velit, pharetra ac faucibus in, ornare eu tortor. Vestibulum lacus ligula, elementum sit amet purus ut, sagittis molestie ex. In hendrerit orci tellus. Integer pharetra porttitor nulla, nec fringilla dolor ultricies et. Integer accumsan feugiat urna, eu hendrerit dui varius sit amet. Mauris eget tristique turpis. Curabitur eget hendrerit turpis. Etiam rutrum dolor eu posuere vehicula." />
      <br />
      <Title simple left>
        WHY ARE YOU INTERESTED IN WORKING AT THE COMPANY NAME SA
      </Title>
      <TextArea
        simple
        placeholder="Mention things about The Company Name SA that excite you. Why would you be a good candidate?"
      />
      <div style={{ fontFamily: "Inter", fontSize: "12px", color: "#8E8E8E" }}>
        Between 50 and 1000 characters
      </div>
      <br />
      <Button size="primary">
        <CiLocationArrow1 />
        Send
      </Button>
    </Container>
  );
}

const Container = styled.div`
  padding: 32px 120px;
`;
const Arrow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  margin-bottom: 18px;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: ${(props) => (props.simple ? "18px" : "")};
`;

const Symbol = styled.div`
  width: 74.67px;
  height: 74.67px;
  box-shadow: 0 0 8px 2px #808080;
`;
const Stylediv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: "Montserrat";
  font-weight: 400;
  font-size: ${(props) => (props.simple ? "14px" : "24px")};
  color: ${(props) => (props.pink ? COLORS.pink[150] : "black")};
`;
const Card = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  margin-bottom: 54px;
`;
const Carditem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 32px 16px;
  gap: 4px;
  width: 281px;
  height: 77px;
  border: 1px solid #bf5f82;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.left ? "left" : "center")};
  gap: 10px;
  font-family: "Montserrat";
  font-weight: 400;
  font-size: ${(props) => (props.simple ? "10px" : "48px")};
  margin-bottom: 10px;
`;
const Subtitle = styled.div`
  font-family: "Inter";
  font-weight: 400;
  font-size: ${(props) => (props.simple ? "10px" : "14px")};
  line-height: 12px;
  letter-spacing: 1.5px;
`;
const StyledInput = styled.input`
  border-radius: 100px;
`;
const CheckSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  padding-bottom: 16px;
`;
const SectionButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
const DivItem = styled.div`
  display: flex;
  flex-direction: row;
  font-family: "Montserrat";
  font-size: ${(props) => (props.simple ? "10px" : "16px")};
  gap: 16px;
  max-width: 380px;
`;
const TextArea = styled.textarea`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px;
  gap: 8px;
  width: 760px;
  height: ${(props) => (props.simple ? "76px" : "256px")};
  border: 1px solid #f48fb1;
  border-radius: 8px;
`;
