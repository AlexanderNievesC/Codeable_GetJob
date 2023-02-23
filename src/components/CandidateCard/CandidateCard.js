import React from "react";
import styled from "styled-components";
import COLORS from "../../constant";
import { FiMail } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { AiOutlinePauseCircle } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Candidatecard() {
  return (
    <Container>
      <Item simple>
        <Title>Guybrush Threepwood</Title>
        <TitleItem simple>
          <SubItem>
            <div>Mighty Pirate</div>
          </SubItem>
        </TitleItem>
      </Item>

      <Item simple>
        <SubItem>
          <FiMail />
          guy.brush@mail.com
        </SubItem>
        <SubItem>
          <BsTelephone />
          +333555777
        </SubItem>
      </Item>

      <TitleItem>
        <Item>
          <FiMail />
          <SubItem width>Sent 1 day ago</SubItem>
        </Item>

        <Item>
          <AiOutlinePauseCircle />
          <SubItem width>Waiting for review</SubItem>
        </Item>
      </TitleItem>

      <ButtonArea>
        <ButtonStyled>MARK AS STARTED</ButtonStyled>
        <MdKeyboardArrowDown />
      </ButtonArea>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  height: 80px;
  width: 944px;
  box-shadow: 0 0 8px 2px #808080;
  border-radius: 8px;
  padding: 16px;
  background-color: ${COLORS.white};
  margin-bottom: 16px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => (props.simple ? "left" : "center")};
`;

const Title = styled.div`
  font-family: "Montserrat";
  font-weight: 900;
  font-size: 20px;
  letter-spacing: 0.15px;
  padding-bottom: 4px;
`;

const TitleItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${(props) => (props.simple ? "10px" : "4px")};
  align-items: center;
`;

const SubItem = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  width: ${(props) => (props.width ? "80px" : "")};
  gap: 5px;
  font-family: "Inter";
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: ${(props) => (props.colors ? `${COLORS.pink[100]}` : "#8e8e8e")};
`;

const ButtonStyled = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  width: 180px;
  height: 40px;
  border: 1px solid #f48fb1;
  border-radius: 16px;
  font-size: 14px;
  background-color: ${COLORS.white};
  justify-content: center;
`;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;
