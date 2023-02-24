import React from "react";
import styled from "styled-components";
import { ReactComponent as Manufacture } from "../../assets/icons/manufacture.svg";
import { ReactComponent as Calendar } from "../../assets/icons/calendar.svg";
import { ReactComponent as Money } from "../../assets/icons/money.svg";
import { AiOutlineClockCircle } from "react-icons/ai";
import { ReactComponent as Letter } from "../../assets/icons/letter.svg";
import { AiOutlinePauseCircle } from "react-icons/ai";

export default function ApplicationCard() {
  return (
    <Container>
      <Description>
        <div style={{ width: "58px", height: "58px" }} />
        <div>
          <Montserrat>The job title</Montserrat>
          <Montserrat small>The company name SA</Montserrat>
        </div>
      </Description>

      <Details>
        <Description>
          <div>
            <Manufacture /> Manufacturing
          </div>
          <div>
            <Calendar />
            Full time
          </div>
        </Description>

        <Description>
          <div>
            <Money />
            2.0k - 2.5k
          </div>
          <div>
            <AiOutlineClockCircle /> Posted 2 days ago
          </div>
        </Description>
      </Details>

      <Status>
        <div style={{ width: "80px" }}>
          <Letter />
          <div>Sent 1 min. ago</div>
        </div>
        <div style={{ width: "80px" }}>
          <AiOutlinePauseCircle />
          <div>Waiting for review</div>
        </div>
      </Status>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 121px;
  width: 944px;
  height: 96px;
  border: 1px solid #e1e2e1;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 16px;
`;
const Description = styled.div`
  display: flex;
  flex-direction: row;
  gap: 18px;
  align-items: center;
`;
const Montserrat = styled.div`
  font-family: "Montserrat";
  font-size: ${(props) => (props.small ? "14px" : "20px")};
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #8e8e8e;
  font-family: "Inter";
  font-size: 12px;
`;
const Status = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  font-family: "Inter";
  font-size: 12px;
  text-align: center;
`;
