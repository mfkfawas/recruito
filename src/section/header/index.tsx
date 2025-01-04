import Container from "../../layout/Container";
import HeaderLayout from "../../layout/Header";
import HeroSection from "./HeroSection";
import NavBar from "./NavBar";
import VideoImage from "./VideoImage";

export default function Header() {
  return (
    <HeaderLayout>
      <Container>
        <NavBar />
        <HeroSection />
        <VideoImage />
      </Container>
    </HeaderLayout>
  );
}
