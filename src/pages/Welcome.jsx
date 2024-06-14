import styled from "styled-components";
import Profiles from "../components/Profile/Profiles";

const Container = styled.div`
  text-align: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: black;
  color: white;
`;

const Button = styled.div`
color: gray;
padding: .5rem 1.5rem;
border: 1px solid gray;
display: inline-block;
`;

export default function Welcome(props) {
    const { setActiveProfile } = props;
    return ( 
    <Container>
        <div>Who is watching?</div>
        <Profiles setActiveProfile={setActiveProfile} />
        <br />
        <Button />
    </Container>
    );
}