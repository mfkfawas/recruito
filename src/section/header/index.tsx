import Container from "../../layout/Container";
import HeaderLayout from "../../layout/Header";
import OgilvySvg from "../../assets/svgs/Ogilvy";

export default function Header() {
  return (
    <HeaderLayout>
      <Container>
        <OgilvySvg />
      </Container>
    </HeaderLayout>
  );
}
