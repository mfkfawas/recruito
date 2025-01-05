import Container from "../../layout/Container";
import Section from "../../layout/Section";
import WrappedAccordion from "../../ui/Accordion";
import Tablet from "../../ui/Tablet";
import { data } from "./data";

export default function FAQs() {
  return (
    <Section className="py-8">
      <Container>
        <div className="flex flex-col items-center gap-8 lg:gap-16">
          <Tablet>FAQs</Tablet>
          <WrappedAccordion data={data} />
        </div>
      </Container>
    </Section>
  );
}
