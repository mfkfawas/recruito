import Container from "../../layout/Container";
import Section from "../../layout/Section";
import gsk from "../../assets/imgs/gsk.png";
import Ogilvy from "../../assets/svgs/Ogilvy";
import Intys from "../../assets/svgs/Intys";
import LinkedIn from "../../assets/svgs/LinkedIn";

export default function Partners() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col justify-center items-center gap:2 lg:gap-8 mt-0 xl:mt-[20rem]">
          <p className="text-2xl text-[var(--color-text-light)]">
            Trusted by the world leading organisations
          </p>
          <div className="flex items-center justify-between w-full">
            <img src={gsk} alt="gsk" className="h-[3.2rem]" />
            <Ogilvy />
            <Intys />
            <LinkedIn />
            <img src={gsk} alt="gsk" className="h-[3.2rem]" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
