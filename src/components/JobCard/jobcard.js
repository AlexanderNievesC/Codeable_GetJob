import React from "react";
import styled from "styled-components";
import { ReactComponent as Factory } from "../../assets/icons/manufacture.svg";
import { ReactComponent as Calendar } from "../../assets/icons/calendar.svg";
import { ReactComponent as Money } from "../../assets/icons/money.svg";
import { ReactComponent as Letter } from "../../assets/icons/letter.svg";
import { ReactComponent as PersonCircle } from "../../assets/icons/personcircle.svg";

import COLORS from "../../constant";
import Button from "../Button/button";
import { RxMagnifyingGlass } from "react-icons/rx";
import { RxCrossCircled } from "react-icons/rx";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Jobcard() {
  return (
    <Container>
      <Item simple>
        <Title>The job title</Title>
        <TitleItem simple>
          <SubItem>
            <Factory />
            <div>Manufacturing</div>
          </SubItem>
          <SubItem>
            <Calendar />
            <div>Full time</div>
          </SubItem>
          <SubItem>
            <Money />
            <div>2.0k-2.5k</div>
          </SubItem>
        </TitleItem>
      </Item>

      <TitleItem>
        <Item>
          <Letter />
          <SubItem width>Open on 07/11/20</SubItem>
        </Item>

        <Item>
          <PersonCircle />
          <SubItem width>Total candidates</SubItem>
        </Item>

        <Item>
          <PersonCircle />
          <SubItem colors width>
            Candidates on track
          </SubItem>
        </Item>
      </TitleItem>

      <TitleItem>
        <LupaSection>
          <RxMagnifyingGlass size={20} />
          <div>SHOW</div>
        </LupaSection>
        <Button size="primary">
          <RxCrossCircled size={20} />
          CLOSE
        </Button>
        <MdKeyboardArrowDown />
      </TitleItem>
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
  width: ${(props) => (props.width ? "80px" : "")};
  gap: 5px;
  font-family: "Inter";
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: ${(props) => (props.colors ? `${COLORS.pink[100]}` : "#8e8e8e")};
`;

const LupaSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 112px;
  height: 40px;
  font-family: "Inter";
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  justify-content: center;
  align-items: center;
`;
