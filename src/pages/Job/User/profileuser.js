import React from "react";
import { manageJob } from "./job-find";
import styled from "styled-components";
import Button from "../../../components/Button/button";
import { IoIosArrowForward } from "react-icons/io";

export default function ProfileUser() {
  return manageJob(
    <Container>
      <Title>Profile</Title>
      <Title small>Personal Information</Title>
      <form>
        <Label>EMAIL</Label>
        <Input type="text" placeholder="ramon.valdes@vecindad.com" />
        <Label>NAME</Label>
        <Input type="text" placeholder="Ramón Valdés" />
        <Label>PHONE</Label>
        <Input type="text" placeholder="+524831212891" />
        <Comment />
        <Label>BIRTHDATE</Label>
        <Input type="date" placeholder="07/02/1971" />
        <Label>Linkedin url</Label>
        <Input type="text" placeholder="https://www.linkedin.com/in/donramon" />
        <br />
        <Title small>Professional information</Title>
        <Label>
          Changes made here will be reflected in your future applications
        </Label>
        <br />
        <Label>TITLE</Label>
        <Input type="text" placeholder="Professional Multiservice" />
        <Label>PROFFESIONAL EXPERIENCE</Label>
        <TextArea
          type="text"
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat quam ut tempor maximus. Sed neque arcu, rhoncus elementum sodales a, tristique sed quam. Aliquam nibh velit, pharetra ac faucibus in, ornare eu tortor. Vestibulum lacus ligula, elementum sit amet purus ut, sagittis molestie ex. In hendrerit orci tellus. Integer pharetra porttitor nulla, nec fringilla dolor ultricies et. Integer accumsan feugiat urna, eu hendrerit dui varius sit amet. Mauris eget tristique turpis. Curabitur eget hendrerit turpis. Etiam rutrum dolor eu posuere vehicula."
        />
        <Label>EDUCATION</Label>
        <TextArea
          small
          type="text"
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <br />
        <DivItem simple>UPDATE YOUR CV</DivItem>
        <SectionButton>
          <Button size="primary">Choose a file</Button>
          <DivItem>ramon_cv.pdf</DivItem>
        </SectionButton>
        <DivItem simple>Only PDF. Max size 5MB</DivItem>
        <br />
        <Button size="primary">SAVE </Button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 120px;
  height: 100%;
  width: 1200px;
  background-color: #f5f5f6;
`;
const Title = styled.div`
  font-family: "Montserrat";
  font-size: ${(props) => (props.small ? "24px" : "34px")};
`;
const Label = styled.div`
  font-family: "Inter";
  font-size: 10px;
`;
const Input = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  gap: 8px;
  width: 380px;
  height: 36px;
  border: 1px solid #f48fb1;
  border-radius: 8px;
  font-size: "14px";
`;
const Comment = styled.div`
  font-family: "Inter";
  font-size: 12px;
  color: #8e8e8e;
`;
const TextArea = styled.textarea`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px;
  gap: 8px;
  width: 760px;
  height: ${(props) => (props.small ? "116px" : "256px")};
  border: 1px solid #f48fb1;
  border-radius: 8px;
`;
const DivItem = styled.div`
  display: flex;
  flex-direction: row;
  font-family: "Montserrat";
  font-size: ${(props) => (props.simple ? "10px" : "16px")};
  gap: 16px;
  max-width: 380px;
`;
const SectionButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
