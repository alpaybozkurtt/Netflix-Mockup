import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components"

const Card = styled.div`
width: 50%;
max-width: 300px;
cursor: pointer;

&:hover {
   color: gray;
}
`

const Avatar = styled.img`
width: 100%;
border-radius: 0.2rem;
`

const Name = styled.h2`

text-align: center;
`

function Profile(props) {
    const {profile, setActiveProfile} = props;

    /*
    {
        id: 7,
        name: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
    }
    */

    const { name, avatar } = profile;

    const history = useHistory();

    const activeProfileHandler = ()=> {
        // set active profile
        setActiveProfile(profile);
        // history push'la
        history.push("/home")
    }

    return (
        <Card onClick={activeProfileHandler}>
            <Avatar src={avatar} />
            <Name>{name}</Name>    
        </Card>
    )
}

export default Profile