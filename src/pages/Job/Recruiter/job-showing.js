import React from "react";
import styled from "styled-components";
import Candidatecard from "../../../components/CandidateCard/CandidateCard";
import Jobcard from "../../../components/JobCard/jobcard";
import { manageJob } from "./job-posting";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function JobShowing() {
  return manageJob(
    <Container>
      <BackSection>
        <AiOutlineArrowLeft height="12px" />
        <div>BACK</div>
      </BackSection>

      <Title>Show Job Posting</Title>
      <Jobcard />

      <Label>FILTER YOUR CANDIDATES</Label>

      <CheckSection>
        <Subtitle>
          <StyledInput type="radio" color="black" />
          All
        </Subtitle>

        <Subtitle>
          <StyledInput type="radio" />
          Waiting
        </Subtitle>
        <Subtitle>
          <StyledInput type="radio" />
          In progress
        </Subtitle>

        <Subtitle>
          <StyledInput type="radio" />
          Finished
        </Subtitle>
      </CheckSection>

      <Title simple>5 candidates found</Title>
      <Candidatecard />
    </Container>
  );
}

const Container = styled.div`
  background-color: #f5f5f6;
  padding: 32px 120px;
  height: 100vh;
`;

const BackSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  gap: 12px;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 1.25px;
`;

const Title = styled.div`
  font-family: "Montserrat";
  font-weight: 400;
  font-size: ${(props) => (props.simple ? "20px" : "34px")};
  letter-spacing: 0.25px;
  padding-bottom: 24px;
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

const CheckSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  padding-bottom: 16px;
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
