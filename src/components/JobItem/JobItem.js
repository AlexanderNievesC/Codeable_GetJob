import React from "react";
import styled from "styled-components";
import { ReactComponent as Manufacture } from "../../assets/icons/manufacture.svg";
import { ReactComponent as Calendar } from "../../assets/icons/calendar.svg";
import { ReactComponent as Money } from "../../assets/icons/money.svg";
import { MdMyLocation } from "react-icons/md";

export default function JobItem() {
  return (
    <Container>
      <Subcontainer>
        <ImageArea />
        <TextArea>
          <div
            style={{
              fontFamily: "Inter",
              fontSize: "12px",
              color: "#8E8E8E",
            }}
          >
            <Manufacture /> Manufactoring
          </div>
          <div style={{ fontFamily: "Montserrat", fontSize: "20px" }}>
            The job title
          </div>
          <div style={{ fontFamily: "Montserrat", fontSize: "14px" }}>
            The Company Name
          </div>
          <Subcontainer
            style={{
              display: "flex",
              justifySelf: "center",
              alignSelf: "center",
              fontFamily: "Inter",
              color: "#8E8E8E",
              fontSize: "12px",
            }}
          >
            <div>
              <Calendar />
              Full time
            </div>
            <div>
              <Money />
              2.0k - 2.5k
            </div>
          </Subcontainer>
        </TextArea>
      </Subcontainer>

      <Subcontainer
        style={{
          fontFamily: "Inter",
          fontSize: "14px",
          color: "#616161",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: "5px" }}>
          <MdMyLocation />
          FOLLOW
        </div>
        <StyledButton>SEE MORE</StyledButton>
      </Subcontainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 290px;
  height: 170px;
  box-shadow: 0 0 8px 2px #888;
  border-radius: 8px;
  padding: 16px;
  gap: 16px;
`;
const Subcontainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;
const ImageArea = styled.div`
  height: 75px;
  width: 75px;
`;
const TextArea = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  background-color: white;
  width: 112px;
  height: 40px;
  border: 1px solid #f48fb1;
  border-radius: 16px;
`;
