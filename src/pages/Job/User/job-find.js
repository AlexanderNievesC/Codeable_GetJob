import React from "react";
import SidebarUser from "../../../components/SidebarUser/sideuser";
import styled from "styled-components";
import JobItem from "../../../components/JobItem/JobItem";
import { IoIosArrowForward } from "react-icons/io";
import JobDetail from "../../../components/JobDetail/jobdetail";

export function manageJob(component) {
  return (
    <MainContainer>
      <SidebarUser />
      <div>{component}</div>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function JobFind() {
  return manageJob(
    <Container>
      <Title>Find that job</Title>
      <Label>SEARCH BY JOB TITLE OR COMPANY NAME</Label>
      <MainInput type="text" placeholder="manufacturing,sales,swim" />
      <br />
      <Form>
        <div>
          <Label>CATEGORY</Label>
          <SecondaryInput text="text" placeholder="Select a category" />
        </div>
        <div>
          <Label>TYPE</Label>
          <SecondaryInput text="text" placeholder="Select a type" />
        </div>
        <div>
          <Label>SALARY RANGE</Label>
          <Form>
            <SecondaryInput simple text="text" placeholder="min" />
            <div>-</div>
            <SecondaryInput simple text="text" placeholder="max" />
          </Form>
        </div>
      </Form>
      <br />
      <Title simple>12 jobs for you</Title>
      <JobItem />
      <JobDetail />
    </Container>
  );
}

const Container = styled.div`
  padding: 32px 120px;
`;

const Title = styled.div`
  font-family: "Montserrat";
  font-weight: 400;
  font-size: ${(props) => (props.simple ? "20px" : "34px")};
  letter-spacing: 0.25px;
  margin-bottom: 16px;
`;

const Label = styled.div`
  font-family: "Inter";
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;
  color: #616161;
`;

const MainInput = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  gap: 8px;
  width: 419.93px;
  height: 36px;
  border: 1px solid #f48fb1;
  border-radius: 8px;
  font-family: "Inter";
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: #8e8e8e;
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const SecondaryInput = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  gap: 8px;
  width: ${(props) => (props.simple ? "102px" : "280px")};
  height: 36px;
  border: 1px solid #f48fb1;
  border-radius: 8px;
`;
