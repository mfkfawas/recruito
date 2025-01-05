import Container from "../../layout/Container";
import Section from "../../layout/Section";
import Tablet from "../../ui/Tablet";
import Heading from "../features/Heading";

export default function Testimonials() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col items-center gap-8 lg:gap-16">
          <Tablet>Testimonials</Tablet>
          <Heading className="text-center max-w-[80rem] text-[4.4rem] leading-[5.3rem]">
            Don’t just take our word for it—see what our clients say about
            Recruito AI.
          </Heading>

          {/* swiper */}
        </div>
      </Container>
    </Section>
  );
}
