import Container from "../../layout/Container";
import Section from "../../layout/Section";
import Tablet from "../../ui/Tablet";
import Heading from "./Heading";

import DetailCard from "./DetailCard";
import ImgCard from "./ImgCard";
import { data } from "./data";

export default function Features() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col items-center gap-8 lg:gap-16 text-center lg:text-left">
          <Tablet>Features</Tablet>

          <Heading className="max-w-[75rem] text-[3.6rem] lg:text-[4.4rem] leading-[4rem] lg:leading-[5.5rem] text-center">
            Streamline your recruitment with our advanced features
          </Heading>

          {data.map((feature, index) => (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
              {index % 2 === 0 && (
                <>
                  <DetailCard
                    title={feature.title}
                    description={feature.description}
                  />
                  <ImgCard src={feature.img} />
                </>
              )}

              {index % 2 !== 0 && (
                <>
                  <ImgCard src={feature.img} />
                  <DetailCard
                    title={feature.title}
                    description={feature.description}
                  />
                </>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
