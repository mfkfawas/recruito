import { lazy, Suspense } from "react";
import Container from "../../layout/Container";
import HeaderLayout from "../../layout/Header";
import HeroSection from "./HeroSection";
import NavBar from "./NavBar";

const VideoPlaySvg = lazy(() => import("../../assets/svgs/VideoPlay"));
import Spinner from "../../ui/Spinner";

export default function Header() {
  return (
    <HeaderLayout>
      <Container>
        <NavBar />
        <HeroSection />

        <Suspense fallback={<Spinner />}>
          {/* <div className="absolute grid place-items-center w-full left-1/2 -translate-x-1/2 bottom-[-100rem]"> */}
          <div className="">
            <VideoPlaySvg />
          </div>
        </Suspense>
      </Container>
    </HeaderLayout>
  );
}
