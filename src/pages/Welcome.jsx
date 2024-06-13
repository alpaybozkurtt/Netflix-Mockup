import styled from "styled-components";
import Profiles from "../components/Profile/Profiles";

const Button = styled.div`
color: gray;
padding: .5rem 1.5rem;
border: 1px solid gray;
display: inline-block;
`;

export default function Welcome(props) {
    const { setActiveProfile } = props;
    return ( 
    <>
        <div>Who is watching?</div>
        <Profiles setActiveProfile={setActiveProfile}/>
        <Button />
    </>
    );
}