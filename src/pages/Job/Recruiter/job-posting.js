import React from "react";
import styled from "styled-components";
import Jobcard from "../../../components/JobCard/jobcard";
import SidebaRecruiter from "../../../components/Sidebar/sidebar-recruiter";
import COLORS from "../../../constant";

export function manageJob(component) {
  return (
    <MainContainer>
      <SidebaRecruiter />
      <div>{component}</div>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

//JobPosting
export default function JobPosting() {
  return manageJob(
    <Container>
      <Title simple>Job Posting</Title>
      <Subtitle simple>FILTER YOUR JOB POSTING</Subtitle>
      <CheckSection>
        <Subtitle>
          <StyledInput type="radio" color="black" />
          All
        </Subtitle>

        <Subtitle>
          <StyledInput type="radio" />
          With candidates on track
        </Subtitle>
        <Subtitle>
          <StyledInput type="radio" />
          Closed
        </Subtitle>
      </CheckSection>

      <Title>4 jobs posting found</Title>
      <Jobcard />
      <Jobcard />
      <Jobcard />
      <Jobcard />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 120px;
  height: 100vh;
  background-color: #f5f5f6;
`;

const CheckSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  padding-bottom: 16px;
`;

const Title = styled.div`
  font-family: "Montserrat";
  font-weight: 400;
  font-size: ${(props) => (props.simple ? "34px" : "20px")};
  line-height: 41px;
  letter-spacing: 0.25px;
  padding-bottom: ${(props) => (props.simple ? "24px" : "8px")};
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
