import React from "react";
import styled from "styled-components";
import { AiOutlineLeft } from "react-icons/ai";
import { CiLocationArrow1 } from "react-icons/ci";
import { AiOutlineClockCircle } from "react-icons/ai";
import Button from "../Button/button";
import { ReactComponent as Location } from "../../assets/icons/location.svg";
import { ReactComponent as Manufacture } from "../../assets/icons/manufacture.svg";
import { AiOutlineCalendar } from "react-icons/ai";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { TbBuildingFactory } from "react-icons/tb";

export default function JobDetail() {
  return (
    <Container>
      <Arrow>
        <AiOutlineLeft />
        <div>BACK</div>
      </Arrow>

      <Header>
        <Header simple>
          <Symbol />
          <div>
            <Stylediv>The company name</Stylediv>
            <Stylediv simple>
              <Location />
              Following
            </Stylediv>
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
          <Stylediv simple>Category</Stylediv>
          <Stylediv>
            <RiMoneyDollarCircleLine height="20px" />
            Manufacturing
          </Stylediv>
        </Carditem>
      </Card>

      <Stylediv>About the company name SA</Stylediv>
      <Stylediv>About the job position</Stylediv>
      <Stylediv>Mandatory Requirements</Stylediv>
      <Stylediv>Optional Requirements</Stylediv>
      <Button size="primary">
        <CiLocationArrow1 />
        Apply now
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
`;
const Card = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  margin-bu
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
  justify-content: center;
  gap: 10px;
  font-family: "Montserrat";
  font-weight: 400;
  font-size: ${(props) => (props.simple ? "10px" : "48px")};
  text-align: center;
  margin-bottom: 10px;
`;
