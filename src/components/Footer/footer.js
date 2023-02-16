import styled from "styled-components";
import { DiRuby, DiReact } from "react-icons/di";

function Footer() {
  return (
    <DivStyled>
      <div>© 2023 - Get That Job</div>
      <GridStyled>
        <div>Source Code</div>
        <Stylediv>
          <div>
            {" "}
            <DiRuby /> Ruby on Rails REST API
          </div>
          <div>
            {" "}
            <DiReact /> React Responsive SPA
          </div>
        </Stylediv>
      </GridStyled>
      <div>Codeable - Cohort X Final Project</div>
    </DivStyled>
  );
}

const DivStyled = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  width: 1200px;
  height: 72px;
  text-align: center;
  align-items: center;
  border-top: solid 1px red;
  padding: 16px 31px 16px 31px;
  gap: 175px;
  font-size: 14px;
  font-family: "Montserrat";
  justify-content: center;
`;
const GridStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Stylediv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export default Footer;
