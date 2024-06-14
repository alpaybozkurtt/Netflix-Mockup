import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: black;
  color: gray;
  padding: 2rem;
  text-align: left;
`;

const Phone = styled.p`
  margin-bottom: 1rem;
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Link = styled.a`
  color: gray;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default function LoginFooter() {
  return (
    <FooterContainer>
      <Phone>Sorularınız mı var? 0850-390-7444 numaralı telefonu arayın</Phone>
      <Links>
        <Link href="#">Yardım Merkezi</Link>
        <Link href="#">Kullanım Koşulları</Link>
        <Link href="#">Gizlilik</Link>
        <Link href="#">Çerez Tercihleri</Link>
        <Link href="#">Kurumsal Bilgiler</Link>
      </Links>
    </FooterContainer>
  );
}
