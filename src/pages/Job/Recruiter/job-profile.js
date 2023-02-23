import React from "react";
import COLORS from "../../../constant";
import styled from "styled-components";
import { manageJob } from "./job-posting";
import { RiUploadLine } from "react-icons/ri";

export default function JobProfile() {
  return manageJob(
    <Container>
      <Title>Profile</Title>
      <DivRow>
        <StyledImg />
        <DivColumn>
          <Label>Company Logo</Label>
          <ButtonChoose>
            <RiUploadLine />
            Choose a file
          </ButtonChoose>
          <Label>PNG,JPEG,IMG</Label>
        </DivColumn>
        <Label>NO FILE CHOSEN</Label>
      </DivRow>

      <div>
        <DivColumn>
          <Label>COMPANY EMAIL</Label>
          <Input simple type="text" placeholder="web.works@mail.com" />
          <Label>COMPANY NAME</Label>
          <Input simple type="text" placeholder="The Web Works" />
          <Label>COMPANY WEBSITE</Label>
          <Input simple type="text" placeholder="www.webworks.com" />

          <Label>ABOUT THE COMPANY</Label>
          <TextArea
            large
            type="text"
            placeholder="List each mandatory requirement in a new line"
          />
        </DivColumn>
      </div>

      <ButtonFinal>UPDATE PROFILE</ButtonFinal>
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
const DivColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 4px;
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
  width: 300px;
  height: 36px;
  border: 1px solid ${COLORS.pink[100]};
  border-radius: 8px;
  margin-bottom: 8px;
  font-family: "Inter";
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  align-items: start;
`;
const TextArea = styled.textarea`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  gap: 8px;
  width: 760px;
  height: 156px;
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
  width: 165px;
  height: 40px;
  background: ${COLORS.pink[100]};
  border-radius: 16px;
  border: none;
  color: ${COLORS.white};
  margin-top: 16px;
`;
const DivRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const StyledImg = styled.img`
  display: flex;
  align-self: center;
  height: 74.66666412353516px;
  width: 74.66666412353516px;
  border-radius: 8px;
  box-shadow: 0 0 8px 2px #808080;
  align-items: center;
`;

const ButtonChoose = styled.button`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;
  width: 134px;
  height: 36px;
  background: #f48fb1;
  border-radius: 8px;
  border: none;
  color: ${COLORS.white};
  font-size: 14px;
`;
