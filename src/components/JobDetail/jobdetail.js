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
import COLORS from "../../constant";
import { Link } from "react-router-dom";

export default function JobDetail() {
  return (
    <Container>
      <Link
        to="/session/job"
        style={{ textDecoration: "none", color: "#616161" }}
      >
        <Arrow>
          <AiOutlineLeft />
          <div>BACK</div>
        </Arrow>
      </Link>

      <Header>
        <Header simple>
          <Symbol />
          <div>
            <Stylediv>The company name</Stylediv>
            <Stylediv simple>
              <Location />
              FOLLOWING
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
          <Stylediv simple>Salary</Stylediv>
          <Stylediv>
            <RiMoneyDollarCircleLine height="20px" />
            2,000 -2,500
          </Stylediv>
        </Carditem>
      </Card>

      <Stylediv pink>About the company name SA</Stylediv>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        porta nunc viverra velit tincidunt, non vehicula augue vehicula. Donec
        viverra luctus nisl, sed vehicula ligula. Vivamus maximus metus a magna
        fermentum ullamcorper. Phasellus ultrices vestibulum ligula ut
        pellentesque. Quisque quis congue quam. Nunc porttitor risus lorem, in
        blandit augue iaculis vitae. Cras sit amet fringilla neque. Fusce ac
        elit ut quam ultrices bibendum. Curabitur vitae dignissim quam.
        Suspendisse aliquet massa id orci volutpat ullamcorper. Nunc at ante
        sem. Etiam elementum, mi eget aliquam lobortis, elit libero tempus ex,
        vel pretium nisi risus ac augue.
      </div>
      <br />
      <Stylediv pink>About the job position</Stylediv>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis diam
        fringilla, luctus lectus dictum, volutpat lacus. Vivamus lacinia felis
        ut mauris lacinia elementum. Sed faucibus dapibus egestas. Etiam dolor
        neque, posuere at purus cursus, molestie eleifend lacus. Aenean eu diam
        eu enim commodo accumsan ut sit amet odio. Nam maximus varius leo, et
        porttitor ante sodales ut. Pellentesque euismod commodo nunc ut
        tincidunt. Sed fringilla nunc leo, a euismod ipsum aliquet placerat.
        Integer suscipit semper mi, sit amet mollis augue mollis in. Proin
        vestibulum accumsan elit, id pellentesque diam fermentum eget. Aliquam
        mattis quis quam ut faucibus. Duis finibus nulla nec enim eleifend
        dapibus.
      </div>
      <br />
      <Stylediv pink>Mandatory Requirements</Stylediv>
      <div>
        - Lorem ipsum dolor sit amet, consectetur adipiscing elit. - Aenean
        aliquam turpis eget egestas porta. - Quisque tristique nunc ut sem
        pretium bibendum. - Phasellus sit amet turpis laoreet, mattis elit ut,
        luctus ligula. - Nullam blandit arcu eget justo hendrerit finibus.
      </div>
      <br />
      <Stylediv pink>Optional Requirements</Stylediv>
      <div>
        - Lorem ipsum dolor sit amet, consectetur adipiscing elit. - Maecenas
        vel metus imperdiet, malesuada dolor a, pulvinar tellus.
      </div>
      <br />
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
  color: ${(props) => (props.pink ? COLORS.pink[150] : "black")};
`;
const Card = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  margin-bottom: 54px;
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
