import styled from "styled-components";
import video from "../../assets/movies/fellowship.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faPlay } from "@fortawesome/free-solid-svg-icons";
import Header from "../Header/Header";

const Player = styled.video`
  position: absolute;
  z-index: 1; /* Video fragmanını öne getir */
  top: -100px;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  max-width: 40%;
  z-index: 2; /* Detayları öne getir */
`;

const PromotedVideoSection = styled.section`
  position: relative; /* Ana bölümün pozisyonunu belirle */
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  padding-left: 2rem;
`;

const Title = styled.h1`
  margin-bottom: 0;
  color: white;
`;

const Description = styled.p`
  font-size: 1.5rem;
  width: 100%;
  color: #f0f0f0;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1.5rem;
  border-radius: 0.2rem;
`;

const WhiteButton = styled(Button)`
  background: white;
  color: black;
`;

const GrayButton = styled(Button)`
  background: gray;
`;

const DarkArea = styled.div`
  height: 10vh;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.8169642857142857) 30%,
    rgba(0, 0, 0, 0.500437675070028) 71%,
    rgba(255, 255, 255, 0) 100%
  );
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 0; /* Arka planı geriye gönder */
`;

export default function Hero() {
  return (
    <PromotedVideoSection>
      <Header />
      <Player autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your browser does not support HTML5 video.
      </Player>
      <Details>
        <Title>Lord Of The Rings</Title>
        <Description>
          Little Hobbits goes on a dangerous mission to destroy the One Ring.
          During their journey to the Mount of Doom, they meet good fellows
          from Middle Earth and form a fellowship.
        </Description>
        <ButtonContainer>
          <WhiteButton>
            <FontAwesomeIcon icon={faPlay} /> Play
          </WhiteButton>
          <GrayButton>
            <FontAwesomeIcon icon={faCircleInfo} /> More Info
          </GrayButton>
        </ButtonContainer>
      </Details>
      <DarkArea></DarkArea>
    </PromotedVideoSection>
  );
}
