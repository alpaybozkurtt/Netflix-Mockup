import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: black;
`;

const Logo = styled.img`
  height: 40px;
`;

const SignInButton = styled.a`
  color: white;
  text-decoration: none;
  font-weight: bold;
`;

export default function LoginHeader() {
  return (
    <HeaderContainer>
      <Logo src="/path-to-netflix-logo.png" alt="Netflix" />
      <SignInButton href="/login">Oturum Aç</SignInButton>
    </HeaderContainer>
  );
}
