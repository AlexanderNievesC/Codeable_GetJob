import TopMenu from "../../components/TopMenu";
import styled from "styled-components";
import Button from "../../components/Button/button";
import { ReactComponent as Group } from "../../assets/images/group.svg";
import { ReactComponent as Magnoscope } from "../../assets/images/magnoscope.svg";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import ruby from "../../assets/images/ruby.png";
import javier from "../../assets/images/javier.png";
import francisca from "../../assets/images/francisca.png";
import raul from "../../assets/images/raul.png";
import COLORS from "../../constant";
import Footer from "../../components/Footer/footer";

const data = [
  { icon: ruby, name: "Ruby Ramirez" },
  { icon: javier, name: "Javier Escribano" },
  { icon: francisca, name: "Francisca Reategui" },
  { icon: raul, name: "Raul Rubina" },
];

function MainPage() {
  return (
    <div>
      <TopMenu />

      <Section>
        <Title simple>The place where you get that job</Title>
        <Title>
          With our Machine Learning algorithm you will get that job in no time.
          We promise you! Just give us the money and we will take care of it.
        </Title>
        <Link href="/signup/personal_login">
          <Button size="secondary" color="">
            CREATE AN ACCOUNT NOW
          </Button>
        </Link>
        <Group />
      </Section>

      <SectionJob>
        <Description>
          <h3>Find your next job</h3>
          <div>
            Our Machine learning algorithm is so good that it’s even illegal in
            some countries. Join us to use our barelly legal algorithm that is
            actually a group of interns that work on our basement.
          </div>
          <div>
            We have a job for you, no matter your background or previous
            experience. Is sending random memes through chat your only skill?
            That’s ok, we got you, our Rock Star Meme Curator role is here for
            you.
          </div>
        </Description>
        <AreaMagno>
          <Magnoscope />
        </AreaMagno>
      </SectionJob>

      <SectionCollab>
        <TitleCol>Meet the team</TitleCol>
        <DataCollab>
          {data.map((Element) => {
            return (
              <DataContact>
                <img
                  src={Element.icon}
                  width="180px"
                  height="180px"
                  alt="img"
                />
                <div>{Element.name}</div>
                <DataCollab>
                  <a href="/">
                    <AiFillGithub />
                  </a>
                  <a href="/">
                    <AiOutlineLinkedin />
                  </a>
                </DataCollab>
              </DataContact>
            );
          })}
        </DataCollab>
      </SectionCollab>

      <Footer />
    </div>
  );
}

const Section = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  align-items: center;
  gap: 32px;
  padding: 32px 0px 64px;
`;
const Title = styled.div`
  width: ${(props) => (props.simple ? "504px" : "720px")};
  height: ${(props) => (props.simple ? "148px" : "87px")};
  font-size: ${(props) => (props.simple ? "61px" : "24px")};
  text-align: center;
  gap: 32px;
  line-height: ${(props) => (props.simple ? "74.36px" : "29px")};
  font-family: "Dancing Script", cursive;
`;
const SectionJob = styled.div`
  display: flex;
  flex-direction: row;
`;
const Description = styled.div`
  height: 472px;
  width: 880px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 64px 120px;
  background-color: ${COLORS.pink[150]};
  color: ${COLORS.white};
  font-family: "Dancing Script", cursive;
  font-size: ${(props) => (props.title ? "48px" : "22px")};
`;
const AreaMagno = styled.div`
  width: 560px;
  height: 472px;
  padding: 115px 113px 115px 113px;
`;
const SectionCollab = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  padding: 64px 192px;
  align-items: center;
  align-content: center;
`;
const TitleCol = styled.div`
  font-family: "Dancing Script", cursive;
  font-size: 48px;
  color: ${COLORS.pink[150]};
`;
const DataCollab = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  justify-content: center;
`;
const DataContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-family: "Dancing Script", cursive;
  font-size: 24px;
`;

const Link = styled.a`
  text-decoration: none;
`;

export default MainPage;
