import React from "react";
import { manageJob } from "./job-posting";
import styled from "styled-components";
import COLORS from "../../../constant";

export default function JobCreating() {
  return manageJob(
    <Container>
      <Title>Create new job posting</Title>
      <div>
        <Subtitle>Main Information</Subtitle>
        <Form>
          <Label>JOB TITLE</Label>
          <Input type="text" placeholder="Software Engineer" />
          <Label>JOB CATEGORY</Label>
          <Input type="text" placeholder="Select or create a category" />
          <Label>TYPE</Label>
          <Input type="text" placeholder="Select a type" />
          <Label>SALARY RANGE</Label>
          <SectionForm>
            <Input simple type="text" placeholder="min" />
            <Label>-</Label>
            <Input simple type="text" placeholder="max" />
          </SectionForm>
        </Form>
      </div>
      <Subtitle>Additional Information</Subtitle>
      <Form>
        <Label>ABOUT THE JOB POSITION</Label>
        <TextArea
          large
          type="text"
          placeholder="Describe the main functions and characteristics of your job position"
        />
        <Label>MANDATORY REQUIREMENTS</Label>
        <TextArea
          large
          type="text"
          placeholder="List each mandatory requirement in a new line"
        />
        <Label>OPTIONAL REQUIREMENTS</Label>
        <TextArea
          large
          type="text"
          placeholder="List each optional requirement in a new line"
        />
      </Form>

      <ButtonFinal>POST THIS JOB</ButtonFinal>
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
  font-weight: 400;
  font-size: 34px;
  letter-spacing: 0.25px;
  padding-bottom: 24px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
`;

const Subtitle = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
`;

const Label = styled.div`
  display: flex;
  font-family: "Inter";
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 1.5px;
  padding-bottom: 4px;
  align-items: center;
`;

const Input = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: start;
  padding: 8px;
  gap: 8px;
  width: ${(props) => (props.simple ? "102px" : "300px")};
  height: "36px";
  border: 1px solid ${COLORS.pink[100]};
  border-radius: 8px;
  margin-bottom: 8px;
  font-family: "Inter";
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  align-items: start;
`;

const SectionForm = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const TextArea = styled.textarea`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  gap: 8px;
  width: 760px;
  max-height: 76px;
  border: 1px solid ${COLORS.pink[100]};
  border-radius: 8px;
  margin-bottom: 8px;
  font-family: "Inter";
  font-weight: 400;
  font-size: 14px;
`;

const ButtonFinal = styled.button`
  display: flex;
  flex-direction: row;
  padding: 8px 16px;
  width: 153px;
  height: 40px;
  background: ${COLORS.pink[100]};
  border-radius: 16px;
  border: none;
  color: ${COLORS.white};
  margin-top: 16px;
`;
