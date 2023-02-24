import React from "react";
import { manageJob } from "./job-find";
import styled from "styled-components";
import ApplicationCard from "../../../components/ApplicationCard/applicationCard";

export default function MyApplications() {
  return manageJob(
    <Container>
      <StyledMont>Your applications</StyledMont>
      <br />
      <StyledInter>FILTER YOUR APPLICATIONS</StyledInter>
      <StyledChecked>
        <CheckItem>
          <input type="radio" color="red" />
          <div>All</div>
        </CheckItem>

        <CheckItem>
          <input type="radio" />
          <div>Waiting</div>
        </CheckItem>

        <CheckItem>
          <input type="radio" />
          <div>In progress</div>
        </CheckItem>

        <CheckItem>
          <input type="radio" />
          <div>Finished</div>
        </CheckItem>

        <CheckItem>
          <input type="radio" />
          <div>Declined</div>
        </CheckItem>
      </StyledChecked>
      <br />
      <StyledMont small>4 applications found</StyledMont>
      <br />
      <ApplicationCard />
      <br />
      <ApplicationCard />
    </Container>
  );
}

const Container = styled.div`
  padding: 32px 120px;
  height: 100vh;
  background-color: #f5f5f6;
`;
const StyledMont = styled.div`
  font-family: "Montserrat";
  font-size: ${(props) => (props.small ? "20px" : "34px")};
`;
const StyledInter = styled.div`
  font-family: "Inter";
  font-size: 10px;
`;
const StyledChecked = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;
const CheckItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  font-family: "Inter";
  font-size: 14px;
`;
