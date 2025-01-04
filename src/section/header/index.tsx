import Container from "../../layout/Container";
import HeaderLayout from "../../layout/Header";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <HeaderLayout>
      <Container>
        <NavBar />
      </Container>
    </HeaderLayout>
  );
}
