import React from "react";
import { manageJob } from "./job-find";
import styled from "styled-components";
import JobItem from "../../../components/JobItem/JobItem";

export default function Following() {
  return manageJob(
    <Container>
      <Title>Following</Title>
      <Title small>You are following 2 jobs</Title>
      <JobItem />
      <br />
      <Title small>You are following 1 company</Title>
    </Container>
  );
}

const Container = styled.div`
  padding: 32px 120px;
  height: 100vh;
  width: 1200px;
  background-color: #f5f5f6;
`;
const Title = styled.div`
  font-family: "Montserrat";
  font-size: ${(props) => (props.small ? "20px" : "34px")};
`;
